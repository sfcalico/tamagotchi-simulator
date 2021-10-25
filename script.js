// console.log('kako si ti? hvala, dobro sam.');
// main variables
const tamagotchi = prompt("What is your Tamagotchi's name?"); 
const statsBar = document.getElementById('stats');
let hungerCount = 1;
let sleepCount = 2;
let boredCount = 3;

let hungryState = document.getElementById('hungry');
let boredState = document.getElementById('bored');
let sleepyState = document.getElementById('tired');
let ageState = document.getElementById('age');
const koDama = document.createElement('img');
koDama.src = './images/bear-img.jpg';
koDama.height = 200;
koDama.width = 200;
document.querySelector('#tmgc').appendChild(koDama);

// initiate stats board
statsBar.innerText = `${tamagotchi}'s vitals`;
hungryState.innerText = "Hunger:";
boredState.innerText = "Boredness:";
sleepyState.innerText = "Sleepiness:";
ageState.innerText = "Age:";

// initiate counts
function initHunger(){
    let interval;
    // let count = 0;
    let baseRate = 4000;

    function renderNum(num){
        hungryState.innerText = `Hunger: ${num}`
    }
    
    function increment(val, step){
        return val += step;
    }
    
    interval = setInterval(() => {
        //display content
        renderNum(hungerCount);
        //update it
        hungerCount = increment(hungerCount,1);
        
        if(hungerCount >= 15) {
            //gameOver state
            clearInterval(interval);
            initGameover();
        }
    }, baseRate)
}

function initSleeper(){
    let interval;
    // let count = 2;
    let baseRate = 8000;

    function renderNum(num){
        sleepyState.innerText = `Sleepiness: ${num}`;
    }

    function increment(val, step){
        return val += step;
    }
    
    interval = setInterval(() => {
        //display content
        renderNum(sleepCount);
        //update it
        sleepCount = increment(sleepCount,1)

        if(sleepCount >= 15) {
            //gameOver state
            clearInterval(interval);
            initGameover();
        }
    }, baseRate)
}

function initBoredom(){
    let interval;
    // let count = 5;
    let baseRate = 4000;
    
    function renderNum(num){
        boredState.innerText = `Boredness: ${num}`;
    }
    
    function increment(val, step){
        return val += step;
    }
    
    interval = setInterval(() => {
        //display content
        renderNum(boredCount);
        //update it
        boredCount = increment(boredCount,1)
        
        if(boredCount >= 15) {
            //gameOver state
            clearInterval(interval);
            initGameover();
        }
    }, baseRate)
}

function initAge(){
    let interval;
    let count = 1;
    let baseRate = 10000;
    
    function renderNum(num){
        ageState.innerText = `Age: ${num}`;
    }
    
    function increment(val, step){
        return val += step;
    }
}

function initGameover() {
    document.getElementById("controls").style.filter = "blur(5px)";
    document.getElementById("metrics").style.filter = "blur(5px)";
    koDama.src = './images/dead-bear.jpg';
    alert("You've neglected your pet and they've died. See you in jail, you monster!");
    alert("Please reload page to try again.")
}

initSleeper();
initAge();
initHunger();
initBoredom();

// Button Functions
function feed(){
    hungerCount -= 3;
    while (hungerCount < 0) {
        hungerCount = 0;
    }
}
function sleep(){
    sleepCount -= 5;
    while (sleepCount < 0) {
        sleepCount = 0;
    }
}
function play() {
    boredCount -= 4;
    while (boredCount < 0) {
        boredCount = 0;
    }
}

// Action buttons
addFeed = document.getElementById('feed');
addSleep = document.getElementById('sleep');
addPlay = document.getElementById('play');

addFeed.innerText = 'Feed';
addSleep.innerText = 'Sleep';
addPlay.innerText = 'Play';

addFeed.addEventListener('click', feed);
addSleep.addEventListener('click', sleep);
addPlay.addEventListener('click', play);




// To use a class or to not use a class?
// class Tamagotchi {
    //     constructor(name, sleepiness = 3, hunger = 4, boredom = 1, age = 1) {
    //         this.name = name;
    //         this.state = lightsOff ? 'asleep' : 'awake';
    //     }
    // }