let heartQuantity = 0;
let hertPerSeconds = 0;
let heartsPerClick = 1;

const heartsQuantityText = document.getElementById('labelQuantity');
const hertPerSecondsText = document.getElementById('labelPerSec');
const heartsPerClickText = document.getElementById('labelPerClick');

const mainHeartButton = document.querySelector("#heartDiv #heart");


//Upgrades
let upgradeCosts = [10, 100, 1000, 5000, 100000];  // x + x*30%
let upgradeValue = [0.1, 1, 5, 10, 100];   
let levelOfUpgrade = [0, 0, 0, 0, 0];

const cost1 = document.getElementById('cost1');
const cost2 = document.getElementById('cost2');
const cost3 = document.getElementById('cost3');
const cost4 = document.getElementById('cost4');
const cost5 = document.getElementById('cost5');

const lvl1 = document.getElementById('lvl1');
const lvl2 = document.getElementById('lvl2');
const lvl3 = document.getElementById('lvl3');
const lvl4 = document.getElementById('lvl4');
const lvl5 = document.getElementById('lvl5');

//Buttons
const button1 = document.getElementById('butt1');
const button2 = document.getElementById('butt2');
const button3 = document.getElementById('butt3');
const button4 = document.getElementById('butt4');
const button5 = document.getElementById('butt5');




mainHeartButton.addEventListener('click', () => 
{
        heartQuantity += heartsPerClick;
        blood();
        updateDisplay();
});




function updateDisplay() 
{
    heartsQuantityText.innerHTML = "Ilość serc: " + heartQuantity.toFixed(1);
    hertPerSecondsText.innerHTML = "Serca na sekundę: " + hertPerSeconds.toFixed(1);
    heartsPerClickText.innerHTML = "Serca na kliknięcie: " + heartsPerClick.toFixed(1);

    button1.innerHTML = "+" + (upgradeValue[0] * (levelOfUpgrade[0] + 1)).toFixed(1) + " serc na sekundę";
    button2.innerHTML = "+" + (upgradeValue[1] * (levelOfUpgrade[1] + 1)).toFixed(1) + " serc na sekundę";
    button3.innerHTML = "+" + (upgradeValue[2] * (levelOfUpgrade[2] + 1)).toFixed(1) + " serc na sekundę";
    button4.innerHTML = "+" + (upgradeValue[3] * (levelOfUpgrade[3] + 1)).toFixed(1) + " serc na sekundę";
    button5.innerHTML = "+" + (upgradeValue[4] * (levelOfUpgrade[4] + 1)).toFixed(1) + " serc na sekundę";

    lvl1.innerHTML = levelOfUpgrade[0] + " lvl";
    lvl2.innerHTML = levelOfUpgrade[1] + " lvl";
    lvl3.innerHTML = levelOfUpgrade[2] + " lvl";
    lvl4.innerHTML = levelOfUpgrade[3] + " lvl";
    lvl5.innerHTML = levelOfUpgrade[4] + " lvl";

    cost1.innerHTML = "🩸 " + (upgradeCosts[0]).toFixed(1);
    cost2.innerHTML = "🩸 " + (upgradeCosts[1]).toFixed(1);
    cost3.innerHTML = "🩸 " + (upgradeCosts[2]).toFixed(1);
    cost4.innerHTML = "🩸 " + (upgradeCosts[3]).toFixed(1);
    cost5.innerHTML = "🩸 " + (upgradeCosts[4]).toFixed(1);

}

function updateHearts()
{
    heartQuantity += hertPerSeconds;
}


button1.addEventListener('click', () => 
{
    if(heartQuantity < upgradeCosts[0]) return;
    heartQuantity -= upgradeCosts[0];
    upgradeCosts[0] += upgradeCosts[0] * 1.3;
    levelOfUpgrade[0]++;
    hertPerSeconds += levelOfUpgrade[0] * upgradeValue[0]; 

    button1.translate(100, 100);

});


button2.addEventListener('click', () => 
{
    if(heartQuantity < upgradeCosts[1]) return;
    heartQuantity -= upgradeCosts[1];
    upgradeCosts[1] += upgradeCosts[1] * 1.3;
    levelOfUpgrade[1]++;
    hertPerSeconds += levelOfUpgrade[1] * upgradeValue[1]; 
});

button3.addEventListener('click', () => 
{
    if(heartQuantity < upgradeCosts[2]) return;
    heartQuantity -= upgradeCosts[2];
    upgradeCosts[2] += upgradeCosts[2] * 1.3;
    levelOfUpgrade[2]++;
    hertPerSeconds += levelOfUpgrade[2] * upgradeValue[2]; 
});

button4.addEventListener('click', () => 
{
    if(heartQuantity < upgradeCosts[3]) return;
    heartQuantity -= upgradeCosts[3];
    upgradeCosts[3] += upgradeCosts[3] * 1.3;
    levelOfUpgrade[3]++;
    hertPerSeconds += levelOfUpgrade[3] * upgradeValue[3]; 
});

button5.addEventListener('click', () => 
{
    if(heartQuantity < upgradeCosts[4]) return;
    heartQuantity -= upgradeCosts[4];
    upgradeCosts[4] += upgradeCosts[4] * 1.3;
    levelOfUpgrade[4]++;
    hertPerSeconds += levelOfUpgrade[4] * upgradeValue[4]; 
});



let tab = [cost1, cost2, cost3, cost4, cost5];

function checkAvailability()
{
    for (let i = 0; i < 5; i++)
    {
        if(heartQuantity >= upgradeCosts[i])
        {
            tab[i].style.backgroundColor = "rgba(187, 11, 12, 0.5)";
        }
        else
        {
            tab[i].style.backgroundColor = "rgba(69, 32, 46, 0.5)";
        }
    }

}

let coox, cooy;

function mouseCoordinates(event)
{
    coox = event.clientX;
    cooy = event.clientY;
    console.log(coox);
}

document.onmouseup = mouseCoordinates;

function blood()
{
    const containter = document.querySelector("#heartDiv");
    const drop = document.createElement('div');
    console.log(drop);
    drop.classList.add('blood');
    drop.innerHTML = '🩸';
    drop.style.top = cooy + 'px';
    drop.style.left = coox + 'px';
    containter.appendChild(drop);
    setTimeout(() => {drop.remove();}, 3000);
}


updateDisplay();

setInterval(() => 
{
    updateHearts();
    updateDisplay();
    checkAvailability();
    
}, 1000);


