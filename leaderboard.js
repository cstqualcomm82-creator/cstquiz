// Firebase configuration
const firebaseConfig = {
    // Firebase config is already initialized in the page
    apiKey: "AIzaSyDHa0x5W0JiLYRH6kXyNAiu8Y87ezAgIg0",
    authDomain: "quizapp-802a0.firebaseapp.com",
    databaseURL: "https://quizapp-802a0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "quizapp-802a0",
    storageBucket: "quizapp-802a0.firebasestorage.app",
    messagingSenderId: "628871785477",
    appId: "1:628871785477:web:000824044a5e5d593e806c"
};

// Initialize Firebase if not already initialized
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const database = firebase.database();

// DOM Elements
let fullLeaderboardBody;
let celebrationContainer;
let confettiCanvas;

// Variables for tracking leaderboard data
let currentLeaderboardData = [];
let refreshInterval;
let refreshCountdown;
let refreshTimeInSeconds = 300; // 5 minutes
let currentCountdown = refreshTimeInSeconds;

// Initialize DOM elements after the page is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    fullLeaderboardBody = document.getElementById('full-leaderboard-body');
    celebrationContainer = document.getElementById('celebration-container');
    confettiCanvas = document.getElementById('confetti-canvas');
    
    // Load leaderboard data
    loadLeaderboard();
    
    // Start auto-refresh in the background
    startAutoRefresh();
});

// Function to load leaderboard data
function loadLeaderboard() {
    database.ref('leaderboard').once('value')
        .then(snapshot => {
            const newLeaderboardData = [];
            snapshot.forEach(childSnapshot => {
                const entry = childSnapshot.val();
                entry.key = childSnapshot.key; // Store the Firebase key for reference
                newLeaderboardData.push(entry);
            });
            
            // Sort by score (descending) and then by time (ascending)
            newLeaderboardData.sort((a, b) => {
                if (b.score !== a.score) {
                    return b.score - a.score;
                }
                return a.timeTaken - b.timeTaken;
            });
            
            // Check if there are new entries
            const hasNewEntries = checkForNewEntries(currentLeaderboardData, newLeaderboardData);
            
            // Update current data
            currentLeaderboardData = newLeaderboardData;
            
            // Display leaderboard
            displayLeaderboard(newLeaderboardData, hasNewEntries);
            
            // Show celebration if there are new entries
            if (hasNewEntries) {
                showCelebration();
            }
        })
        .catch(error => {
            console.error("Error loading leaderboard:", error);
        });
}

// Function to check if there are new entries
function checkForNewEntries(oldData, newData) {
    if (oldData.length === 0) return false; // First load, no celebration
    
    // Check if there are more entries
    if (newData.length > oldData.length) return true;
    
    // Check if any entries have changed
    const oldKeys = oldData.map(entry => entry.key);
    const newEntries = newData.filter(entry => !oldKeys.includes(entry.key));
    
    return newEntries.length > 0;
}

// Function to display leaderboard
function displayLeaderboard(leaderboardData, hasNewEntries) {
    // Clear previous content
    fullLeaderboardBody.innerHTML = '';
    
    // Display leaderboard entries
    leaderboardData.forEach((entry, index) => {
        const row = document.createElement('tr');
        
        // Add 'new-entry' class if this is a new entry and we're showing celebration
        if (hasNewEntries && !entry.displayed) {
            row.classList.add('new-entry');
            entry.displayed = true; // Mark as displayed
        }
        
        const rankCell = document.createElement('td');
        rankCell.textContent = index + 1;
        
        const nameCell = document.createElement('td');
        nameCell.textContent = entry.name;
        
        const scoreCell = document.createElement('td');
        scoreCell.textContent = `${entry.score}/10`;
        
        const durationCell = document.createElement('td');
        durationCell.textContent = formatTime(entry.timeTaken);
        
        const dateTimeCell = document.createElement('td');
        if (entry.timestamp) {
            const date = new Date(entry.timestamp);
            dateTimeCell.textContent = formatDate(date);
        } else {
            dateTimeCell.textContent = 'N/A';
        }
        
        row.appendChild(rankCell);
        row.appendChild(nameCell);
        row.appendChild(scoreCell);
        row.appendChild(durationCell);
        row.appendChild(dateTimeCell);
        
        fullLeaderboardBody.appendChild(row);
    });
}

// Function to format time (mm:ss)
function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Function to format date and time
function formatDate(date) {
    const options = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit', 
        minute: '2-digit'
    };
    return date.toLocaleDateString('en-US', options);
}

// Function to start auto-refresh in the background
function startAutoRefresh() {
    // Clear existing interval if any
    if (refreshInterval) clearInterval(refreshInterval);
    
    // Set auto-refresh interval (every 5 minutes)
    refreshInterval = setInterval(refreshLeaderboard, refreshTimeInSeconds * 1000);
}

// Function to refresh leaderboard
function refreshLeaderboard() {
    // Clear existing interval
    clearInterval(refreshInterval);
    
    // Load fresh data
    loadLeaderboard();
    
    // Restart auto-refresh
    startAutoRefresh();
}

// Function removed as requested

// Function to show celebration
function showCelebration() {
    // Show celebration message
    celebrationContainer.classList.remove('hidden');
    
    // Create confetti effect
    createConfetti();
    
    // Hide celebration after 5 seconds
    setTimeout(() => {
        celebrationContainer.classList.add('hidden');
    }, 5000);
}

// Function to create confetti effect
function createConfetti() {
    const ctx = confettiCanvas.getContext('2d');
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    
    // Confetti particles
    const particles = [];
    const particleCount = 150;
    const gravity = 0.5;
    const colors = [
        '#3253DC', // Primary color
        '#FFD700', // Gold
        '#FF6B00', // Orange
        '#4CAF50', // Green
        '#E91E63'  // Pink
    ];
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height - confettiCanvas.height,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 10 + 5,
            speed: Math.random() * 3 + 2,
            angle: Math.random() * 360,
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 10 - 5
        });
    }
    
    // Animation function
    function animate() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        
        let stillActive = false;
        
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            
            ctx.beginPath();
            ctx.fillStyle = p.color;
            
            // Draw a rectangle for confetti
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation * Math.PI / 180);
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size / 2);
            ctx.restore();
            
            // Update position
            p.y += p.speed;
            p.rotation += p.rotationSpeed;
            
            // Apply some horizontal movement
            p.x += Math.sin(p.angle * Math.PI / 180) * 0.5;
            
            // Check if particle is still on screen
            if (p.y < confettiCanvas.height + p.size) {
                stillActive = true;
            }
        }
        
        // Continue animation if particles are still visible
        if (stillActive) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        }
    }
    
    // Start animation
    animate();
}