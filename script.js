// Create floating hearts
        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '💕';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 5 + 8) + 's';
            heart.style.animationDelay = Math.random() * 5 + 's';
            document.getElementById('heartsContainer').appendChild(heart);
            
            setTimeout(() => heart.remove(), 15000);
        }

        for (let i = 0; i < 15; i++) {
            setTimeout(createHeart, i * 1000);
        }
        setInterval(createHeart, 2000);

        // Magic word check - CUSTOMIZE THIS!
        const correctWord = 'iloveyou';
        
        function checkMagicWord() {
            const input = document.getElementById('magicWord').value.trim().toLowerCase();
            const errorMsg = document.getElementById('errorMsg');
            
            if (input === correctWord) {
                document.getElementById('entryPage').classList.add('hidden');
                document.getElementById('galleryPage').style.display = 'block';
            } else {
                errorMsg.classList.add('show');
                document.getElementById('magicWord').value = '';
                
                setTimeout(() => {
                    errorMsg.classList.remove('show');
                }, 3000);
            }
        }

        document.getElementById('magicWord').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkMagicWord();
            }
        });

        // Section tabs
        function showSection(sectionName) {
            const sections = document.querySelectorAll('.section-content');
            const tabs = document.querySelectorAll('.tab-btn');
            
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
            
            document.getElementById(sectionName).classList.add('active');
            event.target.classList.add('active');
        }

        // Toggle plan details
        function togglePlan(planId) {
            const planBody = document.getElementById(planId);
            
            if (planBody.classList.contains('closed')) {
                planBody.classList.remove('closed');
                planBody.classList.add('open');
            } else {
                planBody.classList.remove('open');
                planBody.classList.add('closed');
            }
        }

        // Message box
        function openMessage() {
            const messageBox = document.getElementById('messageBox');
            if (messageBox.classList.contains('closed')) {
                messageBox.classList.remove('closed');
                messageBox.classList.add('open');
            }
        }