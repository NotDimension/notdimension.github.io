// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) target.scrollIntoView({behavior:'smooth'});
    });
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible'); // allows animation to re-trigger
        }
    });
},{threshold:0.1});
document.querySelectorAll('section').forEach(section=>observer.observe(section));

// Tooltip functionality
document.querySelectorAll('.tooltip').forEach(el=>{
    el.addEventListener('mouseenter',()=>{el.querySelector('.tooltiptext').style.opacity='1';});
    el.addEventListener('mouseleave',()=>{el.querySelector('.tooltiptext').style.opacity='0';});
});

// Copy Discord tag
document.getElementById('copyDiscord')?.addEventListener('click',()=>{
    navigator.clipboard.writeText('NotDimension#0001');
    const tooltip = document.querySelector('#copyDiscord .tooltiptext');
    tooltip.textContent='Copied!';
    setTimeout(()=>{tooltip.textContent='Copy to clipboard';},2000);
});

// External links open in new tab automatically
document.querySelectorAll('a').forEach(a=>{a.setAttribute('target','_blank');});

// Default vouches
const vouches = [
  {
    user: "[ClashSMP] DragonFighter69",
    avatar: "dragonfighter.png",
    text: "MEGA VOUCH - This guy is an amazing staff member/person and you should 100% hire him"
  },
  {
    user: "[CloudExa] Reece",
    avatar: "reece.png",
    text: "Huge vouch, Literally always does a fantastic job"
  },
  {
    user: "[Guest] ! former",
    avatar: "former.png",
    text: "Awesome sauce vouch, an amazing person to work with."
  },
  {
    user: "[SMPFinder] James",
    avatar: "james.png",
    text: "HOLY VOUCH one of the best people I’ve ever staffed with—insanely active, dedicated, and kind."
  },
  {
    user: "[SMPFinder] Caliber",
    avatar: "caliber.png",
    text: "vouch"
  },
  {
    user: "[SMPFinder] Clover",
    avatar: "clover.png",
    text: "Huge vouch. Dedicated, professional, helpful, always improving!"
  },
  {
    user: "[EchoSMP] ✞ Jesse ✰",
    avatar: "jesse.png",
    text: "Massive Vouch, very professional, provides flawless plugins and handles stress super well."
  },
  {
    user: "[TavernMC] isa",
    avatar: "isa.png",
    text: "v o u c h — great guy, knows his stuff."
  }
];

let currentIndex = 0;
const carousel = document.getElementById("vouch-carousel");

function renderVouch(index) {
  const v = vouches[index];
  carousel.innerHTML = `
    <div class="absolute inset-0 flex gap-4 items-center opacity-0 animate-fadeSlide">
      <img src="images/vouches/${v.avatar}" class="w-20 h-20 rounded-full border-2 border-[#d6bfa7] shadow-lg">
      <div>
        <h4 class="text-xl font-semibold text-[#e0c8af]">${v.user}</h4>
        <p class="text-[#d6bfa7] mt-2">${v.text}</p>
      </div>
    </div>
  `;
}

renderVouch(0);

// Auto-cycle
setInterval(() => {
  currentIndex = (currentIndex + 1) % vouches.length;
  renderVouch(currentIndex);
}, 4000);


// Modal logic
const modal = document.getElementById("vouchModal");
document.getElementById("openVouchBtn").onclick = () => modal.classList.remove("hidden");
document.getElementById("closeModal").onclick = () => modal.classList.add("hidden");

document.getElementById("submitVouch").onclick = () => {
  const user = document.getElementById("vouchUser").value;
  const avatar = document.getElementById("vouchAvatar").value;
  const text = document.getElementById("vouchText").value;

  if (!user || !avatar || !text) return alert("Please fill in all fields.");

  vouches.push({ user, avatar, text });
  alert("Your vouch has been submitted!");

  modal.classList.add("hidden");
};
