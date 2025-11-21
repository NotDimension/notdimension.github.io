<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>NotDimension</title>
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
</head>
<body class="bg-[#0d0c0b] text-[#f0ebe7] min-h-screen relative">

<!-- Background video -->
<div class="fixed inset-0 z-[-10] overflow-hidden">
  <video autoplay muted loop playsinline class="w-full h-full object-cover">
    <source src="background.mp4" type="video/mp4">
  </video>
  <div class="absolute inset-0 bg-black/40"></div>
</div>

<main class="relative z-10 max-w-6xl mx-auto px-4 py-12 space-y-12">

  <!-- Hero -->
  <section class="flex flex-col md:flex-row items-center gap-8">
    <img src="images/profile.png" alt="Profile" class="rounded-full w-40 h-40 border-4 border-[#d6bfa7] shadow-lg">
    <div>
      <h1 class="text-5xl font-bold mb-2 text-[#e0c8af]">NotDimension</h1>
      <p class="text-xl mb-1 rounded-full bg-[#1a1816]/70 px-4 py-1 inline-block text-[#f0dbca]">Minecraft Server Developer</p>
      <p class="text-[#d4c3b6] text-sm">South Africa</p>
      <div class="flex gap-4 mt-3">
        <a href="https://discord.com/users/753556348784083024" target="_blank"><i data-feather="message-circle" class="text-[#d6bfa7]"></i></a>
        <a href="https://www.youtube.com/@NotDimension" target="_blank"><i data-feather="youtube" class="text-[#d6bfa7]"></i></a>
        <a href="https://steamcommunity.com/id/notdimension" target="_blank"><i data-feather="cpu" class="text-[#d6bfa7]"></i></a>
        <a href="https://namemc.com/profile/NotDimension.1" target="_blank"><i data-feather="box" class="text-[#d6bfa7]"></i></a>
      </div>
    </div>
  </section>

  <!-- About -->
  <section class="bg-[#1a1816]/70 backdrop-blur-sm rounded-lg p-6 shadow-xl">
    <h2 class="text-3xl font-bold mb-4 text-[#e0c8af]">About Me</h2>
    <p class="text-[#f5efe9] text-lg leading-relaxed">
      Minecraft server developer specializing in plugin configuration, staff management, and community engagement. Experienced in growing servers from small communities to hundreds of members, focusing on creating good gameplay experience.
    </p>
  </section>

  <!-- Current Roles -->
  <section class="bg-[#1a1816]/70 backdrop-blur-sm rounded-lg p-6 shadow-xl">
    <h2 class="text-3xl font-bold mb-4 text-[#e0c8af]">Current Roles</h2>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="bg-[#1c1917]/70 p-4 rounded-lg hover:bg-[#262320]/70 transition">
        <img src="images/icons/prism.png" class="w-16 h-16 rounded-full mb-2 mx-auto" alt="Prism SMP">
        <h3 class="text-xl font-semibold mb-2 text-center text-[#f5efe9]">Prism SMP</h3>
        <p class="mb-2 text-center text-[#d6bfa7]">Owner (600 members)</p>
        <a href="https://discord.gg/cVBDxNxP5c" class="flex items-center justify-center text-[#d6bfa7]" target="_blank">
          <i data-feather="link" class="mr-1 w-4 h-4 text-[#d6bfa7]"></i> Discord
        </a>
      </div>

      <div class="bg-[#1c1917]/70 p-4 rounded-lg hover:bg-[#262320]/70 transition">
        <img src="images/icons/shatter.png" class="w-16 h-16 rounded-full mb-2 mx-auto" alt="ShatterMC">
        <h3 class="text-xl font-semibold mb-2 text-center text-[#f5efe9]">ShatterMC</h3>
        <p class="mb-2 text-center text-[#d6bfa7]">Senior Admin (260 members)</p>
        <a href="https://discord.gg/sfSnvmtFfA" class="flex items-center justify-center text-[#d6bfa7]" target="_blank">
          <i data-feather="link" class="mr-1 w-4 h-4 text-[#d6bfa7]"></i> Discord
        </a>
      </div>

      <div class="bg-[#1c1917]/70 p-4 rounded-lg hover:bg-[#262320]/70 transition">
        <img src="images/icons/lunex.png" class="w-16 h-16 rounded-full mb-2 mx-auto" alt="Lunex">
        <h3 class="text-xl font-semibold mb-2 text-center text-[#f5efe9]">Lunex</h3>
        <p class="mb-2 text-center text-[#d6bfa7]">Owner (Unreleased)</p>
        <a href="https://discord.gg/py7ZGUJKmt" class="flex items-center justify-center text-[#d6bfa7]" target="_blank">
          <i data-feather="link" class="mr-1 w-4 h-4 text-[#d6bfa7]"></i> Discord
        </a>
      </div>

      <div class="bg-[#1c1917]/70 p-4 rounded-lg hover:bg-[#262320]/70 transition">
        <img src="images/icons/ocean.png" class="w-16 h-16 rounded-full mb-2 mx-auto" alt="OceanMC">
        <h3 class="text-xl font-semibold mb-2 text-center text-[#f5efe9]">OceanMC</h3>
        <p class="mb-2 text-center text-[#d6bfa7]">Owner (300 members)</p>
        <a href="https://discord.gg/YEgAUe8UMp" class="flex items-center justify-center text-[#d6bfa7]" target="_blank">
          <i data-feather="link" class="mr-1 w-4 h-4 text-[#d6bfa7]"></i> Discord
        </a>
      </div>
    </div>
  </section>

  <!-- Previous Roles -->
  <section class="bg-[#1a1816]/70 backdrop-blur-sm rounded-lg p-6 shadow-xl">
    <h2 class="text-3xl font-bold mb-4 text-[#e0c8af]">Previous Roles</h2>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="bg-[#1c1917]/70 p-4 rounded-lg hover:bg-[#262320]/70 transition">
        <img src="images/icons/steaky.png" class="w-16 h-16 rounded-full mb-2 mx-auto" alt="SteakySMP">
        <h3 class="text-xl font-semibold mb-2 text-center text-[#f5efe9]">SteakySMP</h3>
        <p class="mb-2 text-center text-[#d6bfa7]">Co-Owner (1.2k members)</p>
        <a href="https://discord.gg/nGVcVzK6" class="flex items-center justify-center text-[#d6bfa7]" target="_blank">
          <i data-feather="link" class="mr-1 w-4 h-4 text-[#d6bfa7]"></i> Discord
        </a>
      </div>

      <div class="bg-[#1c1917]/70 p-4 rounded-lg hover:bg-[#262320]/70 transition">
        <img src="images/icons/nebular.png" class="w-16 h-16 rounded-full mb-2 mx-auto" alt="Nebular SMP">
        <h3 class="text-xl font-semibold mb-2 text-center text-[#f5efe9]">Nebular SMP</h3>
        <p class="mb-2 text-center text-[#d6bfa7]">Overseer/Co-Owner (200 members)</p>
        <a href="https://discord.gg/YYwWMXxKAz" class="flex items-center justify-center text-[#d6bfa7]" target="_blank">
          <i data-feather="link" class="mr-1 w-4 h-4 text-[#d6bfa7]"></i> Discord
        </a>
      </div>
      
      <div class="bg-[#1c1917]/70 p-4 rounded-lg hover:bg-[#262320]/70 transition">
        <img src="images/icons/smpfinder.png" class="w-16 h-16 rounded-full mb-2 mx-auto" alt="SMP Finder">
        <h3 class="text-xl font-semibold mb-2 text-center text-[#f5efe9]">SMP Finder</h3>
        <p class="mb-2 text-center text-[#d6bfa7]">Senior Moderator (25.3k members)</p>
        <a href="https://discord.gg/cuP8bPZgYv" class="flex items-center justify-center text-[#d6bfa7]" target="_blank">
          <i data-feather="link" class="mr-1 w-4 h-4 text-[#d6bfa7]"></i> Discord
        </a>
      </div>
    </div>
  </section>

  <!-- Skills & Responsibilities -->
  <section class="bg-[#1a1816]/70 backdrop-blur-sm rounded-lg p-6 shadow-xl">
    <h2 class="text-3xl font-bold mb-4 text-[#e0c8af]">Skills & Responsibilities</h2>
    <div class="grid md:grid-cols-2 gap-6">
      <div>
        <h3 class="text-xl font-semibold mb-3 text-[#e0c8af]">Core Expertise</h3>
        <ul class="space-y-2">
          <li class="flex items-start"><i data-feather="check-circle" class="text-[#d6bfa7] mr-2 mt-1"></i>Server Administration</li>
          <li class="flex items-start"><i data-feather="check-circle" class="text-[#d6bfa7] mr-2 mt-1"></i>Staff Management</li>
          <li class="flex items-start"><i data-feather="check-circle" class="text-[#d6bfa7] mr-2 mt-1"></i>Community Engagement</li>
          <li class="flex items-start"><i data-feather="check-circle" class="text-[#d6bfa7] mr-2 mt-1"></i>Technical Skills</li>
          <li class="flex items-start"><i data-feather="check-circle" class="text-[#d6bfa7] mr-2 mt-1"></i>Logs Management</li>
          <li class="flex items-start"><i data-feather="check-circle" class="text-[#d6bfa7] mr-2 mt-1"></i>Graphic Design</li>
        </ul>
      </div>
      <div>
        <h3 class="text-xl font-semibold mb-3 text-[#e0c8af]">Daily Tasks</h3>
        <ul class="space-y-2">
          <li class="flex items-start"><i data-feather="zap" class="text-[#d6bfa7] mr-2 mt-1"></i>Server maintenance & monitoring</li>
          <li class="flex items-start"><i data-feather="zap" class="text-[#d6bfa7] mr-2 mt-1"></i>Staff coordination & training</li>
          <li class="flex items-start"><i data-feather="zap" class="text-[#d6bfa7] mr-2 mt-1"></i>Plugin installation & configuration</li>
          <li class="flex items-start"><i data-feather="zap" class="text-[#d6bfa7] mr-2 mt-1"></i>Community engagement & events</li>
          <li class="flex items-start"><i data-feather="zap" class="text-[#d6bfa7] mr-2 mt-1"></i>Server logs analysis & debugging</li>
          <li class="flex items-start"><i data-feather="zap" class="text-[#d6bfa7] mr-2 mt-1"></i>Creating graphics & promo materials</li>
        </ul>
      </div>
    </div>
  </section>

<!-- Vouches -->
<section class="bg-[#1a1816]/70 backdrop-blur-sm rounded-lg p-6 shadow-xl">
  <h2 class="text-3xl font-bold mb-6 text-[#e0c8af]">Vouches</h2>

  <!-- Carousel -->
  <div id="vouch-carousel" class="relative bg-[#1c1917]/70 p-6 rounded-lg min-h-[14rem] overflow-hidden">
    <div id="vouch-slides" class="transition-opacity duration-500"></div>
    
    <!-- Navigation -->
    <button id="prevVouch" class="absolute left-2 top-1/2 -translate-y-1/2 bg-[#e0c8af] text-black w-8 h-8 rounded-full hover:bg-[#d6bfa7] transition">‹</button>
    <button id="nextVouch" class="absolute right-2 top-1/2 -translate-y-1/2 bg-[#e0c8af] text-black w-8 h-8 rounded-full hover:bg-[#d6bfa7] transition">›</button>
  </div>

  <div class="flex justify-center mt-6 gap-3">
    <button id="openVouchBtn" class="px-5 py-2 bg-[#e0c8af] text-black rounded-lg font-semibold hover:bg-[#d6bfa7] transition">
      Submit Your Vouch
    </button>
    <button id="openAdminBtn" class="px-5 py-2 bg-[#3a332d] text-[#f5efe9] rounded-lg font-semibold hover:bg-[#4a413a] transition">
      Admin Panel
    </button>
  </div>
</section>

<!-- Submit Vouch Modal -->
<div id="vouchModal" class="fixed inset-0 bg-black/50 hidden items-center justify-center z-50">
  <div class="bg-[#1c1917] p-6 rounded-xl w-96 shadow-xl text-[#f5efe9] max-h-[90vh] overflow-y-auto">
    <h3 class="text-xl font-bold mb-4">Submit a Vouch</h3>

    <label class="block mb-2">Username</label>
    <input id="vouchUser" class="w-full p-2 rounded bg-[#262320] mb-3 outline-none text-[#f5efe9]" placeholder="Your username">

    <label class="block mb-2">Discord User ID</label>
    <input id="vouchDiscordId" class="w-full p-2 rounded bg-[#262320] mb-1 outline-none text-[#f5efe9]" placeholder="123456789012345678">
    <p class="text-xs text-[#d6bfa7] mb-3">Enable Developer Mode in Discord, right-click your profile, Copy ID</p>

    <label class="block mb-2">Discord Avatar URL (Optional)</label>
    <input id="vouchAvatarUrl" class="w-full p-2 rounded bg-[#262320] mb-1 outline-none text-[#f5efe9]" placeholder="https://cdn.discordapp.com/avatars/...">
    <p class="text-xs text-[#d6bfa7] mb-3">Right-click your Discord avatar → Copy Image Address</p>

    <label class="block mb-2">Your Vouch</label>
    <textarea id="vouchText" class="w-full p-2 rounded bg-[#262320] h-24 outline-none text-[#f5efe9]" placeholder="Type your vouch..."></textarea>

    <div id="submitStatus" class="mt-3 text-sm"></div>

    <div class="flex justify-end gap-2 mt-4">
      <button id="closeModal" class="px-3 py-1 bg-[#3a332d] rounded hover:bg-[#4a413a] transition">Cancel</button>
      <button id="submitVouch" class="px-3 py-1 bg-[#e0c8af] text-black rounded hover:bg-[#d6bfa7] transition">Submit</button>
    </div>
  </div>
</div>

<!-- Admin Panel Modal -->
<div id="adminModal" class="fixed inset-0 bg-black/50 hidden items-center justify-center z-50">
  <div class="bg-[#1c1917] p-6 rounded-xl w-[90vw] max-w-4xl shadow-xl text-[#f5efe9] max-h-[90vh] overflow-y-auto">
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-xl font-bold">Admin Panel - Moderate Vouches</h3>
      <button id="closeAdmin" class="text-2xl hover:text-[#d6bfa7]">×</button>
    </div>

    <div class="mb-4 p-3 bg-[#262320] rounded">
      <label class="block mb-2">Admin Password</label>
      <input type="password" id="adminPassword" class="w-full p-2 rounded bg-[#1c1917] outline-none text-[#f5efe9]" placeholder="Enter admin password">
      <button id="unlockAdmin" class="mt-2 px-4 py-2 bg-[#e0c8af] text-black rounded hover:bg-[#d6bfa7] transition">Unlock</button>
    </div>

    <div id="adminContent" class="hidden">
      <div class="mb-4 flex gap-2">
        <button id="showPending" class="px-4 py-2 bg-[#e0c8af] text-black rounded hover:bg-[#d6bfa7] transition">Pending</button>
        <button id="showApproved" class="px-4 py-2 bg-[#3a332d] rounded hover:bg-[#4a413a] transition">Approved</button>
      </div>

      <div id="pendingVouches" class="space-y-4"></div>
      <div id="approvedVouches" class="space-y-4 hidden"></div>
    </div>
  </div>
</div>

  <!-- Currently Working On -->
  <section class="bg-[#1a1816]/70 backdrop-blur-sm rounded-lg p-6 shadow-xl">
    <h2 class="text-3xl font-bold mb-6 text-[#e0c8af]">Currently Working On</h2>
    <div class="flex flex-col md:flex-row gap-6">
      
      <div class="flex-1 bg-[#1c1917]/70 rounded-xl p-5 shadow-lg hover:bg-[#262320]/70 transition flex flex-col justify-between">
        <div>
          <h3 class="text-xl font-semibold mb-2 text-[#f5efe9]">MOOC Java Programming I & II</h3>
          <p class="text-[#d6bfa7]">Learning Java programming through online courses.</p>
          <p class="mt-3 font-bold text-[#d6bfa7]">ETA: 3 months</p>
        </div>
        <a href="https://java-programming.mooc.fi/" target="_blank" class="mt-4 flex items-center text-[#d6bfa7] hover:text-[#e0c8af]">
          <i data-feather="link" class="mr-2 w-4 h-4"></i> Course Link
        </a>
      </div>
      
      <div class="flex-1 bg-[#1c1917]/70 rounded-xl p-5 shadow-lg hover:bg-[#262320]/70 transition flex flex-col justify-between">
        <div>
          <h3 class="text-xl font-semibold mb-2 text-[#f5efe9]">Object-Oriented Java Course</h3>
          <p class="text-[#d6bfa7]">Developing object-oriented programming skills in Java.</p>
          <p class="mt-3 font-bold text-[#d6bfa7]">ETA: 2 months</p>
        </div>
        <a href="https://www.coursera.org/learn/object-oriented-java" target="_blank" class="mt-4 flex items-center text-[#d6bfa7] hover:text-[#e0c8af]">
          <i data-feather="link" class="mr-2 w-4 h-4"></i> Course Link
        </a>
      </div>

    </div>
  </section>

  <!-- Socials -->
  <section class="bg-[#1a1816]/70 backdrop-blur-sm rounded-lg p-6 shadow-xl">
    <h2 class="text-3xl font-bold mb-6 text-[#e0c8af]">Socials</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <a href="https://discord.com/users/753556348784083024" target="_blank" class="bg-[#1c1917]/70 hover:bg-[#262320]/70 p-4 rounded-lg flex items-center transition">
        <i data-feather="message-circle" class="text-[#d6bfa7] mr-3"></i> Discord
      </a>
      <a href="https://www.youtube.com/@NotDimension" target="_blank" class="bg-[#1c1917]/70 hover:bg-[#262320]/70 p-4 rounded-lg flex items-center transition">
        <i data-feather="youtube" class="text-[#d6bfa7] mr-3"></i> YouTube
      </a>
      <a href="https://open.spotify.com/user/31z2sjm4nmep3ecjeibav25czjsa" target="_blank" class="bg-[#1c1917]/70 hover:bg-[#262320]/70 p-4 rounded-lg flex items-center transition">
        <i data-feather="music" class="text-[#d6bfa7] mr-3"></i> Spotify
      </a>
      <a href="https://steamcommunity.com/id/notdimension" target="_blank" class="bg-[#1c1917]/70 hover:bg-[#262320]/70 p-4 rounded-lg flex items-center transition">
        <i data-feather="cpu" class="text-[#d6bfa7] mr-3"></i> Steam
      </a>
      <a href="https://www.roblox.com/users/665215157/profile" target="_blank" class="bg-[#1c1917]/70 hover:bg-[#262320]/70 p-4 rounded-lg flex items-center transition">
        <i data-feather="box" class="text-[#d6bfa7] mr-3"></i> Roblox
      </a>
      <a href="https://namemc.com/profile/NotDimension.1" target="_blank" class="bg-[#1c1917]/70 hover:bg-[#262320]/70 p-4 rounded-lg flex items-center transition">
        <i data-feather="user" class="text-[#d6bfa7] mr-3"></i> NameMC
      </a>
    </div>
  </section>

</main>

<footer class="bg-[#1c1917]/80 backdrop-blur-sm mt-12 py-6">
  <div class="max-w-6xl mx-auto px-4 text-center text-[#d6bfa7]">
    <p>&copy; 2024 NotDimension. All rights reserved.</p>
  </div>
</footer>

<script>
  feather.replace();

  // Vouch System with Moderation
  const ADMIN_PASSWORD = 'notdim2024'; // CHANGE THIS PASSWORD!
  let currentSlide = 0;
  let approvedVouches = [];

  // Load approved vouches
  async function loadApprovedVouches() {
    try {
      const result = await window.storage.list('vouch:approved:', true);
      if (result && result.keys) {
        approvedVouches = [];
        for (const key of result.keys) {
          try {
            const data = await window.storage.get(key, true);
            if (data) {
              approvedVouches.push(JSON.parse(data.value));
            }
          } catch (e) {
            console.log('Vouch not found:', key);
          }
        }
        displayCarousel();
      }
    } catch (e) {
      console.log('No vouches yet');
      displayCarousel();
    }
  }

  // Display carousel
  function displayCarousel() {
    const container = document.getElementById('vouch-slides');
    
    if (approvedVouches.length === 0) {
      container.innerHTML = '<p class="text-center text-[#d6bfa7]">No vouches yet. Be the first to submit one!</p>';
      return;
    }

    const vouch = approvedVouches[currentSlide];
    const avatarUrl = vouch.avatarUrl || `https://cdn.discordapp.com/embed/avatars/${parseInt(vouch.discordId || '0') % 5}.png`;
    
    container.innerHTML = `
      <div class="flex items-start gap-4">
        <img src="${avatarUrl}" alt="${vouch.username}" 
             class="w-16 h-16 rounded-full border-2 border-[#d6bfa7]"
             onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
        <div class="flex-1">
          <h4 class="font-semibold text-[#f5efe9]">${vouch.username}</h4>
          <p class="text-[#d6bfa7] text-sm mt-2">"${vouch.text}"</p>
          <p class="text-xs text-[#a89684] mt-2">${new Date(vouch.timestamp).toLocaleDateString()}</p>
        </div>
      </div>
      <div class="text-center mt-4 text-sm text-[#d6bfa7]">${currentSlide + 1} / ${approvedVouches.length}</div>
    `;
  }

  // Carousel navigation
  document.getElementById('prevVouch').addEventListener('click', () => {
    if (approvedVouches.length > 0) {
      currentSlide = (currentSlide - 1 + approvedVouches.length) % approvedVouches.length;
      displayCarousel();
    }
  });

  document.getElementById('nextVouch').addEventListener('click', () => {
    if (approvedVouches.length > 0) {
      currentSlide = (currentSlide + 1) % approvedVouches.length;
      displayCarousel();
    }
  });

  // Submit vouch modal
  const vouchModal = document.getElementById('vouchModal');
  const adminModal = document.getElementById('adminModal');

  document.getElementById('openVouchBtn').addEventListener('click', () => {
    vouchModal.classList.remove('hidden');
    vouchModal.classList.add('flex');
  });

  document.getElementById('closeModal').addEventListener('click', () => {
    vouchModal.classList.add('hidden');
    vouchModal.classList.remove('flex');
  });

  document.getElementById('submitVouch').addEventListener('click', async () => {
    const username = document.getElementById('vouchUser').value.trim();
    const discordId = document.getElementById('vouchDiscordId').value.trim();
    const avatarUrl = document.getElementById('vouchAvatarUrl').value.trim();
    const text = document.getElementById('vouchText').value.trim();
    const status = document.getElementById('submitStatus');

    if (!username || !text) {
      status.innerHTML = '<span class="text-red-400">Please fill in username and vouch text!</span>';
      return;
    }

    const vouch = {
      id: Date.now(),
      username,
      discordId,
      avatarUrl,
      text,
      timestamp: Date.now(),
      status: 'pending'
    };

    try {
      // Check if storage is available
      if (!window.storage) {
        status.innerHTML = '<span class="text-yellow-400">Storage not available in this environment.</span>';
        return;
      }

      const result = await window.storage.set(`vouch:pending:${vouch.id}`, JSON.stringify(vouch), true);
      
      status.innerHTML = '<span class="text-green-400">✓ Vouch submitted successfully! Awaiting approval.</span>';
      
      setTimeout(() => {
        vouchModal.classList.add('hidden');
        vouchModal.classList.remove('flex');
        document.getElementById('vouchUser').value = '';
        document.getElementById('vouchDisc
