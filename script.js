// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Navigation smooth scroll
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header scroll effect
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.backgroundColor = 'rgba(14, 49, 99, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.backdropFilter = 'none';
        }
        
        lastScroll = currentScroll;
    });

    // Button click handlers
    const downloadButtons = document.querySelectorAll('.btn-primary-small, .btn-primary-large');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            // ここに資料ダウンロードの処理を追加
            alert('資料ダウンロードページに遷移します');
            // window.location.href = 'download.html';
        });
    });

    const contactButton = document.querySelector('.btn-secondary-small');
    if (contactButton) {
        contactButton.addEventListener('click', function() {
            // ここにお問い合わせフォームの処理を追加
            alert('お問い合わせページに遷移します');
            // window.location.href = 'contact.html';
        });
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .case-card, .program-card, .flow-step, .stat-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
