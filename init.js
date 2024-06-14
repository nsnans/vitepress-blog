let count = 0;
let timer;
const maxInterval = 1000;

document.addEventListener('keydown', function (event) {
    if (event.key === 'r' || event.key === 'R') {
        count++;

        if (count === 1) {
            timer = setTimeout(resetCount, maxInterval);
        }
        if (count === 5) {
            document.body.style.fontFamily = 'inherit'
            resetCount();
        }
    } else {
        resetCount();
    }
});

function resetCount() {
    count = 0;
    clearTimeout(timer);
}

console.log('快速按5次r，恢复默认字体');

// https://blog.csdn.net/weixin_64433668/article/details/135605147
// 防止网页被嵌入 iframe
try {
    top.location.hostname;
    if (top.location.hostname !== window.location.hostname) {
        top.location.href = window.location.href;
    }
} catch (e) {
    top.location.href = window.location.href;
}