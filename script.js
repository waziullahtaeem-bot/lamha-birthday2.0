// Page Navigation
const sections = document.querySelectorAll('.section');
let currentSection = 0;

function showSection(index) {
  sections.forEach((sec, i) => sec.style.display = i === index ? 'block' : 'none');
}

showSection(currentSection);

document.querySelectorAll('.nextBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    if(currentSection < sections.length - 1){
      currentSection++;
      showSection(currentSection);
    }
  });
});

document.getElementById('enterBtn').addEventListener('click', () => {
  currentSection++;
  showSection(currentSection);
});

// Poem Book Flip
const pages = document.querySelectorAll('.page');
let currentPage = 0;

function showPage(index){
  pages.forEach((p,i) => p.style.display = i === index ? 'block' : 'none');
}

showPage(currentPage);

document.getElementById('nextPage').addEventListener('click', () => {
  if(currentPage < pages.length - 1){
    currentPage++;
    showPage(currentPage);
  }
});

document.getElementById('prevPage').addEventListener('click', () => {
  if(currentPage > 0){
    currentPage--;
    showPage(currentPage);
  }
});

// Simple confetti effect
function createConfetti(){
  const confetti = document.getElementById('confetti');
  for(let i=0;i<100;i++){
    const div = document.createElement('div');
    div.classList.add('confetti-piece');
    div.style.position = 'absolute';
    div.style.width = '10px';
    div.style.height = '10px';
    div.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
    div.style.left = Math.random()*window.innerWidth + 'px';
    div.style.top = Math.random()*-window.innerHeight + 'px';
    div.style.opacity = Math.random();
    div.style.animation = `fall ${2 + Math.random()*3}s linear infinite`;
    confetti.appendChild(div);
  }
}

createConfetti();
