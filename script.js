const loadingScreenDiv = document.getElementById("loading-screen");
const celebrationDiv = document.getElementById("celebration-overlay");

setTimeout(() => {
    loadingScreenDiv.style.display = "none";
}, 6000);

setTimeout(() => {
    celebrationDiv.style.display = "none";
}, 12000);
