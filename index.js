'use strict';
let Rx = rxjs;
let operators = rxjs.operators;

let privat = Rx.ajax.ajax({
    url : 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3',
    crossDomain: true,
    createXHR: function () {
        return new XMLHttpRequest();
    }
})
    .pipe(
        operators.map(e => e.response)

    );

let nasa = Rx.ajax.ajax({
    url : 'https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo',
    crossDomain: true,
    createXHR: function () {
        return new XMLHttpRequest();
    }
})
    .pipe(
        operators.map(e => e.response)
    );


let combined = Rx.combineLatest(privat, nasa);

combined.subscribe(res => {
        console.log(res)
});

// --Stream--
const privatSource = Rx.from(privat);

const stream = privatSource.pipe(
    operators.groupBy(e => e.base_ccy),

    operators.mergeMap(group => group.pipe(operators.toArray()))
);
stream.subscribe(val => console.log(val));