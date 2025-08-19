function updateClock() {
    let now=new Date()
    document.getElementById('clock').textContent = now.toLocaleTimeString('en-GB' , {hour12:false})
    document.getElementById('date').textContent = now.toLocaleDateString('en-GB' , {weekday: 'long' , year: 'numeric', month: 'long', day: 'numeric'})
}
setInterval(updateClock, 1000)
updateClock()