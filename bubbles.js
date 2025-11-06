// Bubble Animation with Collision Detection
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('bubbleCanvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas to full window size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    // Call resize initially and on window resize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Bubble class
    class Bubble {
        constructor() {
            // Random size between 20 and 80
            this.radius = Math.random() * 30 + 20;
            
            // Start position at bottom of screen with random x
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + this.radius;
            
            // Random speed - faster than before
            this.speedX = (Math.random() - 0.5) * 4;
            this.speedY = -Math.random() * 4 - 2; // Negative to move upward
            
            // Qualcomm blue with random opacity
            this.color = `rgba(50, 83, 220, ${Math.random() * 0.2 + 0.1})`;
            
            // For burst animation
            this.bursting = false;
            this.burstProgress = 0;
            this.burstSpeed = 0.1;
            
            // For collision tracking
            this.collided = false;
        }
        
        // Update bubble position
        update(bubbles) {
            if (this.bursting) {
                // Handle bursting animation
                this.burstProgress += this.burstSpeed;
                if (this.burstProgress >= 1) {
                    return true; // Remove bubble when burst complete
                }
                return false;
            }
            
            // Move bubble
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Bounce off walls
            if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
                this.speedX = -this.speedX;
            }
            
            // Remove if off screen at top
            if (this.y + this.radius < 0) {
                return true;
            }
            
            // Check for collisions with other bubbles
            for (let i = 0; i < bubbles.length; i++) {
                const otherBubble = bubbles[i];
                if (otherBubble === this || otherBubble.bursting || otherBubble.collided) continue;
                
                // Calculate distance between bubble centers
                const dx = this.x - otherBubble.x;
                const dy = this.y - otherBubble.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                // If bubbles are touching
                if (distance < this.radius + otherBubble.radius) {
                    // Start burst animation for both bubbles
                    this.bursting = true;
                    otherBubble.bursting = true;
                    otherBubble.collided = true; // Prevent double collision detection
                    break;
                }
            }
            
            return false; // Keep bubble alive
        }
        
        // Draw bubble
        draw() {
            ctx.beginPath();
            
            if (this.bursting) {
                // Draw burst animation
                const burstRadius = this.radius * (1 + this.burstProgress);
                const opacity = 0.3 * (1 - this.burstProgress);
                ctx.strokeStyle = `rgba(50, 83, 220, ${opacity})`;
                ctx.lineWidth = 2 * (1 - this.burstProgress);
                ctx.arc(this.x, this.y, burstRadius, 0, Math.PI * 2);
                ctx.stroke();
            } else {
                // Draw normal bubble
                ctx.fillStyle = this.color;
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
                
                // Add highlight
                ctx.beginPath();
                ctx.arc(this.x - this.radius * 0.3, this.y - this.radius * 0.3, this.radius * 0.2, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
                ctx.fill();
            }
        }
    }
    
    // Bubble management
    let bubbles = [];
    const maxBubbles = 50;
    
    // Create new bubbles periodically
    function createBubble() {
        if (bubbles.length < maxBubbles) {
            bubbles.push(new Bubble());
        }
        
        // Schedule next bubble creation
        setTimeout(createBubble, Math.random() * 500 + 300);
    }
    
    // Animation loop
    function animate() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw bubbles
        for (let i = bubbles.length - 1; i >= 0; i--) {
            const remove = bubbles[i].update(bubbles);
            if (remove) {
                bubbles.splice(i, 1);
            } else {
                bubbles[i].draw();
            }
        }
        
        // Continue animation
        requestAnimationFrame(animate);
    }
    
    // Start animation
    createBubble();
    animate();
});