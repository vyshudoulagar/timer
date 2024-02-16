const timer = process.argv.slice(2);

for (const time of timer) {
    if (time < 0 || isNaN(time)) {
        return;
    }
    setTimeout(() => {
        process.stdout.write('\x07');
    }, time * 1000)
}