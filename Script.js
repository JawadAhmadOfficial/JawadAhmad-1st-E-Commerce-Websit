
        // DOM Elements
        const loader = document.getElementById('loader');
        const navbar = document.getElementById('navbar');
        const authModal = document.getElementById('auth-modal');
        const loginForm = document.getElementById('login-form');
        const signupForm = document.getElementById('signup-form');
        const closeModal = document.getElementById('close-modal');
        const openLogin = document.getElementById('open-login');
        const openSignup = document.getElementById('open-signup');
        const switchToLogin = document.getElementById('switch-to-login');
        const switchToSignup = document.getElementById('switch-to-signup');
        const logoutBtn = document.getElementById('logout-btn');
        const notification = document.getElementById('notification');
        const notificationText = document.getElementById('notification-text');
        const productsGrid = document.getElementById('products-grid');
        const socialGrid = document.getElementById('social-grid');
        const dashboard = document.getElementById('dashboard');
        const fab = document.getElementById('fab');
        const exploreBtn = document.getElementById('explore-btn');
        const watchDemo = document.getElementById('watch-demo');

        // Sample Data
        const products = [
            {
                id: 1,
                name: "Quantum Laptop Pro",
                category: "Electronics",
                price: "$1,299",
                image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Ultra-thin laptop with quantum processor for unparalleled performance.",
                badge: "BEST SELLER"
            },
            {
                id: 2,
                name: "Neural Headphones X",
                category: "Audio",
                price: "$349",
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Noise-cancelling headphones with AI-powered sound optimization.",
                badge: "NEW"
            },
            {
                id: 3,
                name: "Solar Watch Elite",
                category: "Wearables",
                price: "$499",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w-800&q=80",
                description: "Smartwatch with solar charging and health monitoring features.",
                badge: "LIMITED"
            },
            {
                id: 4,
                name: "Drone Vision Pro",
                category: "Photography",
                price: "$899",
                image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "4K drone with obstacle avoidance and 30-minute flight time.",
                badge: "SALE"
            },
            {
                id: 5,
                name: "Zen Garden Kit",
                category: "Lifestyle",
                price: "$89",
                image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Complete indoor garden kit with smart watering system.",
                badge: "TRENDING"
            },
            {
                id: 6,
                name: "VR Explorer Set",
                category: "Gaming",
                price: "$599",
                image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Virtual reality headset with motion controllers and 100+ games.",
                badge: "HOT"
            }
        ];

        const socialProfiles = [
            {
                name: "Alex Morgan",
                username: "@alexdesign",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                content: "Just launched my new design portfolio on NexusSphere! Check out my latest UI/UX projects.",
                platform: "Designer",
                followers: "12.5K",
                following: "342",
                posts: "156"
            },
            {
                name: "Tech Innovators",
                username: "@techfuture",
                avatar: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                content: "Breaking: New AI model achieves 99% accuracy in medical diagnosis. The future is here!",
                platform: "Technology",
                followers: "45.2K",
                following: "89",
                posts: "1.2K"
            },
            {
                name: "Eco Warriors",
                username: "@greenplanet",
                avatar: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                content: "Join our campaign to plant 1 million trees this year. Every contribution counts!",
                platform: "Environment",
                followers: "89.7K",
                following: "210",
                posts: "2.4K"
            }
        ];

        // Initialize
        window.addEventListener('DOMContentLoaded', () => {
            // Hide loader
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                    showNotification('Welcome to NexusSphere! 🚀');
                }, 500);
            }, 1500);

            // Load products and social cards
            loadProducts();
            loadSocialCards();

            // Check if user is logged in
            checkAuthStatus();

            // Initialize animations
            initAnimations();
        });

        // Load Products
        function loadProducts() {
            productsGrid.innerHTML = '';
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card animate__animated';
                productCard.innerHTML = `
                    ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-content">
                        <span class="product-category">${product.category}</span>
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-footer">
                            <div class="product-price">${product.price}</div>
                            <div class="product-actions">
                                <button class="btn-icon" onclick="addToCart(${product.id})">
                                    <i class="fas fa-shopping-cart"></i>
                                </button>
                                <button class="btn-icon" onclick="likeProduct(${product.id})">
                                    <i class="far fa-heart"></i>
                                </button>
                                <button class="btn-icon" onclick="shareProduct(${product.id})">
                                    <i class="fas fa-share-alt"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                productsGrid.appendChild(productCard);
            });
        }

        // Load Social Cards
        function loadSocialCards() {
            socialGrid.innerHTML = '';
            socialProfiles.forEach(profile => {
                const socialCard = document.createElement('div');
                socialCard.className = 'social-card animate__animated';
                socialCard.innerHTML = `
                    <div class="social-header">
                        <img src="${profile.avatar}" alt="${profile.name}" class="social-avatar">
                        <div class="social-user">
                            <h4>${profile.name}</h4>
                            <span>${profile.username}</span>
                            <div class="social-media">
                                <i class="fas fa-hashtag"></i> ${profile.platform}
                            </div>
                        </div>
                    </div>
                    <p class="social-content">${profile.content}</p>
                    <div class="social-stats">
                        <div class="stat">
                            <span class="stat-value">${profile.followers}</span>
                            <span class="stat-label">Followers</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">${profile.following}</span>
                            <span class="stat-label">Following</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">${profile.posts}</span>
                            <span class="stat-label">Posts</span>
                        </div>
                    </div>
                    <button class="btn btn-login" style="width: 100%; margin-top: 20px;" onclick="followProfile('${profile.username}')">
                        <i class="fas fa-user-plus"></i> Follow
                    </button>
                `;
                socialGrid.appendChild(socialCard);
            });
        }

        // Auth Modal Handling
        openLogin.addEventListener('click', () => {
            authModal.classList.add('active');
            showForm('login');
        });

        openSignup.addEventListener('click', () => {
            authModal.classList.add('active');
            showForm('signup');
        });

        closeModal.addEventListener('click', () => {
            authModal.classList.remove('active');
        });

        switchToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            showForm('login');
        });

        switchToSignup.addEventListener('click', (e) => {
            e.preventDefault();
            showForm('signup');
        });

        function showForm(formType) {
            if (formType === 'login') {
                loginForm.classList.add('active');
                signupForm.classList.remove('active');
            } else {
                loginForm.classList.remove('active');
                signupForm.classList.add('active');
            }
        }

        // Form Submission
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            // Simulate authentication
            if (email && password) {
                const user = {
                    name: email.split('@')[0],
                    email: email
                };
                
                localStorage.setItem('nexus_user', JSON.stringify(user));
                showNotification(`Welcome back, ${user.name}! 👋`);
                authModal.classList.remove('active');
                checkAuthStatus();
            } else {
                showNotification('Please fill in all fields!', 'error');
            }
        });

        document.getElementById('signupForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('signup-name').value;
            const email = document.getElementById('signup-email').value;
            const username = document.getElementById('signup-username').value;
            const password = document.getElementById('signup-password').value;
            const confirm = document.getElementById('signup-confirm').value;
            
            if (password !== confirm) {
                showNotification('Passwords do not match!', 'error');
                return;
            }
            
            if (password.length < 6) {
                showNotification('Password must be at least 6 characters!', 'error');
                return;
            }
            
            const user = {
                name: name,
                email: email,
                username: username
            };
            
            localStorage.setItem('nexus_user', JSON.stringify(user));
            showNotification(`Welcome to NexusSphere, ${name}! 🎉`);
            authModal.classList.remove('active');
            checkAuthStatus();
        });

        // Logout
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('nexus_user');
            showNotification('Logged out successfully. See you soon! 👋');
            checkAuthStatus();
        });

        // Check Auth Status
        function checkAuthStatus() {
            const user = JSON.parse(localStorage.getItem('nexus_user'));
            if (user) {
                document.getElementById('user-name').textContent = user.name;
                dashboard.style.display = 'block';
                document.querySelector('.hero').style.display = 'none';
                document.querySelector('#products').style.display = 'none';
                document.querySelector('#social').style.display = 'none';
                document.querySelector('#features').style.display = 'none';
                openLogin.style.display = 'none';
                openSignup.style.display = 'none';
            } else {
                dashboard.style.display = 'none';
                document.querySelector('.hero').style.display = 'flex';
                document.querySelector('#products').style.display = 'block';
                document.querySelector('#social').style.display = 'block';
                document.querySelector('#features').style.display = 'block';
                openLogin.style.display = 'flex';
                openSignup.style.display = 'flex';
            }
        }

        // Show Notification
        function showNotification(message, type = 'success') {
            notificationText.textContent = message;
            notification.style.borderLeftColor = type === 'error' ? 'var(--danger)' : 'var(--primary)';
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Animate elements on scroll
            animateOnScroll();
        });

        // Initialize Animations
        function initAnimations() {
            // Animate elements when they come into view
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate__fadeInUp');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            // Observe all cards and sections
            document.querySelectorAll('.product-card, .social-card, .feature-card').forEach(el => {
                observer.observe(el);
            });
        }

        function animateOnScroll() {
            const cards = document.querySelectorAll('.product-card, .social-card');
            cards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (cardTop < windowHeight - 100) {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }
            });
        }

        // Interactive Functions
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            showNotification(`Added ${product.name} to cart! 🛒`);
        }

        function likeProduct(productId) {
            const product = products.find(p => p.id === productId);
            showNotification(`Liked ${product.name}! ❤️`);
        }

        function shareProduct(productId) {
            const product = products.find(p => p.id === productId);
            showNotification(`Shared ${product.name} with friends! 📤`);
        }

        function followProfile(username) {
            showNotification(`Now following ${username}! 👥`);
        }

        // FAB Click
        fab.addEventListener('click', () => {
            showNotification('Your cart has 3 items. Ready to checkout? 🛍️');
        });

        // Explore Button
        exploreBtn.addEventListener('click', () => {
            document.querySelector('#products').scrollIntoView({ 
                behavior: 'smooth' 
            });
            showNotification('Explore our amazing products! 🔍');
        });

        // Watch Demo
        watchDemo.addEventListener('click', () => {
            showNotification('Starting demo video... 🎬');
            // In a real app, you would play a video here
        });

        // Close modal on outside click
        authModal.addEventListener('click', (e) => {
            if (e.target === authModal) {
                authModal.classList.remove('active');
            }
        });

        // Add some initial animations
        document.querySelectorAll('.section-title').forEach(title => {
            title.classList.add('animate__animated', 'animate__fadeInUp');
        });
