// Mobile Menu Toggle
let menuIcon = document.getElementById('menu-icon') || document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('move');
    bell.classList.remove('active');
}

// Notification Panel Toggle
let bell = document.querySelector('.notification');
let bellIcon = document.querySelector('#bell-icon');

bellIcon.onclick = (e) => {
    e.stopPropagation();
    bell.classList.toggle('active');
    navbar.classList.remove('active');
    menuIcon.classList.remove('move');
    
    // Clear unread dot on open
    bellIcon.classList.remove('unread');
}

// Close panels when clicking outside
document.addEventListener('click', (e) => {
    if (!bell.contains(e.target) && e.target !== bellIcon) {
        bell.classList.remove('active');
    }
});

// Swiper Slider configuration
if (document.querySelector(".trending-content")) {
    var swiper = new Swiper(".trending-content", {
        slidesPerView: 1,
        spaceBetween: 15,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1068: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });
}

// Custom Scrollbar Indicator
window.onscroll = function() { trackScroll() };

function trackScroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById('scroll-bar').style.width = scrolled + '%';
}

// --- Game Store Rich Interactive Functionality ---

// Games Detailed Metadata Database
const gamesData = {
    "cyberpunk-2077": {
        title: "Cyberpunk 2077",
        genre: "Action / RPG",
        rating: "4.8",
        img: "img/trending1.webp",
        desc: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped in a do-or-die fight for survival.",
        os: "Windows 10 (64-bit)",
        cpu: "Intel Core i7-6700 or AMD Ryzen 5 1600",
        ram: "12 GB RAM",
        gpu: "NVIDIA GeForce GTX 1060 6GB or AMD Radeon RX 580 8GB",
        downloadUrl: "#",
        gallery: ["img/trending1.webp", "img/screenshots2.jpg", "img/screenshots3.jpg"]
    },
    "battlefield-2042": {
        title: "Battlefield 2042",
        genre: "Shooter / Action",
        rating: "4.1",
        img: "img/trending2.jpg",
        desc: "Battlefield 2042 is a first-person shooter that marks the return to the iconic all-out warfare of the franchise. Adapt and overcome in a near-future world transformed by disorder.",
        os: "Windows 10 (64-bit)",
        cpu: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        ram: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1050 Ti or AMD Radeon RX 560 4GB",
        downloadUrl: "#",
        gallery: ["img/trending2.jpg", "img/screenshots1.jpg", "img/screenshots3.jpg"]
    },
    "assassins-creed": {
        title: "Assassin's Creed Valhalla",
        genre: "Action / RPG",
        rating: "4.5",
        img: "img/trending3.jpg",
        desc: "Become Eivor, a legendary Viking warrior raised on tales of battle and glory. Raid your enemies, grow your settlement, and build your political power in the quest to earn a place in Valhalla.",
        os: "Windows 10 (64-bit)",
        cpu: "Intel Core i7-4790 or AMD Ryzen 5 1600",
        ram: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 960 or AMD Radeon R9 380 4GB",
        downloadUrl: "#",
        gallery: ["img/trending3.jpg", "img/screenshots1.jpg", "img/screenshots2.jpg"]
    },
    "ghost-of-tsushima": {
        title: "Ghost of Tsushima",
        genre: "Action / Adventure",
        rating: "4.9",
        img: "img/trending4.jpg",
        desc: "In the late 13th century, the Mongol empire has laid waste to entire nations. As Jin Sakai, one of the last remaining samurai, you must protect your people and reclaim your home.",
        os: "Windows 10 (64-bit)",
        cpu: "Intel Core i3-8100 or AMD Ryzen 3 1200",
        ram: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 960 or AMD Radeon RX 460 4GB",
        downloadUrl: "#",
        gallery: ["img/trending4.jpg", "img/screenshots2.jpg", "img/screenshots3.jpg"]
    },
    "gta-v": {
        title: "GTA V",
        genre: "Action / Crime",
        rating: "4.8",
        img: "img/trending5.png",
        desc: "When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with the criminal underworld, they must pull off dangerous heists to survive.",
        os: "Windows 10 (64-bit)",
        cpu: "Intel Core i5-3470 or AMD X8 FX-8350",
        ram: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7870 2GB",
        downloadUrl: "#",
        gallery: ["img/trending5.png", "img/screenshots1.jpg", "img/screenshots2.jpg"]
    },
    "dying-light-2": {
        title: "Dying Light 2",
        genre: "Survival / Action",
        rating: "4.4",
        img: "img/trending6.jpg",
        desc: "Over twenty years ago, humanity fought a virus—and lost. Now, the City is torn by conflict. Use your parkour agility and martial skills to survive and make tough choices.",
        os: "Windows 10 (64-bit)",
        cpu: "Intel Core i3-9100 or AMD Ryzen 3 2300X",
        ram: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1050 Ti or AMD Radeon RX 560 4GB",
        downloadUrl: "#",
        gallery: ["img/trending6.jpg", "img/screenshots1.jpg", "img/screenshots3.jpg"]
    },
    "halo-infinite": {
        title: "Halo Infinite",
        genre: "Shooter / Sci-Fi",
        rating: "4.3",
        img: "img/trending7.png",
        desc: "When all hope is lost, the Master Chief is ready to confront the most ruthless foe he has ever faced. Step inside the armor of humanity's greatest hero to experience an epic adventure.",
        os: "Windows 10 (64-bit)",
        cpu: "Intel Core i5-4440 or AMD Ryzen 5 1600",
        ram: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1050 Ti or AMD Radeon RX 570 4GB",
        downloadUrl: "#",
        gallery: ["img/trending7.png", "img/screenshots2.jpg", "img/screenshots3.jpg"]
    },
    "resident-evil-village": {
        title: "Resident Evil Village",
        genre: "Survival / Horror",
        rating: "4.7",
        img: "img/trending8.png",
        desc: "Experience survival horror like never before in the eighth major installment of the Resident Evil franchise. Ethan Winters' world is shattered once again by a mysterious attack.",
        os: "Windows 10 (64-bit)",
        cpu: "Intel Core i5-7500 or AMD Ryzen 3 1200",
        ram: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 1050 Ti or AMD Radeon RX 560 4GB",
        downloadUrl: "#",
        gallery: ["img/trending8.png", "img/screenshots1.jpg", "img/screenshots2.jpg"]
    },
    "subway-surfers": {
        title: "Subway Surfers",
        genre: "Casual / Arcade",
        rating: "4.6",
        img: "img/new1.jpg",
        desc: "Help Jake, Tricky & Fresh escape from the grumpy Inspector and his dog in this classic endless runner! Dash as fast as you can, dodge oncoming trains, and collect coins.",
        os: "Windows 7 / 8 / 10 (64-bit)",
        cpu: "Intel Core 2 Duo or AMD Athlon 64 X2",
        ram: "2 GB RAM",
        gpu: "Intel HD Graphics 4000 or NVIDIA GeForce 8600 GT",
        downloadUrl: "download-files/Subway Surface.apk",
        gallery: ["img/new1.jpg", "img/screenshots1.jpg", "img/screenshots2.jpg", "img/screenshots3.jpg"]
    },
    "call-of-duty-mobile": {
        title: "Call of Duty: Mobile",
        genre: "Shooter / Multiplayer",
        rating: "4.7",
        img: "img/new2.jpg",
        desc: "Official mobile title designed for smartphones. Play iconic multiplayer maps and experience 100-player Battle Royale matches on the go with custom graphics settings.",
        os: "Windows 10 (64-bit) (PC emulator)",
        cpu: "Intel Core i3 4th Gen or AMD FX-6300",
        ram: "4 GB RAM",
        gpu: "NVIDIA GeForce GTX 750 or AMD Radeon HD 7850",
        downloadUrl: "#",
        gallery: ["img/new2.jpg", "img/screenshots2.jpg", "img/screenshots3.jpg"]
    },
    "free-guy": {
        title: "Free Guy - The Game",
        genre: "Action / Adventure",
        rating: "4.2",
        img: "img/new3.jpg",
        desc: "Play as Guy, a bank teller who discovers he is a background character in a violent open-world game. Rewrite your destiny and save the city from deletion.",
        os: "Windows 10 (64-bit)",
        cpu: "Intel Core i5-4460 or AMD FX-8300",
        ram: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 750 Ti or AMD Radeon R7 265",
        downloadUrl: "#",
        gallery: ["img/new3.jpg", "img/screenshots1.jpg", "img/screenshots3.jpg"]
    },
    "clash-royale": {
        title: "Clash Royale",
        genre: "Strategy / Cards",
        rating: "4.5",
        img: "img/new4.jpg",
        desc: "Enter the Arena! Build your Battle Deck and outsmart the enemy in fast-paced real-time duels. Earn chests, unlock new cards, and challenge players worldwide.",
        os: "Windows 10 (64-bit) (PC emulator)",
        cpu: "Intel Celeron / AMD Dual Core",
        ram: "4 GB RAM",
        gpu: "Intel HD Graphics 5000",
        downloadUrl: "#",
        gallery: ["img/new4.jpg", "img/screenshots2.jpg", "img/screenshots3.jpg"]
    },
    "minecraft": {
        title: "Minecraft",
        genre: "Survival / Sandbox",
        rating: "4.8",
        img: "img/new5.png",
        desc: "Explore infinite blocky worlds and build everything from simple huts to grand palaces. Choose Survival mode to fight dangerous monsters, or Creative mode for limitless creativity.",
        os: "Windows 10 (64-bit)",
        cpu: "Intel Core i3-3210 or AMD A8-7600",
        ram: "4 GB RAM",
        gpu: "Intel HD Graphics 4000 or NVIDIA GeForce 400 Series",
        downloadUrl: "#",
        gallery: ["img/new5.png", "img/screenshots1.jpg", "img/screenshots2.jpg"]
    },
    "pubg": {
        title: "PUBG Mobile",
        genre: "Shooter / Battle Royale",
        rating: "4.5",
        img: "img/new6.png",
        desc: "Drop in, loot up, and survive. 100 players compete on massive maps in a classic battle royale format where only the last squad standing claims the chicken dinner.",
        os: "Windows 10 (64-bit) (PC emulator)",
        cpu: "Intel Core i5-6400 or AMD Ryzen 5 1400",
        ram: "8 GB RAM",
        gpu: "NVIDIA GeForce GTX 960 or AMD Radeon R9 380",
        downloadUrl: "#",
        gallery: ["img/new6.png", "img/screenshots1.jpg", "img/screenshots3.jpg"]
    },
    "fortnite": {
        title: "Fortnite",
        genre: "Shooter / Action / Building",
        rating: "4.6",
        img: "img/new7.png",
        desc: "Jump into the battle bus and parachute down onto an island of building, shooting, and destructible covers. Master your fort builds to secure the victory royale.",
        os: "Windows 10 (64-bit)",
        cpu: "Intel Core i3-3225 or AMD equivalent",
        ram: "8 GB RAM",
        gpu: "Intel HD Graphics 4000 or NVIDIA GeForce GT 520",
        downloadUrl: "#",
        gallery: ["img/new7.png", "img/screenshots2.jpg", "img/screenshots3.jpg"]
    },
    "marvel-contest-of-champions": {
        title: "Marvel: Contest of Champions",
        genre: "Action / Fighting",
        rating: "4.4",
        img: "img/new8.jpg",
        desc: "Assemble your dream team of Marvel super heroes and villains! Battle your way through celestial arenas, fight iconic cosmic bosses, and dominate multiplayer tournaments.",
        os: "Windows 10 (64-bit) (PC emulator)",
        cpu: "Intel Core 2 Quad or AMD Phenom II X4",
        ram: "4 GB RAM",
        gpu: "NVIDIA GeForce 8800 GT or ATI Radeon HD 3870",
        downloadUrl: "#",
        gallery: ["img/new8.jpg", "img/screenshots1.jpg", "img/screenshots3.jpg"]
    }
};

// Toast Notification Manager
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type === 'error' ? 'toast-error' : 'toast-success'}`;
    toast.innerHTML = `
        <i class='bx ${type === 'error' ? 'bx-error-circle' : 'bx-check-circle'}'></i>
        <div class="toast-body">${message}</div>
    `;

    container.appendChild(toast);

    // Trigger sliding animations
    setTimeout(() => {
        toast.classList.add('show');
    }, 50);

    // Slide out and remove toast after display time
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 3800);
}

// Favorites Storage & Management
function getFavorites() {
    const favs = localStorage.getItem('gamestore_favorites');
    return favs ? JSON.parse(favs) : [];
}

function saveFavorites(favs) {
    localStorage.setItem('gamestore_favorites', JSON.stringify(favs));
}

function toggleFavorite(id, gameTitle) {
    let favs = getFavorites();
    let isAdded = false;

    if (favs.includes(id)) {
        favs = favs.filter(item => item !== id);
        showToast(`Removed "${gameTitle}" from Favorites`, 'error');
    } else {
        favs.push(id);
        isAdded = true;
        showToast(`Added "${gameTitle}" to Favorites!`, 'success');
    }
    
    saveFavorites(favs);
    syncFavoriteButtons(id, isAdded);

    // If active tab is Favorites, refresh current layout filter
    const activeTab = document.querySelector('.filter-tab.active');
    if (activeTab && activeTab.getAttribute('data-filter') === 'favorites') {
        filterCategory('favorites');
    }
}

function syncFavoriteButtons(id, isFavorited) {
    // Update all matching favorite icons on the screen (slides and grids)
    const btns = document.querySelectorAll(`.fav-icon-btn[data-id="${id}"]`);
    btns.forEach(btn => {
        if (isFavorited) {
            btn.classList.add('active');
            btn.innerHTML = `<i class='bx bxs-heart'></i>`;
        } else {
            btn.classList.remove('active');
            btn.innerHTML = `<i class='bx bx-heart'></i>`;
        }
    });

    // Update modal favorite button if it's currently open
    const modal = document.getElementById('game-modal');
    if (modal.classList.contains('active')) {
        const modalFavBtn = document.getElementById('modal-fav-btn');
        if (modalFavBtn.getAttribute('data-id') === id) {
            if (isFavorited) {
                modalFavBtn.classList.add('active');
                modalFavBtn.innerHTML = `<i class='bx bxs-heart'></i> Favorited`;
            } else {
                modalFavBtn.classList.remove('active');
                modalFavBtn.innerHTML = `<i class='bx bx-heart'></i> Favorite`;
            }
        }
    }
}

function initFavorites() {
    const favs = getFavorites();
    favs.forEach(id => {
        syncFavoriteButtons(id, true);
    });
}

// Client-Side Searching
const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const gridItems = document.querySelectorAll('#new-games-grid .box');
        
        // Reset active filter tab back to "All" when searching
        const filterTabs = document.querySelectorAll('.filter-tab');
        filterTabs.forEach(t => t.classList.remove('active'));
        if (filterTabs[0]) filterTabs[0].classList.add('active');

        gridItems.forEach(box => {
            const gameId = box.getAttribute('data-id');
            const gameData = gamesData[gameId];
            if (gameData) {
                const titleMatch = gameData.title.toLowerCase().includes(query);
                const genreMatch = gameData.genre.toLowerCase().includes(query);
                if (titleMatch || genreMatch) {
                    box.style.display = 'block';
                } else {
                    box.style.display = 'none';
                }
            }
        });
    });
}

// Client-Side Filtering Tabs
function filterCategory(filter) {
    const gridItems = document.querySelectorAll('#new-games-grid .box');
    const favs = getFavorites();

    gridItems.forEach(box => {
        const category = box.getAttribute('data-category');
        const gameId = box.getAttribute('data-id');

        if (filter === 'all') {
            box.style.display = 'block';
        } else if (filter === 'favorites') {
            if (favs.includes(gameId)) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        } else if (category === filter) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });
}

const filterTabs = document.querySelectorAll('.filter-tab');
filterTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        // Clear search input on tab filter change
        if (searchInput) searchInput.value = '';

        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.getAttribute('data-filter');
        filterCategory(filter);
    });
});

// --- Dynamic Modal Display Logic ---
const modal = document.getElementById('game-modal');
const closeBtn = document.querySelector('.close-btn');

function openModal(id) {
    const game = gamesData[id];
    if (!game) return;

    document.getElementById('modal-title').innerText = game.title;
    document.getElementById('modal-genre').innerText = game.genre;
    document.getElementById('modal-rating').innerText = game.rating;
    document.getElementById('modal-img').src = game.img;
    document.getElementById('modal-desc').innerText = game.desc;
    
    // System Requirements
    document.getElementById('req-os').innerText = game.os;
    document.getElementById('req-cpu').innerText = game.cpu;
    document.getElementById('req-ram').innerText = game.ram;
    document.getElementById('req-gpu').innerText = game.gpu;

    // Download Button Config
    const downloadBtn = document.getElementById('modal-download-btn');
    downloadBtn.setAttribute('data-id', id);
    if (game.downloadUrl !== '#') {
        downloadBtn.href = game.downloadUrl;
        downloadBtn.setAttribute('download', '');
    } else {
        downloadBtn.href = '#';
        downloadBtn.removeAttribute('download');
    }

    // Favorite Button Config
    const favBtn = document.getElementById('modal-fav-btn');
    favBtn.setAttribute('data-id', id);
    const favs = getFavorites();
    if (favs.includes(id)) {
        favBtn.classList.add('active');
        favBtn.innerHTML = `<i class='bx bxs-heart'></i> Favorited`;
    } else {
        favBtn.classList.remove('active');
        favBtn.innerHTML = `<i class='bx bx-heart'></i> Favorite`;
    }

    // Screenshot Gallery Thumbs
    const galleryContainer = document.getElementById('modal-gallery');
    galleryContainer.innerHTML = '';
    
    game.gallery.forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = game.title;
        img.onclick = () => {
            document.getElementById('modal-img').src = imgSrc;
        };
        galleryContainer.appendChild(img);
    });

    // Display modal
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

if (closeBtn) closeBtn.onclick = closeModal;

// Close modal when clicking outside content area
window.onclick = (e) => {
    if (e.target === modal) {
        closeModal();
    }
};

// Modal Trigger Event Handlers
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', (e) => {
        // Exclude actions if click was on favorite overlay button or down-arrow box button
        if (e.target.closest('.fav-icon-btn') || e.target.closest('.box-btn')) {
            return; 
        }
        const gameId = box.getAttribute('data-id');
        openModal(gameId);
    });
});

// Home Hero Button Modal Trigger
const heroBtn = document.querySelector('.home-text .btn');
if (heroBtn) {
    heroBtn.onclick = (e) => {
        e.preventDefault();
        const id = heroBtn.getAttribute('data-id');
        openModal(id);
    };
}

// Favorite Icon Buttons Click Handlers
document.querySelectorAll('.fav-icon-btn').forEach(btn => {
    btn.onclick = (e) => {
        e.stopPropagation(); // Stop opening the modal
        const id = btn.getAttribute('data-id');
        const game = gamesData[id];
        if (game) {
            toggleFavorite(id, game.title);
        }
    };
});

// Modal Favorite Button Action
const modalFavBtn = document.getElementById('modal-fav-btn');
if (modalFavBtn) {
    modalFavBtn.onclick = () => {
        const id = modalFavBtn.getAttribute('data-id');
        const game = gamesData[id];
        if (game) {
            toggleFavorite(id, game.title);
        }
    };
}

// Simulated Downloader Functionality
function simulateDownload(gameId) {
    const game = gamesData[gameId];
    if (!game) return;

    showToast(`Initializing download for ${game.title}...`, 'success');
    
    // Add dot indicator on bell
    bellIcon.classList.add('unread');

    // Simulate completion after delay
    setTimeout(() => {
        showToast(`Successfully downloaded "${game.title}"!`, 'success');
        
        // Add to bell notification log list
        const notification = document.querySelector('.notification');
        const notifyBox = document.createElement('div');
        notifyBox.className = 'notification-box';
        notifyBox.innerHTML = `
            <i class='bx bxs-check-circle'></i>
            <p>${game.title} downloaded successfully to PC.</p>
        `;
        notification.insertBefore(notifyBox, notification.firstChild);
        
        // Trigger file download if actual payload exists
        if (game.downloadUrl !== '#') {
            const hiddenLink = document.createElement('a');
            hiddenLink.href = game.downloadUrl;
            hiddenLink.download = '';
            document.body.appendChild(hiddenLink);
            hiddenLink.click();
            document.body.removeChild(hiddenLink);
        }
    }, 2800);
}

// Down-Arrow Cards buttons (Direct Download Actions)
document.querySelectorAll('.box-btn').forEach(btn => {
    btn.onclick = (e) => {
        e.stopPropagation(); // Avoid triggering detail modals
        const box = btn.closest('.box');
        if (box) {
            const gameId = box.getAttribute('data-id');
            simulateDownload(gameId);
        }
    };
});

// Modal Download Action
const modalDownloadBtn = document.getElementById('modal-download-btn');
if (modalDownloadBtn) {
    modalDownloadBtn.onclick = (e) => {
        const id = modalDownloadBtn.getAttribute('data-id');
        const game = gamesData[id];
        if (game) {
            closeModal();
            simulateDownload(id);
        }
    };
}

// Header static download queue icon handler
const downloadQueueBtn = document.getElementById('download-queue-btn');
if (downloadQueueBtn) {
    downloadQueueBtn.onclick = () => {
        showToast("No active downloads in queue.", 'success');
    };
}

// Initialize favorites states on page load
document.addEventListener('DOMContentLoaded', () => {
    initFavorites();
});
