const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('.preogress-text');
const question = document.querySelector('#question');
const question = document.querySelector('#question');

let currentQuestion;
let acceptingAnswer = true;
let questions = [
    {
        imgLink: '../img/first-flag.png',
        choice1: 'Crotia',
        choice2: 'Ecuador',
        choice3: 'Canada',
        choice4: 'Denmark ',
        answer: 4
    },
    {
        imgLink: '../img/first-flag.png',
        choice1: 'Palestine',
        choice2: 'Palestine2',
        choice3: 'Palestine3',
        choice4: 'Palestine4',
        answer: 1
    },
    {
        imgLink: '../img/first-flag.png',
        choice1: 'Egypt',
        choice2: 'Egypt2',
        choice3: 'Egypt3',
        choice4: 'Egypt4',
        answer: 2
    },
    {
        imgLink: '../img/first-flag.png',
        choice1: 'France',
        choice2: 'France2',
        choice3: 'France3',
        choice4: 'France4 ',
        answer: 3
    },
    {
        imgLink: '../img/first-flag.png',
        choice1: 'USA',
        choice2: 'USA2',
        choice3: 'USA3',
        choice4: 'USA4 ',
        answer: 4
    },
    {
        imgLink: '../img/first-flag.png',
        choice1: 'UAE',
        choice2: 'UAE2',
        choice3: 'UAE3',
        choice4: 'UAE4 ',
        answer: 1
    }
]

const MAX_QUESTION = 4;

