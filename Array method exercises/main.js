const sample = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod, soluta debitis reiciendis recusandae necessitatibus consequatur. Et odit quas quis, nulla sequi voluptatem, impedit optio, illo nihil at distinctio aliquid.';

const splitSample = sample.split(' ');
console.log(splitSample);

const oSample = splitSample.map((el) => {
    if (el.indexOf('o')) {
        return 1
    } else {
        return 0
    }
});

console.log(oSample);