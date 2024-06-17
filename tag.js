// 引入文件系统模块中的读取和写入功能
import fs from "fs";
// 解析路径模块，用于处理文件路径
import path from "path";
import Miao from "miao-lang";

// 定义要读取的文件夹路径和输出的JSON文件路径
const folderPath = 'docs/src';
const outputFilePath = 'docs/src/public/tag.txt';
// 定义要排除的文件夹、文件名前缀和文件扩展名
const excludedFolders = ['layout', 'mine', 'test', 'public'];
const excludedPrefixes = [
    /^(\d+-)/, // 匹配以数字加下划线开头的文件名前缀
    /^c_/,     // 匹配以 "c_" 开头的文件名前缀
    // 可以继续添加其他需要排除的正则表达式
];

// 异步函数，用于递归读取指定文件夹下的所有.md文件信息
const readMarkdownFilesInDirectory = async (folderPath, excludedFolders = [], excludedPrefixes = []) => {
    let markdownFilesObject = {}; // 使用对象存储文件信息，按路径层级组织

    try {
        // 读取文件夹中的所有内容
        const files = await fs.promises.readdir(folderPath);

        // 遍历文件夹中的每个内容
        for (const file of files) {
            const filePath = path.join(folderPath, file);
            const fileStat = await fs.promises.lstat(filePath);

            // 如果是目录，则递归读取其内容，但要检查是否在排除列表中
            if (fileStat.isDirectory()) {
                if (!excludedFolders.includes(file)) {
                    // 递归调用自身，读取子文件夹中的.md文件信息
                    const subMarkdownFiles = await readMarkdownFilesInDirectory(filePath, excludedFolders, excludedPrefixes);

                    // 只在子文件夹有内容时才将其添加到结果对象中
                    if (Object.keys(subMarkdownFiles).length > 0) {
                        markdownFilesObject[path.relative(folderPath, filePath)] = subMarkdownFiles;
                    }
                }
            } else {
                // 如果是.md文件，并且不在排除的文件列表中，将文件信息添加到对象中
                if (file.endsWith('.md') && !isExcluded(file, excludedPrefixes)) {
                    const relativeFilePath = path.relative(folderPath, filePath);
                    const folderHierarchy = path.dirname(relativeFilePath);

                    let fileName = file === 'index.md' ? path.basename(folderPath) : file.slice(0, -3); // remove .md extension
                    // 初始化该层级路径的数组（如果未初始化过）
                    if (!markdownFilesObject[folderHierarchy]) {
                        markdownFilesObject[folderHierarchy] = [];
                    }

                    markdownFilesObject[folderHierarchy].push({
                        name: fileName,
                        path: relativeFilePath,
                        size: fileStat.size
                    });
                }
            }
        }

        return markdownFilesObject;
    } catch (err) {
        throw new Error(`读取文件夹错误: ${err}`);
    }
};

// 检查文件名是否被排除
const isExcluded = (fileName, excludedPrefixes) => {
    for (const prefix of excludedPrefixes) {
        if (typeof prefix === 'string' && fileName.startsWith(prefix)) {
            return true;
        } else if (prefix instanceof RegExp && prefix.test(fileName)) {
            return true;
        }
    }
    return false;
};

// 调用异步函数获取所有.md文件信息
readMarkdownFilesInDirectory(folderPath, excludedFolders, excludedPrefixes)
    .then(markdownFilesObject => {
        // 将结果转换为JSON格式字符串
        const markdownFilesJSON = JSON.stringify(markdownFilesObject, null, 2);

        // 使用 miao-lang 加密 JSON 字符串
        const encryptedJSON = Miao.default.encode(markdownFilesJSON);
        return
        // 将加密后的JSON字符串写入文件
        fs.promises.writeFile(outputFilePath, encryptedJSON, 'utf8')
            .then(() => {
                console.log(`已保存包含Markdown文件信息的JSON文件至 ${outputFilePath}`);
            })
            .catch(err => console.error(`写入JSON文件错误: ${err}`));
    })
    .catch(err => console.error(`读取文件夹错误: ${err}`));