document.addEventListener('DOMContentLoaded', () => {
    // 1. Live Viewing Counter
    const viewingCountEl = document.getElementById('viewing-count');
    
    function updateViewingCount() {
        // Random number between 150 and 500
        const randomCount = Math.floor(Math.random() * (500 - 150 + 1)) + 150;
        viewingCountEl.textContent = randomCount;
        
        // Random interval between 3 and 5 seconds
        const randomInterval = Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000;
        setTimeout(updateViewingCount, randomInterval);
    }
    
    // Start counting
    setTimeout(updateViewingCount, 2000); // Initial delay

    // 2. Countdown Timer
    const countdownEl = document.getElementById('countdown');
    const timerRing = document.getElementById('timer-ring');
    const radius = timerRing.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    
    timerRing.style.strokeDasharray = `${circumference} ${circumference}`;
    timerRing.style.strokeDashoffset = 0;
    
    const COUNTDOWN_TIME = 60; // 60 seconds
    let timeLeft = COUNTDOWN_TIME;
    
    function setProgress(percent) {
        const offset = circumference - percent / 100 * circumference;
        timerRing.style.strokeDashoffset = offset;
    }
    
    function updateTimer() {
        if (timeLeft <= 0) {
            timeLeft = COUNTDOWN_TIME; // Auto-reset when reaches 0
        }
        
        countdownEl.textContent = timeLeft;
        const percent = (timeLeft / COUNTDOWN_TIME) * 100;
        setProgress(percent);
        
        timeLeft--;
    }
    
    // Initialize timer
    updateTimer();
    setInterval(updateTimer, 1000);

    // 3. Live Activity Popup
    const activityPopup = document.getElementById('activity-popup');
    const activityName = document.getElementById('activity-name');
    const activityAction = document.getElementById('activity-action');
    
    const names = ['Rahul', 'Amit', 'Vikram', 'Rohan', 'Karan', 'Suresh', 'Priya', 'Neha', 'Sachin', 'Vishal'];
    const cities = ['Delhi', 'Mumbai', 'Pune', 'Bangalore', 'Jaipur', 'Ahmedabad', 'Surat', 'Lucknow', 'Kolkata', 'Chennai'];
    const actions = ['JOINED CHANNEL', 'SUBSCRIBED', 'CLAIMED OFFER'];
    
    function showActivityPopup() {
        // Generate random fake data
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomCity = cities[Math.floor(Math.random() * cities.length)];
        const randomAction = actions[Math.floor(Math.random() * actions.length)];
        
        activityName.textContent = `${randomName} from ${randomCity}`;
        activityAction.textContent = randomAction;
        
        // Show popup
        activityPopup.classList.add('show');
        
        // Hide after 2.5 seconds
        setTimeout(() => {
            activityPopup.classList.remove('show');
        }, 2500);
        
        // Schedule next popup (1.5 seconds baad aayega)
        const nextInterval = 2500 + 1500;
        setTimeout(showActivityPopup, nextInterval);
    }
    
    // Start first popup after 2 seconds
    setTimeout(showActivityPopup, 2000);
});
