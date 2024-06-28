import{_ as t,a7 as a,O as e,k as n,V as l,a0 as s,R as i,N as p}from"./chunks/framework.CDdhbaWU.js";const S=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"shell/shell/tips/2-目录查看.md","filePath":"shell/shell/tips/2-目录查看.md"}'),r={name:"shell/shell/tips/2-目录查看.md"},d=s("h3",{id:"目录查看-ls",tabindex:"-1"},[i("目录查看 ls "),s("a",{class:"header-anchor",href:"#目录查看-ls","aria-label":'Permalink to "目录查看 ls"'},"​")],-1),c=s("hr",null,null,-1),g=s("div",{class:"language-sh vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ls"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 仅列出当前目录可见文件")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ls"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -l"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    # 列出当前目录可见文件详细信息")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ls"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -hl"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"   # 列出详细信息并以可读大小显示文件大小")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ls"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -al"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"   # 列出所有文件（包括隐藏）的详细信息")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ls"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --human-readable"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --size"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -1"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -S"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --classify"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," # 按文件大小排序")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"du"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -sh"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," *"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," |"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," sort"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -h"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," # 按文件大小排序(同上)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ls"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -a"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    # 显示当前目录下包括隐藏文件在内的所有文件列表")])])])],-1),y=s("hr",null,null,-1),F=s("blockquote",null,[s("p",null,[s("strong",null,"语法")])],-1),D=s("div",{class:"language-sh vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"ls"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," [选项] [文件名...]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [-1abcdfgiklmnopqrstuxABCDFGLNQRSUX] [-w cols] [-T cols] [-I pattern] [--full-time] ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [--format"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{long,verbose,commas,across,vertical,single-col‐umn}] ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [--sort"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{none,time,size,extension}] [--time"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{atime,access,use,ctime,status}] ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"   [--color["),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"{none,auto,always}]] [--help] [--version] [--]")])])])],-1),A=s("hr",null,null,-1),C=s("blockquote",null,[s("p",null,[s("strong",null,"选项")])],-1),o=s("div",{class:"language-sh vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-C"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"     # 多列输出，纵向排序。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-F"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'     # 每个目录名加 "/" 后缀，每个 FIFO 名加 "|" 后缀， 每个可运行名加“ * ”后缀。')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-R"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"     # 递归列出遇到的子目录。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-a"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'     # 列出所有文件，包括以 "." 开头的隐含文件。')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-c"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"     # 使用“状态改变时间”代替“文件修改时间”为依据来排序（使用“-t”选项时）或列出（使用“-l”选项时）。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-d"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"     # 将目录名像其它文件一样列出，而不是列出它们的内容。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-i"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"     # 输出文件前先输出文件系列号（即 i 节点号: i-node number）。 -l  列出（以单列格式）文件模式")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # （file mode），文件的链接数，所有者名，组名，文件大小（以字节为单位），时间信息，及文件名。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 缺省时，时间信息显示最近修改时间；可以以选项“-c”和“-u”选择显示其它两种时间信息。对于设备文件，")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 原先显示文件大小的区域通常显示的是主要和次要的信号（majorand minor device numbers）。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-q"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"     # 将文件名中的非打印字符输出为问号。（对于到终端的输出这是缺省的。）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-r"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"     # 逆序排列。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-t"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"     # 按时间信息排序。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-u"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"     # 使用最近访问时间代替最近修改时间为依据来排序（使用“-t”选项时）或列出（使用“-l”选项时）。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-1"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"     # 单列输出。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-1,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --format=single-column"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  # 一行输出一个文件（单列输出）。如标准输出不是到终端，此选项就是缺省选项。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-a,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --all"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," # 列出目录中所有文件，包括以“.”开头的文件。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-b,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --escape"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," # 把文件名中不可输出的字符用反斜杠加字符编号(就像在 C 语言里一样)的形式列出。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-c,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --time=ctime,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --time=status")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # 按文件状态改变时间（i节点中的ctime）排序并输出目录内")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # 容。如采用长格式输出（选项“-l”），使用文件的状态改")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # 变时间取代文件修改时间。【译注：所谓文件状态改变（i节")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # 点中以ctime标志），既包括文件被修改，又包括文件属性（ 如所有者、组、链接数等等）的变化】")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-d,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --directory")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # 将目录名像其它文件一样列出，而不是列出它们的内容。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-f"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    # 不排序目录内容；按它们在磁盘上存储的顺序列出。同时启 动“ -a ”选项，如果在“ -f ”之前存在“ -l”、")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # “ - -color ”或“ -s ”，则禁止它们。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-g"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    # 忽略，为兼容UNIX用。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-i,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --inode")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # 在每个文件左边打印  i  节点号（也叫文件序列号和索引号:  file  serial  number and index num‐")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # ber）。i节点号在每个特定的文件系统中是唯一的。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-k,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --kilobytes")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # 如列出文件大小，则以千字节KB为单位。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-l,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --format=long,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --format=verbose")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # 输出的信息从左到右依次包括文件名、文件类型、权限、硬链接数、所有者名、组名、大小（byte）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # 、及时间信息（如未指明是其它时间即指修改时间）。对于6个月以上的文件或超出未来")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # 1小时的文件，时间信息中的时分将被年代取代。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # 每个目录列出前，有一行“总块数”显示目录下全部文件所占的磁盘空间。块默认是1024字节；")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # 如果设置了 POSIXLY_CORRECT 的环境变量，除非用“-k”选项，则默认块大小是 512 字节。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # 每一个硬链接都计入总块数（因此可能重复计数），这无 疑是个缺点。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# 列出的权限类似于以符号表示（文件）模式的规范。但是 ls")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # 在每套权限的第三个字符中结合了多位（ multiple bits ） 的信息，如下： s 如果设置了  setuid")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # 位或 setgid   位，而且也设置了相应的可执行位。 S 如果设置了 setuid 位或 setgid")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # 位，但是没有设置相应的可执行位。 t 如果设置了  sticky  位，而且也设置了相应的可执行位。  T")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # 如果设置了 sticky 位，但是没有设置相应的可执行位。              x")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # 如果仅仅设置了可执行位而非以上四种情况。 - 其它情况（即可执行位未设置）。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-m,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --format=commas")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # 水平列出文件，每行尽可能多，相互用逗号和一个空格分隔。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-n,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --numeric-uid-gid")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # 列出数字化的 UID 和 GID 而不是用户名和组名。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-o"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    #  以长格式列出目录内容，但是不显示组信息。等于使用“         --format=long          --no-group")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # ”选项。提供此选项是为了与其它版本的 ls 兼容。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-p"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    #  在每个文件名后附上一个字符以说明该文件的类型。类似“ -F ”选项但是不 标示可执行文件。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-q,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --hide-control-chars")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # 用问号代替文件名中非打印的字符。这是缺省选项。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-r,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --reverse")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # 逆序排列目录内容。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-s,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --size")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # 在每个文件名左侧输出该文件的大小，以    1024   字节的块为单位。如果设置了   POSIXLY_CORRECT")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # 的环境变量，除非用“ -k ”选项，块大小是 512 字节。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-t,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --sort=time")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # 按文件最近修改时间（ i 节点中的 mtime ）而不是按文件名字典序排序，新文件 靠前。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-u,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --time=atime,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --time=access,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --time=use")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # 类似选项“    -t    ”，但是用文件最近访问时间（    i     节点中的     atime     ）取代文件修")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"      # 改时间。如果使用长格式列出，打印的时间是最近访问时间。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-w,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --width"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," cols")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 假定屏幕宽度是      cols      （      cols     以实际数字取代）列。如未用此选项，缺省值是这")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 样获得的：如可能先尝试取自终端驱动，否则尝试取自环境变量          COLUMNS          （如果设")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 置了的话），都不行则取 80 。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-x,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --format=across,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --format=horizontal")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 多列输出，横向排序。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-A,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --almost-all")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'       # 显示除 "." 和 ".." 外的所有文件。')]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-B,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --ignore-backups")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 不输出以“ ~ ”结尾的备份文件，除非已经在命令行中给出。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-C,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --format=vertical")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 多列输出，纵向排序。当标准输出是终端时这是缺省项。使用命令名 dir 和 d 时， 则总是缺省的。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-D,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --dired")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 当采用长格式（“-l”选项）输出时，在主要输出后，额外打印一行：  //DIRED//  BEG1 END1 BEG2")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # END2 ...")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# BEGn 和 ENDn 是无符号整数，记录每个文件名的起始、结束位置在输出中的位置（")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"#        字节偏移量）。这使得          Emacs          易于找到文件名，即使文件名包含空格或换行等非正")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"#        常字符也无需特异的搜索。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# 如果目录是递归列出的（“ -R ”选项），每个子目录后列出类似一行：")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # //SUBDIRED//  BEG1 END1 ...  【译注：我测试了 TurboLinux4.0 和 RedHat6.1 ，发现它们都是在 “")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # //DIRED//     BEG1...     ”之后列出“     //SUBDIRED//     BEG1     ...      ”，也即只有一个")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 而不是在每个子目录后都有。而且“ //SUBDIRED// BEG1 ... ”列出的是各个子目 录名的偏移。】")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-F,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --classify,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --file-type")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 在每个文件名后附上一个字符以说明该文件的类型。“  * ”表示普通的可执行文件； “ / ”表示目录；“")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # @ ”表示符号链接；“ | ”表示FIFOs；“ = ”表示套接字 (sockets) ；什么也没有则表示普通文件。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-G,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --no-group")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 以长格式列目录时不显示组信息。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-I,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --ignorepattern")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 除非在命令行中给定，不要列出匹配shell文件名匹配式（pattern ，不是指一般")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'       # 表达式）的文件。在shell中，文件名以"."起始的不与在文件名匹配式(pattern)')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 开头的通配符匹配。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-L,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --dereference")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 列出符号链接指向的文件的信息，而不是符号链接本身。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-N,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --literal")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 不要用引号引起文件名。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-Q,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --quote-name")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 用双引号引起文件名，非打印字符以 C 语言的方法表示。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-R,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --recursive")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 递归列出全部目录的内容。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-S,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --sort=size")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 按文件大小而不是字典序排序目录内容，大文件靠前。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-T,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --tabsize"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," cols")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 假定每个制表符宽度是 cols 。缺省为 8。为求效率， ls 可能在输出中使用制表符。  若 cols 为")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"       0，则不使用制表符。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-U,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --sort=none")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 不排序目录内容；按它们在磁盘上存储的顺序列出。（选项“-U”和“-f”的不")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 同是前者不启动或禁止相关的选项。）这在列很大的目录时特别有用，因为不加排序")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 能显著地加快速度。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"-X,"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --sort=extension")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'       # 按文件扩展名（由最后的 "." 之后的字符组成）的字典序排序。没有扩展名的先列 出。')]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"--color["),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"=when]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 指定是否使用颜色区别文件类别。环境变量  LS_COLORS  指定使用的颜色。如何设置 这个变量见 dir‐")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # colors(1) 。 when 可以被省略，或是以下几项之一：")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"none"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," # 不使用颜色，这是缺省项。")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # auto 仅当标准输出是终端时使用。 always 总是使用颜色。指定 --color 而且省略 when  时就等同于")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # --color=always 。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"--full-time")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 列出完整的时间，而不是使用标准的缩写。格式如同          date(1)          的缺省格式；此格式")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 是不能改变的，但是你可以用 cut(1) 取出其中的日期字串并将结果送至命令 “ date -d ”。")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# 输出的时间包括秒是非常有用的。（ Unix 文件系统储存文件的时间信息精确到秒，")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 因此这个选项已经给出了系统所知的全部信息。）例如，当你有一个         Makefile          文件")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"       # 不能恰当地生成文件时，这个选项会提供帮助。")])])])],-1),B=s("hr",null,null,-1),u=s("blockquote",null,[s("p",null,[s("strong",null,"参数")])],-1),m=s("p",null,"目录：指定要显示列表的目录，也可以是具体的文件。",-1),E=s("hr",null,null,-1);function _(f,b,v,x,R,I){const h=a("Card"),k=a("Collapse");return p(),e("div",null,[d,c,n(h,null,{title:l(()=>[i(" 实例 ")]),default:l(()=>[g]),_:1}),y,n(k,null,{default:l(()=>[F,D,A,C,o,B,u,m]),_:1}),E])}const O=t(r,[["render",_]]);export{S as __pageData,O as default};
