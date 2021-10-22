console.log('kako si ti? hvala, dobro sam.');
// main variables
const tamagotchi = prompt("たまごっちの名前は 何ですか？What is your Tamagotchi's name?"); 
const statsBar = document.getElementById('stats');
let hungerCount = 0;
let sleepCount = 2;
let boredCount = 5;

let hungryState = document.getElementById('hungry');
let boredState = document.getElementById('bored');
let sleepyState = document.getElementById('tired');
let ageState = document.getElementById('age');
let koDama = document.createElement('img');
// koDama.src = "https://i.imgur.com/tJJEcAj.jpg";
// document.getElementById('tmgc').append(koDama);

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
        count = increment(hungerCount,1)
        
        if(hungerCount >= 15) {
            //gameOver state
            clearInterval(interval);
        }
    }, baseRate)
}

function initSleeper(){
    let interval;
    // let count = 2;
    let baseRate = 10000;

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
        count = increment(sleepCount,1)

        if(sleepCount >= 7) {
            //gameOver state
            clearInterval(interval);
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
        count = increment(boredCount,1)
        
        if(boredCount >= 15) {
            //gameOver state
            clearInterval(interval);
        }
    }, baseRate)
}

function initAge(){
    let interval;
    let count = 1;
    let baseRate = 10000;
    
    function renderNum(num){
        ageState.innerText = `Age in weeks: ${num}`;
    }
    
    function increment(val, step){
        return val += step;
    }
    
    interval = setInterval(() => {
        //display content
        renderNum(count);
        //update it
        count = increment(count,1)
        
        if(count >= 15) {
            //gameOver state
            clearInterval(interval);
        }
    }, baseRate)
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