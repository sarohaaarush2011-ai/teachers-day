// Global State
let experienceCompleted = false;

// 1. Teacher Names Mapping
const teacherNames = {
    "swati": "Swati",
    "heeraj": "Heeraj",
    "neetika": "Neetika",
    "binita": "Binita",
    "shiv": "Shiv",
    "sanjeev": "Sanjeev",
    "anupama": "Anupama",
    "lakshaya": "Lakshaya",
    "arunima": "Arunima"
};

// 2. Teachers Profile Data (With Dynamic Mr./Mrs. and Custom Personal Notes)
const teachers = {
    "Swati": {
        message: "",
        personalNote: "Thank you for opening my eyes to the true power of words. Your passion for literature, your graceful way of teaching grammar, and your continuous encouragement have made learning English a joyful journey for me.",
        photo: "images/swati.jpg",
        title: "Ma'am",
        prefix: "Mrs."
    },
    "Heeraj": {
        message: "",
        personalNote: "Thank you for guiding me into the world of technology and innovation. Your friendly approach to teaching AI makes learning complex logic feel so easy and fun. By the way, inspired by everything you teach us, I actually built this Teacher's Day website with the help of AI — I haven't even learned this level of coding yet! 😁",
        photo: "images/heeraj.jpg",
        title: "Sir",
        prefix: "Mr."
    },
    "Neetika": {
        message: "",
        personalNote: "Thank you for making science so fascinating and easy to understand. Your inspiring lessons, practical guidance, and encouragement have always sparked my curiosity to learn and explore more.",
        photo: "images/neetika.jpg",
        title: "Ma'am",
        prefix: "Mrs."
    },
    "Binita": {
        message: "",
        personalNote: "Thank you for making complex equations and formulas feel so simple and clear. Your patience, step-by-step guidance, and encouragement have built my confidence in math and inspired me to keep solving problems with joy",
        photo: "images/binita.jpg",
        title: "Ma'am",
        prefix: "Mrs."
    },
    "Shiv": {
        message: "",
        personalNote: "Thank you for making Social Studies so simple and interesting. Your clear explanations and guidance have helped me understand every topic easily.",
        photo: "images/shiv.jpg",
        title: "Sir",
        prefix: "Mr."
    },
    "Sanjeev": {
        message: "",
        personalNote: "हिंदी विषय को सरलता से सिखाने और हर पाठ को रोचक बनाने के लिए आपका बहुत-बहुत धन्यवाद। आपके मार्गदर्शन और स्नेह ने हिंदी भाषा के प्रति मेरी रुचि को हमेशा बढ़ाया है।",
        photo: "images/sanjeev.jpg",
        lang: "hi",
        title: "Sir",
        prefix: "Mr."
    },
    "Anupama": {
        message: "",
        personalNote: "Thank you for bringing creativity to life in our classroom. Your guidance, encouragement, and inspiring ideas have helped me express myself freely and discover the true beauty of art.",
        photo: "images/anupama.jpg",
        title: "Ma'am",
        prefix: "Mrs."
    },
    "Lakshaya": {
        message: "",
        personalNote: "Thank you for always being such a supportive mentor and making math so enjoyable. Even though you taught me last year, your guidance, friendly nature, and clear explanations continue to inspire me in everything I do.",
        photo: "images/lakshaya.jpg",
        title: "Sir",
        prefix: "Mr."
    },
    "Arunima": {
        message: "",
        personalNote: "संस्कृत को इतने सरल और सहज तरीके से सिखाने के लिए आपका हृदय से धन्यवाद। आपकी प्रेरणा और मार्गदर्शन ने मुझे इस महान भाषा को समझने और इसके प्रति गहरा सम्मान रखने में मदद की है।",
        photo: "images/arunima.jpg",
        lang: "hi",
        title: "Ma'am",
        prefix: "Mrs."
    }
};

// 3. Teacher Verification Codes
const teacherCodes = {
    "heeraj": "HR8218",
    "swati": "SW8439",
    "neetika": "NT9953",
    "binita": "BN7417",
    "shiv": "SH8791",
    "sanjeev": "SJ9812",
    "anupama": "AN8273",
    "lakshaya": "LK8279",
    "arunima" : "AR8178"
};

// INITIALIZATION
document.addEventListener("DOMContentLoaded", function () {
    hideAllScreens();
    
    // Show Gift Screen cleanly
    const giftContainer = document.querySelector(".gift-container");
    if (giftContainer) {
        giftContainer.style.display = "flex";
    }

    initScrollObserver();
});

// Helper function to hide all screens cleanly
function hideAllScreens() {
    const selectors = [
        ".gift-container",
        ".gift-message",
        ".name-screen",
        ".teacher-page",
        ".thankyou-page",
        ".feedback-page",
        ".success-page"
    ];
    selectors.forEach(sel => {
        const el = document.querySelector(sel);
        if (el) el.style.display = "none";
    });
}

// Gift Click Event
function handleGiftClick() {
    playPopSound();
    const giftBox = document.getElementById('giftBox');
    const surpriseCard = document.getElementById('surpriseCard');
    const tapText = document.querySelector('.tap-text');

    if (tapText) {
        tapText.style.display = 'none';
    }

    if (giftBox) {
        giftBox.style.transition = "opacity 0.4s ease, transform 0.4s ease";
        giftBox.style.opacity = "0";
        giftBox.style.transform = "scale(0.8)";
        
        setTimeout(() => {
            giftBox.style.display = "none";

            if (surpriseCard) {
                surpriseCard.style.display = "block";
                surpriseCard.style.opacity = "0";
                surpriseCard.style.transition = "opacity 0.5s ease, transform 0.5s ease";
                surpriseCard.style.transform = "scale(0.9)";
                
                setTimeout(() => {
                    surpriseCard.style.opacity = "1";
                    surpriseCard.style.transform = "scale(1)";
                }, 50);
            } else {
                openNameScreen();
            }
        }, 400);
    } else {
        openNameScreen();
    }
}

function openTeacherPage() {
    openNameScreen();
}

function openNameScreen() {
    hideAllScreens();
    const namePage = document.querySelector('.name-screen');
    if (namePage) namePage.style.display = "block";
}

function togglePassword() {
    const codeInput = document.getElementById("teacherCode");
    const toggleBtn = document.getElementById("toggleCodeBtn");

    if (codeInput.type === "password") {
        codeInput.type = "text";
        toggleBtn.textContent = "🙈";
    } else {
        codeInput.type = "password";
        toggleBtn.textContent = "👁️";
    }
}

function clearError() {
    const err = document.getElementById("errorMessage");
    if (err) err.textContent = "";
}

function checkName() {
    playBgMusic();
    clearError();

    const codeInput = document.getElementById("teacherCode");
    const nameInput = document.getElementById("teacherName");

    if (!nameInput || !codeInput) return;

    const code = codeInput.value.trim();
    const input = nameInput.value.trim();
    const searchName = input.toLowerCase();

    if (input === "" || code === "") {
        document.getElementById("errorMessage").textContent = "Please enter your name and verification code!";
        return;
    }

    const nameExists = teacherNames[searchName];
    const codeCorrect = teacherCodes[searchName] === code;

    // कन्फ़ेट्टी सिर्फ तभी ट्रिगर होगी जब दोनों डिटेल्स (नाम और कोड) बिल्कुल सही होंगी
    if (nameExists && codeCorrect) {
        let name = teacherNames[searchName];
        triggerRoyalConfetti();
        showTeacherPageDirectly(name);
    } else {
        document.getElementById("errorMessage").textContent = "Incorrect name or verification code! Please check and try again.";
    }
}

function showTeacherPageDirectly(name) {
    hideAllScreens();

    const teacherPage = document.querySelector(".teacher-page");
    if (teacherPage) {
        teacherPage.style.display = "block";
        teacherPage.classList.remove("enter-animate");
        void teacherPage.offsetWidth;
        teacherPage.classList.add("enter-animate");
    }

    const titleEl = document.getElementById("teacherTitle");
    const greetingEl = document.getElementById("greeting");
    const welcomeEl = document.getElementById("welcomeLine");
    const msgEl = document.getElementById("teacherMessage");
    const noteEl = document.getElementById("personalNoteText") || document.querySelector(".personal-note-text");
    const photoEl = document.getElementById("teacherPhoto");
    const continueBtn = teacherPage ? teacherPage.querySelector("button") : null;

    const currentTeacher = teachers[name] || {};
    const isHindi = currentTeacher.lang === "hi";
    const honorific = currentTeacher.title || "Sir";
    const prefix = currentTeacher.prefix || "Mr.";

    // Dynamic Text Updates
    if (titleEl) titleEl.innerHTML = `${prefix} ${name}`;
    if (greetingEl) greetingEl.innerHTML = isHindi ? `आदरणीय ${name} महोदय/महोदया,` : `Respected ${name} ${honorific},`;
    if (welcomeEl) welcomeEl.innerHTML = isHindi 
        ? "आपके लिए बनाए गए इस छोटे से सरप्राइज में आपका हार्दिक स्वागत है।" 
        : "Thank you for taking a moment to visit this little surprise made especially for you.";
    
    if (msgEl) msgEl.innerHTML = currentTeacher.message || "";
    if (noteEl) noteEl.innerHTML = currentTeacher.personalNote || "";
    if (photoEl) photoEl.src = currentTeacher.photo || "";

    // Button Text Update
    if (continueBtn) {
        continueBtn.textContent = isHindi ? "आगे बढ़ें ✨" : "Continue ✨";
    }

    document.body.classList.remove("no-scroll");
    window.scrollTo({ top: 0, behavior: "smooth" });

    playBgMusic();
}

function openFeedback() {
    if (typeof pauseBackgroundMusic === 'function') {
        pauseBackgroundMusic();
    } else if (bgMusic) {
        bgMusic.pause();
    }

    hideAllScreens();
    const feedbackPage = document.querySelector(".feedback-page");
    const currentTitleText = document.getElementById("teacherTitle")?.innerText || "";
    const isHindi = currentTitleText.includes("आदरणीय");

    if (feedbackPage) {
        feedbackPage.style.display = "block";

        const title = feedbackPage.querySelector("h2");
        const subtitle = feedbackPage.querySelector("p");
        const textarea = document.getElementById("feedbackBox");
        const submitBtn = feedbackPage.querySelector("button");

        if (isHindi) {
            if (title) title.textContent = "आपकी प्रतिक्रिया मेरे लिए अमूल्य है ✍️";
            if (subtitle) subtitle.textContent = "कृपया अपने विचार या संदेश यहाँ साझा करें:";
            if (textarea) textarea.placeholder = "अपना संदेश यहाँ लिखें...";
            if (submitBtn) submitBtn.textContent = "संदेश भेजें ✨";
        } else {
            if (title) title.textContent = "Your Feedback Means The World ✍️";
            if (subtitle) subtitle.textContent = "Please share a few words or advice:";
            if (textarea) textarea.placeholder = "Write your feedback here...";
            if (submitBtn) submitBtn.textContent = "Submit Feedback ✨";
        }

        feedbackPage.classList.remove("enter-animate");
        void feedbackPage.offsetWidth;
        feedbackPage.classList.add("enter-animate");
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function submitFeedback() {
    let msg = document.getElementById("feedbackBox").value;
    if(msg.trim() !== "") {
        let phone = "916398716664"; // अपना 10-अंकों का WhatsApp नंबर डालें (बिना + के)
        let url = `https://wa.me/${phone}?text=${encodeURIComponent("Feedback: " + msg)}`;
        window.open(url, "_blank");
    } else {
        alert("Please write a message before submitting!");
    }
}


    experienceCompleted = true;
    launchConfetti();
    hideAllScreens();

    const successPage = document.querySelector(".success-page");

    if (successPage) {
        successPage.style.display = "block";
        
        successPage.classList.remove("enter-animate");
        void successPage.offsetWidth;
        successPage.classList.add("enter-animate");
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToTeacher() {
    hideAllScreens();
    const teacherPage = document.querySelector(".teacher-page");
    if (teacherPage) teacherPage.style.display = "block";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function finishWebsite() {
    document.body.innerHTML = `
    <div style="height:100vh; display:flex; flex-direction:column; justify-content:center; align-items:center; background:#0f172a; color:white; text-align:center; padding:30px;">
        <h1 style="color:#d4af37;">💙 Thank You for Visiting!</h1>
        <p style="font-size:18px; margin-top:15px; color:#cbd5e1;">🌸 Happy Teacher's Day Once Again! 🌸</p>
    </div>
    `;
}

function initScrollObserver() {
    const revealElements = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach((el) => observer.observe(el));
}

function launchConfetti() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 120,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#d4af37', '#ffffff', '#ff69b4', '#4b0082']
        });
    }
}

function playPopSound() {
    const pop = document.getElementById('popSound');
    if (pop) {
        pop.currentTime = 0;
        pop.play().catch(e => console.log("Audio play blocked:", e));
    }
}

function playBgMusic() {
    const music = document.getElementById('bgMusic');
    if (music) {
        music.volume = 0.4;
        const promise = music.play();
        if (promise !== undefined) {
            promise.catch(() => {
                document.addEventListener('click', () => {
                    music.play();
                }, { once: true });
            });
        }
    }
}

// MAGICAL GOLD SPARKLE CURSOR TRAIL (DESKTOP)
document.addEventListener('mousemove', function(e) {
    if (window.innerWidth < 768) return;

    const particle = document.createElement('div');
    particle.className = 'sparkle-particle';
    
    particle.style.left = e.clientX + 'px';
    particle.style.top = e.clientY + 'px';
    
    const size = Math.random() * 8 + 4;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 800);
});

// FUNCTION TO DOWNLOAD TEACHER CARD AS IMAGE
function downloadTeacherCard() {
    const cardElement = document.querySelector('.teacher-page');

    if (!cardElement) return;

    const btn = document.getElementById('downloadCardBtn');
    if (btn) btn.innerText = "Generating Image... ⏳";

    html2canvas(cardElement, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#0f172a"
    }).then(canvas => {
        const image = canvas.toDataURL("image/png");
        const link = document.createElement('a');
        link.href = image;
        link.download = `Teachers_Day_Wish.png`;
        link.click();

        if (btn) btn.innerText = "📥 Download Memory Card";
    }).catch(err => {
        console.error("Download failed:", err);
        if (btn) btn.innerText = "❌ Download Failed";
    });
}

// ROYAL GOLD CONFETTI FUNCTION
function triggerRoyalConfetti() {
    if (typeof confetti !== 'function') return;

    const goldPalette = ['#d4af37', '#ffd700', '#ffffff', '#aa7c11', '#fff5e6'];

    confetti({
        particleCount: 80,
        spread: 100,
        origin: { y: 0.6 },
        colors: goldPalette,
        ticks: 200,
        gravity: 0.8,
        scalar: 1.2
    });

    setTimeout(() => {
        confetti({
            particleCount: 40,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: goldPalette
        });
        confetti({
            particleCount: 40,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: goldPalette
        });
    }, 250);
}

// HAPTIC FEEDBACK & RIPPLE EFFECT FOR ALL BUTTONS & CARDS
document.addEventListener('click', function (e) {
    const target = e.target.closest('button, .download-btn, .gift-box, input[type="submit"]');

    if (target) {
        if ('vibrate' in navigator) {
            navigator.vibrate(15);
        }

        const circle = document.createElement('span');
        const diameter = Math.max(target.clientWidth, target.clientHeight);
        const radius = diameter / 2;

        const rect = target.getBoundingClientRect();
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - rect.left - radius}px`;
        circle.style.top = `${e.clientY - rect.top - radius}px`;
        circle.classList.add('ripple-effect');

        const existingRipple = target.querySelector('.ripple-effect');
        if (existingRipple) {
            existingRipple.remove();
        }

        target.appendChild(circle);
    }
});

// RELIABLE AUDIO CONTROLLER (Global & Teacher Page)
const bgMusic = document.getElementById('bgMusic');
const audioToggleBtn = document.getElementById('audioToggleBtn');
const audioIcon = document.getElementById('audioIcon');
let isPlaying = false;

function playBackgroundMusic() {
    if (!bgMusic) return;
    bgMusic.volume = 0.35;
    
    bgMusic.play().then(() => {
        isPlaying = true;
        if (audioIcon) audioIcon.textContent = '🔊';
        if (audioToggleBtn) audioToggleBtn.classList.add('playing');
    }).catch(err => {
        console.log("Autoplay waiting for user interaction:", err);
    });
}

function pauseBackgroundMusic() {
    if (!bgMusic) return;
    bgMusic.pause();
    isPlaying = false;
    if (audioIcon) audioIcon.textContent = '🎵';
    if (audioToggleBtn) audioToggleBtn.classList.remove('playing');
}

if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (isPlaying) {
            pauseBackgroundMusic();
        } else {
            playBackgroundMusic();
        }
    });
}

document.addEventListener('click', function initAudioOnInteraction() {
    if (!isPlaying) {
        playBackgroundMusic();
    }
}, { once: true });
