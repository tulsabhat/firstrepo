// Poem data
const poems = [
    {
        id: 1,
        title: "The Road Not Taken",
        author: "Robert Frost",
        description: "A contemplative piece about choices and their consequences, exploring the paths we take in life and the difference they make.",
        image: "https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=800",
        background: "https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=1200",
        text: `Two roads diverged in a yellow wood,<br>
And sorry I could not travel both<br>
And be one traveler, long I stood<br>
And looked down one as far as I could<br>
To where it bent in the undergrowth;<br><br>

Then took the other, as just as fair,<br>
And having perhaps the better claim,<br>
Because it was grassy and wanted wear;<br>
Though as for that the passing there<br>
Had worn them really about the same,<br><br>

And both that morning equally lay<br>
In leaves no step had trodden black.<br>
Oh, I kept the first for another day!<br>
Yet knowing how way leads on to way,<br>
I doubted if I should ever be back.<br><br>

I shall be telling this with a sigh<br>
Somewhere ages and ages hence:<br>
Two roads diverged in a wood, and I—<br>
I took the one less traveled by,<br>
And that has made all the difference.`
    },
    {
        id: 2,
        title: "Still I Rise",
        author: "Maya Angelou",
        description: "A powerful anthem of resilience and strength, celebrating the indomitable human spirit in the face of adversity.",
        image: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800",
        background: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1200",
        text: `You may write me down in history<br>
With your bitter, twisted lies,<br>
You may trod me in the very dirt<br>
But still, like dust, I'll rise.<br><br>

Does my sassiness upset you?<br>
Why are you beset with gloom?<br>
'Cause I walk like I've got oil wells<br>
Pumping in my living room.<br><br>

Just like moons and like suns,<br>
With the certainty of tides,<br>
Just like hopes springing high,<br>
Still I'll rise.<br><br>

Did you want to see me broken?<br>
Bowed head and lowered eyes?<br>
Shoulders falling down like teardrops,<br>
Weakened by my soulful cries?<br><br>

Does my haughtiness offend you?<br>
Don't you take it awful hard<br>
'Cause I laugh like I've got gold mines<br>
Diggin' in my own backyard.<br><br>

You may shoot me with your words,<br>
You may cut me with your eyes,<br>
You may kill me with your hatefulness,<br>
But still, like air, I'll rise.`
    },
    {
        id: 3,
        title: "The Guest House",
        author: "Rumi",
        description: "A mystical invitation to embrace all experiences and emotions as welcomed guests in the house of our consciousness.",
        image: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800",
        background: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1200",
        text: `This being human is a guest house.<br>
Every morning a new arrival.<br><br>

A joy, a depression, a meanness,<br>
some momentary awareness comes<br>
as an unexpected visitor.<br><br>

Welcome and entertain them all!<br>
Even if they're a crowd of sorrows,<br>
who violently sweep your house<br>
empty of its furniture,<br>
still, treat each guest honorably.<br>
He may be clearing you out<br>
for some new delight.<br><br>

The dark thought, the shame, the malice,<br>
meet them at the door laughing,<br>
and invite them in.<br><br>

Be grateful for whoever comes,<br>
because each has been sent<br>
as a guide from beyond.`
    },
    {
        id: 4,
        title: "Phenomenal Woman",
        author: "Maya Angelou",
        description: "A celebration of feminine power and self-confidence, embracing the beauty that comes from within and radiates outward.",
        image: "https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=800",
        background: "https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=1200",
        text: `Pretty women wonder where my secret lies.<br>
I'm not cute or built to suit a fashion model's size<br>
But when I start to tell them,<br>
They think I'm telling lies.<br><br>

I say,<br>
It's in the reach of my arms,<br>
The span of my hips,<br>
The stride of my step,<br>
The curl of my lips.<br>
I'm a woman<br>
Phenomenally.<br>
Phenomenal woman,<br>
That's me.<br><br>

I walk into a room<br>
Just as cool as you please,<br>
And to a man,<br>
The fellows stand or<br>
Fall down on their knees.<br>
Then they swarm around me,<br>
A hive of honey bees.<br><br>

I say,<br>
It's the fire in my eyes,<br>
And the flash of my teeth,<br>
The swing in my waist,<br>
And the joy in my feet.<br>
I'm a woman<br>
Phenomenally.<br>
Phenomenal woman,<br>
That's me.`
    },
    {
        id: 5,
        title: "Hope",
        author: "Emily Dickinson",
        description: "A delicate metaphor comparing hope to a bird that perches in the soul, singing its sweet song through all of life's storms.",
        image: "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=800",
        background: "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1200",
        text: `"Hope" is the thing with feathers -<br>
That perches in the soul -<br>
And sings the tune without the words -<br>
And never stops - at all -<br><br>

And sweetest - in the Gale - is heard -<br>
And sore must be the storm -<br>
That could abash the little Bird<br>
That kept so many warm -<br><br>

I've heard it in the chillest land -<br>
And on the strangest Sea -<br>
Yet - never - in Extremity,<br>
It asked a crumb - of me.`
    },
    {
        id: 6,
        title: "The Love Song of J. Alfred Prufrock",
        author: "T.S. Eliot",
        description: "A modernist masterpiece exploring themes of alienation, aging, and social anxiety in the urban landscape of the early 20th century.",
        image: "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=800",
        background: "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=1200",
        text: `Let us go then, you and I,<br>
When the evening is spread out against the sky<br>
Like a patient etherized upon a table;<br>
Let us go, through certain half-deserted streets,<br>
The muttering retreats<br>
Of restless nights in one-night cheap hotels<br>
And sawdust restaurants with oyster-shells:<br>
Streets that follow like a tedious argument<br>
Of insidious intent<br>
To lead you to an overwhelming question...<br>
Oh, do not ask, "What is it?"<br>
Let us go and make our visit.<br><br>

In the room the women come and go<br>
Talking of Michelangelo.<br><br>

The yellow fog that rubs its back upon the window-panes,<br>
The yellow smoke that rubs its muzzle on the window-panes,<br>
Licked its tongue into the corners of the evening,<br>
Lingered upon the pools that stand in drains,<br>
Let fall upon its back the soot that falls from chimneys,<br>
Slipped by the terrace, made a sudden leap,<br>
And seeing that it was a soft October night,<br>
Curled once about the house, and fell asleep.`
    }
];

// DOM elements
const poemsGrid = document.getElementById('poemsGrid');
const modal = document.getElementById('poemModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalPoemTitle = document.getElementById('modalPoemTitle');
const modalPoemAuthor = document.getElementById('modalPoemAuthor');
const modalPoemText = document.getElementById('modalPoemText');

// Generate poem cards
function generatePoemCards() {
    poemsGrid.innerHTML = poems.map(poem => `
        <div class="poem-card" data-poem-id="${poem.id}">
            <img src="${poem.image}" alt="${poem.title}" class="poem-card-image">
            <div class="poem-card-content">
                <h3 class="poem-card-title">${poem.title}</h3>
                <p class="poem-card-author">by ${poem.author}</p>
                <p class="poem-card-description">${poem.description}</p>
                <a href="#" class="read-more">Read Full Poem</a>
            </div>
        </div>
    `).join('');
    
    // Add click events to poem cards
    document.querySelectorAll('.poem-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const poemId = parseInt(card.dataset.poemId);
            openPoemModal(poemId);
        });
    });
}

// Open poem modal
function openPoemModal(poemId) {
    const poem = poems.find(p => p.id === poemId);
    if (!poem) return;
    
    modalPoemTitle.textContent = poem.title;
    modalPoemAuthor.textContent = `by ${poem.author}`;
    modalPoemText.innerHTML = poem.text;
    
    // Set background image
    const poemDisplay = document.querySelector('.poem-display');
    poemDisplay.style.backgroundImage = `url(${poem.background})`;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close poem modal
function closePoemModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Event listeners
modalClose.addEventListener('click', closePoemModal);
modalOverlay.addEventListener('click', closePoemModal);

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closePoemModal();
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {
    generatePoemCards();
    
    // Add some entrance animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe poem cards for entrance animation
    setTimeout(() => {
        document.querySelectorAll('.poem-card').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(card);
        });
    }, 100);
});

// Add some interactive effects
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.poem-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
    });
});

// Reset card transform when mouse leaves
document.addEventListener('mouseleave', () => {
    document.querySelectorAll('.poem-card').forEach(card => {
        card.style.transform = '';
    });
});
