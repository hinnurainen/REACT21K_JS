const arrangeItems = nodes => {
    const radius = '12em',
        start = -90,
        $els = [...nodes],
        numberOfEls = $els.length,
        slice = 360 / numberOfEls;
    index = 0;

    $els.forEach((el, i) => {
        const rotate = slice * i + start;
        const rotateReverse = rotate * -1;

        el.style.transform = `rotate(${rotate}deg) translate(${radius}) rotate(${rotateReverse}deg)`;
    })
}