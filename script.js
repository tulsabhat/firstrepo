// Poem data
const poems = [
    {
        id: 1,
        title: " अन्तिम युद्ध",
        author: "तुलसा भाट",
        description: "वियोगको मौनता, सम्झनाको उज्यालो। एक आत्माको अन्तिम यात्रामा प्रेम, पीडा र सन्देशको गहिरो कथा।",    
     image: "ChatGPT Image Jun 21, 2025, 06_59_12 AM.png",
        background: "bbgg.avif",
        
        text: ` 
 (एक छोरीको सम्झनामा)<br>
बोल्न सकिन, भन्न सकिन/<br>
 अझैनि केही गर्न सकिन ||<br>
<br>

समय सकिँदै थियो<br>
अन्तिम युद्ध थियो<br>
 मोड़ दुई थियो<br>
 पर्खाइ मेरै थियो ||<br>
 <br>

आमा-बुबाको मन आत्तिँदै थियो<br>
 नकारात्मक विचार आइरहेको थियो<br>
 उता मेरो सास रोकिँदै थियो ||<br>
 <br>

सिउँदो भरिएको थियो<br>
 रातो कपडामा सजाइएको थियो<br>
 बाजा बजिरहेको थियो<br>
 सबैको आँखा रसाइरहेको थियो ||<br>
 <br>

उनको मनको टुक्रा टाढिँदै थियो<br>
 संगीत गुञ्जिरहेकै थियो<br>
 पाऊँमा पायल, हातमा मेहन्दी र रातो चुरा थियो<br>
 बाजा बजिरहेकै थियो ||<br>
 <br>

मलाई सजाएकी थियो<br>
डोलीमा राखेको थियो<br>
तर मेरो जन्ती हैन मलामी थियो।<br>
 <br>

दौराभित्र खपिइरहेकी थिई <br>
 आगोको प्रतिक्षामा थिई<br>
 रंगीन रंगहरू उजाडिँदै थिए<br>
 बोझहरू कम गराउँदै थिए ||<br>
<br>

आमाको पीडा आँशु बनेर झरिरहेकै थिए<br>
 बुबा चुपचाप थिए<br>
 समाज हेरीरहेको थियो<br>
 आफ्नैको कुरा नै थियो ||<br>
<br>

आमाको पीडा स्वर बनेर निस्कियो<br>
 बुबाको शब्द नै ननिस्कियो<br>
 आमाको स्वरलाई समाजले पीडा बुझ्यो<br>
 शब्दविहीन बुबालाई दोषी ठानेछ ||<br>
<br>

भाइको आँखामा पहिलो चोटि आँशु देखें<br>
 मप्रति प्रेम देखें ||<br>
 दिदी रोइरहनु भएको थियो<br>
 "एकचोटि उठेर दिदी भनेदेऊ" भन्दै हुनुहुन्थ्यो ||<br>


भाइ ठूलो भइसकेको छ<br>
 सबैलाई सान्त्वना दिइसकेको छ<br>
 बुबालाई एक्लै रोइरहेको देखें<br>
 बुबाको आँखामा पहिलोचोटि आँशु देखें ||<br>
<br>

सबैबाट टाढा भइसकेकी थिई<br>
 नफर्किने गरेर गइसकेकी थिई<br>
 शब्दविहीन म, सबैलाई चुपचाप हेरेर बसेकी थिई ||<br>
<br>

भाइ ठूलो भइसकेको छ<br>
 घरको जिम्मेवारी बोक्न थालेको छ<br>
 दिदीको साथी बनेको छ<br>
 दुखसुखमा साथ दिन थालेको छ ||<br>
<br>

अन्तिम उद्धाको अन्तिम चरणमा थिएँ<br>
 साथ नभए स्मृतिमा थिएँ<br>
 शरीर मौन थियो, अस्तित्व बलिरहेको थियो<br>
 वातावरण चिसिँदै, शरीर ततिँदै थियो ||<br>
<br>

शब्द सकिएको थियो, म मौन थिएँ<br>
चिता को ज्वालामा शून्य भएर उज्यालो बनेकी थिएँ ||<br>

<br>
In Roman<br>
<br
        
Bolna sakina vanna sakina <br>
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
<br>
       `
    }
    ,
    {
        id: 2,
        title: "Uhh koho??",
        author: "Tulsa Bhat",
        description: " ",    
     image: "ChatGPT Image Jun 21, 2025, 06_59_12 AM.png",
        background: "bg.jpg",
        text:
        `Achamaki xey, <br> 
        Aakash ma chara dekhda khusi hunxey,<br>
        Pinjarama kayed dekhda dhukhi,<br>
'Aarubhanda beglaii xey ya bichitra??<br>
<br>

Sabaiilai aafno thanxey,<br>
Sabaiilai Ramro garxey,<br>
Aasha rakhxey aarubata-<br>
Nirasa dainiki pauxey | <br>
<br>

Aaruko aakha padhe bibarad nikalxey,<br>
Aafno aakha herna darauxey,<br>
Aaruko nimti darpan banxey,<br>
Aafu darpan aagi aauna darauxey |<br>
<br>

Sabailaii bishwashilo patra manxey,<br>
Bishwash ghati aafai banxey,<br>
Barambar Dhoka pauxey,<br>
Teiini sabma bishwash garxey |<br>
<br>


"Uhh" leyy "uhh" lai prashna garxey,<br>
Jabaf ma aarko prashna pauxey,<br>
Darpan ma "uhh" dekhdina,<br>
Mushkan ma pura "uhh" paudina |<br>
<br>

"Uhh" koho?? <br>
Sayed chanchal, sayed aatrangi??<br>
Khulla kitab ki rahasya maye kitab??<br>
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
