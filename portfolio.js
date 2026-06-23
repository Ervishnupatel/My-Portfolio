document.addEventListener("DOMContentLoaded", function () {
    




    // 2. FAQ Toggle Logic (Refined for Mobile & Toggle Stage)
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Check if this item is already open
            const isActive = item.classList.contains('active');

            // Close all other FAQ items so only one is open at a time
            faqItems.forEach(el => el.classList.remove('active'));

            // If the clicked item was NOT active, open it
            // If it WAS active, it remains closed (toggling back to '+' stage)
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // 3. 3D Tilt for Skills (Only on Desktop) - Unchanged
    if (window.innerWidth > 1024) {
        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const xc = rect.width / 2;
                const yc = rect.height / 2;
                const dx = x - xc;
                const dy = y - yc;
                card.style.transform = `perspective(500px) rotateX(${-dy/10}deg) rotateY(${dx/10}deg)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
            });
        });
    }

    // 4. Auto-close Mobile Menu - Unchanged
    const checker = document.getElementById('theme-btn desktop-only-btn') || ('theme-btn mobile-only');
    const allLinks = document.querySelectorAll('.nav-link, .nav-link-mobile');

    allLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (checker) {
                checker.checked = false;
            }
        });
    });


});