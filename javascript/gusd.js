// Source - https://stackoverflow.com/a/58002522
// Posted by Jaromanda X, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-17, License - CC BY-SA 4.0

function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var obj = document.getElementById(id);
    var starttime;
    var fn = (ms) => {
        let progress = 0;
        if(starttime === undefined) {
            starttime = ms;
        } else {
            progress = ms - starttime;
            if (progress >= duration) {
                // the `+ ' ' + progress + 'ms';` is just to show the duration, wouldn't use that in final code
                current = end.toLocaleString()  + ' ' + progress + 'ms';
            } else {
                current = start + Math.floor(progress/duration * range);
            }
        }
        obj.innerHTML = current.toLocaleString();
        if (progress < duration) {
            requestAnimationFrame(fn);
        }
    };
    requestAnimationFrame(fn);
}
animateValue('value', 0, 89, 3000);