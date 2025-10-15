/// ====================================
// Arsenal Website JavaScript
// ====================================

// ✅ Check if JS is running
console.log("JavaScript connected successfully ⚡");


// ====================================
// 🌙 Dark Mode Toggle
// ====================================
const darkToggle = document.getElementById("dark-toggle");

if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}


// ====================================
// 🔥 Scroll Fade-in Animation
// ====================================
const fadeElements = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => appearOnScroll.observe(el));


// ====================================
// 🕒 Countdown Timer for Next Match
// ====================================
const countdownEl = document.getElementById("match-countdown");

if (countdownEl) {
  const matchDate = new Date("2025-11-10T20:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const distance = matchDate - now;

    if (distance < 0) {
      countdownEl.innerText = "Match Day is here! 🔥⚽";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}


// ====================================
// ⚡ Stats Counter Animation
// ====================================
const counters = document.querySelectorAll(".num");
const speed = 200;

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});


// ====================================
// 🧠 Arsenal Quiz
// ====================================
const quizData = [
  {
    question: "Who is Arsenal’s current manager?",
    options: ["Mikel Arteta", "Pep Guardiola", "Unai Emery", "Jose Mourinho"],
    answer: "Mikel Arteta"
  },
  {
    question: "Where do Arsenal play their home games?",
    options: ["Old Trafford", "Stamford Bridge", "Emirates Stadium", "Anfield"],
    answer: "Emirates Stadium"
  },
  {
    question: "Which year was Arsenal founded?",
    options: ["1886", "1899", "1905", "1910"],
    answer: "1886"
  },
  {
    question: "Which player is known as ‘Captain Fantastic’?",
    options: ["Thierry Henry", "Patrick Vieira", "Dennis Bergkamp", "Tony Adams"],
    answer: "Tony Adams"
  },
  {
    question: "What nickname do Arsenal fans go by?",
    options: ["The Blues", "The Gunners", "The Reds", "The Lions"],
    answer: "The Gunners"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  if (!questionEl || !optionsEl) return;
  const current = quizData[currentQuestion];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";
  current.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = quizData[currentQuestion].answer;
  if (selected === correct) {
    score++;
  }
  nextBtn.style.display = "inline-block";
}

if (nextBtn) {
  nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      nextBtn.style.display = "none";
      loadQuestion();
    } else {
      showScore();
    }
  };
}

function showScore() {
  if (!questionEl || !scoreEl) return;
  questionEl.textContent = "Quiz Completed! 🎉";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreEl.textContent = `You scored ${score} out of ${quizData.length}!`;
}

loadQuestion();


// ====================================
// 🎵 Optional: Background Music Player
// ====================================
const audioPlayer = document.getElementById("bg-music");

if (audioPlayer) {
  const musicToggle = document.getElementById("music-toggle");
  if (musicToggle) {
    musicToggle.addEventListener("click", () => {
      if (audioPlayer.paused) {
        audioPlayer.play();
        musicToggle.innerText = "Pause Music 🎵";
      } else {
        audioPlayer.pause();
        musicToggle.innerText = "Play Music 🎶";
      }
    });
  }
}