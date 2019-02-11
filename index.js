'use strict';

let Rx = rxjs;
let operators = rxjs.operators;

var myBtn = document.querySelector('.myBtn');
// var i = 0;
// let myStream = new Rx.Observable(observer => {
//     setInterval(() => {
//         i++;
//         observer.next(i);
//     }, 1000);
// }).pipe(
//     operators.map(value => {
//         return value * 2;
//     }),
//     operators.filter(value => {
//         return value % 3 === 0;
//     })
// );

const myUpperText = () => sourse => {
    return new Rx.Observable(observer => {
        sourse.subscribe(event => {
            observer.next((event.target.innerText).toUpperCase());
        })
    });
}

let myStream = Rx.fromEvent(myBtn, 'click').pipe(myUpperText());

myStream.subscribe(iterator => {
    console.log(iterator);
})
// myStream.subscribe(
//     resolve => {
//         console.log('Next', resolve);
//     },
//     error => {
//         console.log('Error', error);
//     },
//     complete => {
//         console.log('Complete', complete);
//     },
// )
// .unsubscribe();

// myStream.subscribe(
//     resolve => {
//         console.log('Next2', resolve);
//     },
//     error => {
//         console.log('Error2', error);
//     },
//     complete => {
//         console.log('Complete2', complete);
//     },
// )

// let streamFromEvent = Rx.fromEvent(myBtn, 'click');

// streamFromEvent.subscribe(event => {
//     console.log(event);
// });

// let myStream2 = new Rx.Observable((observer) => {
//     //-------
//     observer.next(false);
// }).subscribe(resolve => {
//     console.log(resolve);
// })

// let mySubject = new Rx.BehaviorSubject(1);

// mySubject.subscribe(data => {
//     console.log(data);
// });