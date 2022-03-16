const counters = document.querySelectorAll('.counter');
counters.forEach((counter) => {
    counter.innerHTML = 0;
    const updateCounter = () => {
        const tragetCount = +counter.getAttribute('data-traget');

        const startingNum = +counter.innerHTML;

        const incr = tragetCount / 100;

        if (startingNum < tragetCount) {
            counter.innerHTML = `${Math.round(startingNum + incr)}`;
            setTimeout(updateCounter, 20);
        }
        else {
            counter.innerHTML = tragetCount;
        }

    }

    updateCounter();
});