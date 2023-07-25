const body = document.querySelector("body");
const hourHand = document.querySelector(".hour");
const minHand = document.querySelector(".min");
const secHand = document.querySelector(".sec");
const mode = document.querySelector(".mode-switch");

mode.onclick = handleClick;

if(localStorage.getItem("mode") === "Dark Mode"){
    body.classList.add("dark");
    mode.textContent = "Light Mode";
}
function handleClick() {
    body.classList.toggle("dark");

    const isDarkMode = body.classList.contains("dark");

    mode.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    //in local storage, looks over reloading into the same theme
    localStorage.setItem("mode" , isDarkMode ? "Dark Mode": "Light Mode")
}

const updateTime = () => {
    let date = new Date();
    let secToDeg =  (date.getSeconds() / 60) * 360; 
    let minToDeg=  (date.getMinutes() / 60) * 360; 
    let hrToDeg =  (date.getHours() / 12) * 360 + minToDeg/12; 
    //rotating the handles
    secHand.style.transform = `rotate(${secToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;
    minHand.style.transform = `rotate(${minToDeg}deg)`;

}

setInterval(updateTime, 1000);

