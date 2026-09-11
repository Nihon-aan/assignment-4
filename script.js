

let statTotal = document.getElementById('statTotal');
let statInterview = document.getElementById('statInterview');
let statRejected = document.getElementById('statRejected');

// count Update

statTotal.innerText = count('card');


statInterview.innerText = count('card-interview');


statRejected.innerText = count('card-rejected');

let currentTab = 'all';




let totalUpdate = count('card');






for (let i = 1; i <= totalUpdate; i++) {
    updateStatus(i);

}




















// machine

function updateStatus(num) {

    let card = document.getElementById('card-' + num);
    let badge = document.getElementById('badge-' + num);
    let interviewBtn = document.getElementById('interview-' + num);
    let rejectedBtn = document.getElementById('rejected-' + num);


    interviewBtn.addEventListener('click', function () {
        card.classList.remove('card-rejected');
        card.classList.add('card-interview');

        badge.innerText = 'INTERVIEW';
        badge.classList.remove('bg-[#EEF4FF]', 'border-none', 'text-[#002C5C]');
        badge.classList.remove('text-[#EF4444]', 'bg-[#f36464]', 'border-[#EF4444]');
        badge.classList.add('btn-outline', 'text-white', 'bg-[#7dd698]', 'border-[#10B981]');
        
        statInterview.innerText = count('card-interview');
        statRejected.innerText = count('card-rejected');

        updateTab(currentTab);


        


    });

    rejectedBtn.addEventListener('click', function () {
        card.classList.remove('card-interview');
        card.classList.add('card-rejected');

        badge.innerText = 'REJECTED';
        badge.classList.remove('bg-[#EEF4FF]', 'border-none', 'text-[#002C5C]');
        badge.classList.remove('text-[#10B981]', 'bg-[#7dd698]', 'border-[#10B981]');
        badge.classList.add('btn-outline', 'text-white', 'bg-[#f36464]', 'border-[#EF4444]');

        statInterview.innerText = count('card-interview');
        statRejected.innerText = count('card-rejected');

         updateTab(currentTab);
       
    });



}







document.getElementById('all-btn').addEventListener('click', function () {
    currentTab = 'all';
    updateTab(currentTab);
});

document.getElementById('interview-btn').addEventListener('click', function () {
    currentTab = 'interview';
    updateTab(currentTab);
});

document.getElementById('rejected-btn').addEventListener('click', function () {
    currentTab = 'rejected';
    updateTab(currentTab);
});




function updateTab(tab){

    if (tab === 'all') {
    let viewByStatusOfCards = document.getElementsByClassName('card');
    for (let viewByStatusOfCard of viewByStatusOfCards) {
        viewByStatusOfCard.classList.remove('hidden');
    }

    // Fix: check if total cards is 0
    if (count('card') === 0) {
        document.getElementById('empty').classList.remove('hidden');
    } else {
        document.getElementById('empty').classList.add('hidden');
    }

    document.getElementById('available-jobs').innerText = count('card');
}

   else if(tab ==='interview'){
         let Empty = statInterview.innerText;

    if (Number(Empty) === 0) {
        let viewByStatusOfCards = document.getElementsByClassName('card');
        for (let viewByStatusOfCard of viewByStatusOfCards) {
            viewByStatusOfCard.classList.add('hidden');
        }
        document.getElementById('empty').classList.remove('hidden');
    }


    else {
         let viewByStatusOfCards = document.getElementsByClassName('card');
        for (let viewByStatusOfCard of viewByStatusOfCards) {
            viewByStatusOfCard.classList.add('hidden');
        }
        let viewByStatusOfCardsI = document.getElementsByClassName('card-interview');
        for (let viewByStatusOfCard of viewByStatusOfCardsI) {
            viewByStatusOfCard.classList.remove('hidden');
        }
        document.getElementById('empty').classList.add('hidden');
    }

    document.getElementById('available-jobs').innerText = count('card-interview');


    }

    else if(tab==='rejected'){

        let Empty = statRejected.innerText;

    if (Number(Empty) === 0) {
          let viewByStatusOfCards = document.getElementsByClassName('card');
        for (let viewByStatusOfCard of viewByStatusOfCards) {
            viewByStatusOfCard.classList.add('hidden');
        }
        document.getElementById('empty').classList.remove('hidden');

    }

    else {
        let viewByStatusOfCards = document.getElementsByClassName('card');
        for (let viewByStatusOfCard of viewByStatusOfCards) {
            viewByStatusOfCard.classList.add('hidden');
            // viewByStatusOfCard.classList.remove('hidden');

        }

        let viewByStatusOfCardsR = document.getElementsByClassName('card-rejected');
        for (let viewByStatusOfCard of viewByStatusOfCardsR) {
            viewByStatusOfCard.classList.remove('hidden');
        }

        document.getElementById('empty').classList.add('hidden');

    }

     document.getElementById('available-jobs').innerText = count('card-rejected');

    }



}
























































function count(card) {
    let cards = document.getElementsByClassName(card);
    let count = 0;
    for (let card of cards) {

        count++;

    }
    return count;
}