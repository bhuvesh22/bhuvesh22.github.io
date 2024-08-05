document.addEventListener('DOMContentLoaded', function() {
    const fruitImages = document.querySelectorAll('#fruitImages img');
    const moodTitle = document.getElementById('moodTitle');
    const moodDescription = document.getElementById('moodDescription');
    const moodContainer = document.getElementById('moodContainer');
    const fruitFacts = document.getElementById('fruitFacts');

    fruitImages.forEach(img => {
        img.addEventListener('click', function() {
            const mood = this.getAttribute('data-mood');
            const fruit = this.alt;
            updateMood(mood, fruit);
            highlightFact(fruit);
        });
    });

    function updateMood(mood, fruit) {
        moodTitle.textContent = `You feel ${mood}!`;
        
        const moodDescriptions = {
            energized: `The ${fruit} has given you a burst of energy. Time to conquer the day!`,
            happy: `The ${fruit} has put a big smile on your face. What a wonderful day!`,
            refreshed: `The ${fruit} has left you feeling refreshed and ready for new adventures.`,
            loved: `The ${fruit} has filled your heart with warmth and love. Spread the joy!`
        };

        moodDescription.textContent = moodDescriptions[mood];
        
        // Add animation effect
        moodContainer.style.animation = 'pulse 0.5s';
        setTimeout(() => {
            moodContainer.style.animation = '';
        }, 500);

        // Change background color based on mood
        const colors = {
            energized: '#FFF700',
            happy: '#FFD700',
            refreshed: '#7FFFD4',
            loved: '#FFC0CB'
        };
        moodContainer.style.backgroundColor = colors[mood];
    }

    function highlightFact(fruit) {
        const listItems = fruitFacts.querySelectorAll('li');
        listItems.forEach(item => {
            if (item.textContent.toLowerCase().includes(fruit.toLowerCase())) {
                item.style.fontWeight = 'bold';
                item.style.color = '#e74c3c';
            } else {
                item.style.fontWeight = 'normal';
                item.style.color = '#333';
            }
        });
    }

    // Add hover effect for fruit images
    fruitImages.forEach(img => {
        img.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });
        img.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});