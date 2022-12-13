const butt1 = document.getElementById("butt1");
const butt2 = document.getElementById("butt2");
const butt3 = document.getElementById("butt3");
const butt4 = document.getElementById("butt4");
const butt5 = document.getElementById("butt5");
const cookie = document.getElementById("cookie");

const upgr1 = 10;
const upgr2 = upgr1 + (upgr1*0,3);
const upgr3 = upgr2 + (upgr2*0,3);
const upgr4 = upgr3 + (upgr3*0,3);
const upgr5 = upgr4 + (upgr4*0,3);

var amountOfCookies = 0;
var addCookiePerSec = 0;
var level = 0;
var levelCost = 10;

cookie.addEventListener("click", event =>
{   
    amountOfCookies += 1;
    cookie.innerText = amountOfCookies;
})

function addCookie()
{
    amountOfCookies += addCookiePerSec;
    cookie.innerText = amountOfCookies.toFixed(2);
}

butt1.addEventListener("click", event =>
{
    if(amountOfCookies < levelCost) return;
    addCookiePerSec += 0.1;
    level += 1;
    amountOfCookies -= levelCost;
})

butt2.addEventListener("click", event =>
{
    addCookiePerSec += 0.9;
})

butt3.addEventListener("click", event =>
{
    addCookiePerSec += 1;
})

butt4.addEventListener("click", event =>
{
    addCookiePerSec += 5;
})

butt5.addEventListener("click", event =>
{
    addCookiePerSec += 10;
})
setInterval(addCookie, 1000);

