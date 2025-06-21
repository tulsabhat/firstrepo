// Poem data
const poems = [
    {
        id: 1,
        title: "Antim Udha",
        author: "Tulsa Bhat",
        description: " Beyogko maunata,samjhanako ujjwalo. Ek aatmako antim yatra, prem, pida rwh sandeshko gahiro katha.",    
     image: "ChatGPT Image Jun 21, 2025, 06_59_12 AM.png",
        background: "https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=1200",
        text: `Bolna sakina vanna sakina <br>
Aajhaii ni keii garna sakina||<br>

<br>
Samaye sakidaii theyo<br>
Antim uddha theyo<br>
Mod 2 theyo<br>
Parkhaye meraii theyo<br>
<br>

Aama babu ko man aatidaii theyo<br>
Nakaratmak bichar aayerako theyo<br>
Uta mero sas rokedaii theyo<br>
<br>

Siudo bhareyeko theyo <br>
Rato kapadama sajayeyeko theyo<br>
Baja bajeraheko theyo<br>
Sabaiiko aakha rasaye raheko theyo|<br>
<br>





Unko manko tukra tadidaii theyo<br>
Sangeet gunjenaii raheko theyo|<br>
Pauma payal, haat ma mehndi rwh rato chura theyo<br>
Baja bajenaii raheko theyo||<br>
<br>
 
Malie sajayeyeko theyo<br>
Dolima rakheyeko theyo<br>
Tara mero janti haina malami theyo|||<br>
<br>


Dauraii daura bich khapiyeki theye<br>
Aagniko pratichya ma theye <br>
Rangin rangharu ujaddaii theye<br>
Bojharu kam garaudaii theye<br>
<br>







Aamako pida aashru bani jhareraheka theye<br>
Buba chupchap theye<br>
Samaj hereraheko theyo<br>
Aafna ko kuranaii theyo<br>
<br>

Aamako pida sor banerwhh nikliyo<br>
Bubako sabda naii nikleyena<br>
Aamako sor laii samajley pida bujexa<br>
Sabdahin bubalaii doshi sunayexa<br>
<br>

Bhaii ko aakha ma pailo choti aashru dekhey<br>
Ma prati prem dekhey||<br>
Dd rudaii hunuhunthyo <br>
Ekchoti utherwhh dd vanedeuna vandaii hunuhunthyoo <br>
<br>




Bhaii thulo vayesakexa <br>
Sabai laii santona diyexa <br>
Bubalaii eklaii royeko dekhexa <br>
Bubako aakha ma pailo choti aashru dekhexa<br>
<br>

     
Sabaii bata tada vayesakeki theye<br>
Nafarkeney garerwhh gayesakeki theye<br>
Sabdahin mah sabaii chupchap hereraheki theye<br>
<br>
 
Bhaii thulo vayexa<br>
Gharko jimmebari batneyy vayexa<br>
Ddko sathi banexa<br>
Dukha Sukhama haat batauney vayexa<br>
<br>

 
Aantim uddha ko aantim charan ma theye<br>
Sath navaye smriti ma theye<br>
Sarir maun theyo,aastityo baleko theyo<br>
Batabaran chisidaii, sarir tatidaii theyo<br>
<br>

Sabda sakisakeko theyo ma maun theye <br>
Chitah ko jwala ma sunya vayerwhh ujjwalo baneki theye<br>
<br><br
        `
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
