let days = document.querySelector(".upper-day");
let hours = document.querySelector(".upper-hour");
let mins = document.querySelector(".upper-mins");
let sec = document.querySelector(".upper-sec");

function startCount() {
    let endDateInput = document.getElementById("end-time");
    let endDate = new Date(endDateInput.value);
    if (isNaN(endDate.getTime())) {
        alert("Please select a valid date and time.");
        return;
    }
    
    document.getElementById("end-date").innerText = "END DATE\n" + endDate.toLocaleString();
    
    function updateClock() {
        let now = new Date();
        let diff = (endDate - now) / 1000;
        
        if (diff < 0) {
            clearInterval(countdownInterval);
            document.getElementById("end-date").innerHTML = "EXPIRED";
            return;
        }
        
        let d = Math.floor(diff / (3600 * 24));
        let h = Math.floor((diff % (3600 * 24)) / 3600);
        let m = Math.floor((diff % 3600) / 60);
        let s = Math.floor(diff % 60);
        
        days.innerHTML = (d < 10 ? "0" : "") + d;
        hours.innerHTML = (h < 10 ? "0" : "") + h;
        mins.innerHTML = (m < 10 ? "0" : "") + m;
        sec.innerHTML = (s < 10 ? "0" : "") + s;
    }
    
    updateClock();
    let countdownInterval = setInterval(updateClock, 1000);
} 


