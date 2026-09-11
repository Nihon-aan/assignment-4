

let statTotal = document.getElementById('statTotal');
let statInterview = document.getElementById('statInterview');
let statRejected = document.getElementById('statRejected');

// count Update

statTotal.innerText = count('card');


statInterview.innerText = count('card-interview');


statRejected.innerText = count('card-rejected');

let currentTab = 'all';




let totalUpdate = count('card');























































function count(card) {
    let cards = document.getElementsByClassName(card);
    let count = 0;
    for (let card of cards) {

        count++;

    }
    return count;
}