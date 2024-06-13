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
