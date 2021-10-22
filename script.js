console.log('kako si ti? hvala, dobro sam.');

const TamaNoNamae = prompt("たまごっちの名前は 何ですか？What is your Tamagotchi's name?"); 
const statsBar = document.getElementById('stats');

let hungryState = document.getElementById('hungry');
let boredState = document.getElementById('bored');
let sleepyState = document.getElementById('tired');
let ageState = document.getElementById('age');

statsBar.innerText = `${TamaNoNamae}'s vitals`;
hungryState.innerText = "Hunger:";
boredState.innerText = "Boredness:";
sleepyState.innerText = "Sleepiness:";
ageState.innerText = "Age:";
//
// // Food and Hunger
//

function initHunger(){
    let interval;
    let count = 0;
    let baseRate = 5000;

    function renderNum(num){
        hungryState.innerText = `Hunger: ${num}`
    }
    
    function increment(val, step){
        return val += step;
    }
    
    interval = setInterval(() => {
        //display content
        renderNum(count);
        //update it
        count = increment(count,1)
        
        if(count >= 10) {
            //gameOver state
            clearInterval(interval);
        }
    }, baseRate)
}
function feed(){

}

//
// // Sleepiness Section
//

function initSleeper(){
    let interval;
    let count = 2;
    let baseRate = 10000;

    function renderNum(num){
        sleepyState.innerText = `Sleepiness: ${num}`;
    }

    function increment(val, step){
        return val += step;
    }

    interval = setInterval(() => {
        //display content
        renderNum(count);
        //update it
        count = increment(count,1)

        if(count >= 7) {
            //gameOver state
            clearInterval(interval);
        }
    }, baseRate)
}
function nap(){
    
}


//
// // Boredom and play section
//

function initBoredom(){
    let interval;
    let count = 5;
    let baseRate = 4000;
    
    function renderNum(num){
        boredState.innerText = `Boredness: ${num}`;
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
function play() {
    
}

// // Age
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





// To use a class or to not use a class?
// class Tamagotchi {
//     constructor(name, sleepiness = 3, hunger = 4, boredom = 1, age = 1) {
//         this.name = name;
//         this.state = lightsOff ? 'asleep' : 'awake';
//     }
// }