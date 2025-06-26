document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carouselTrack');
    const slides = Array.from(document.querySelectorAll('.carouselSlide'));
    const nextBtn = document.querySelector('.carouselButton.right');
    const prevBtn = document.querySelector('.carouselButton.left');
    const carouselContainer = document.querySelector('.carouselContainer');
    let currentIndex = 0;

    function focusProject(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
                slide.setAttribute('aria-hidden', 'false');
            } else {
                slide.style.display = 'none';
                slide.setAttribute('aria-hidden', 'true');
            }
        });
    }

    function handleCarouselKey(e) {
        if (e.key === "ArrowLeft") {
            prevBtn && prevBtn.click();
        } else if (e.key === "ArrowRight") {
            nextBtn && nextBtn.click();
        }
    }

    if (nextBtn && prevBtn && slides.length > 0) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            focusProject(currentIndex);
            nextBtn.focus();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            focusProject(currentIndex);
            prevBtn.focus();
        });

        nextBtn.addEventListener('keydown', handleCarouselKey);
        prevBtn.addEventListener('keydown', handleCarouselKey);
    }

    if (carouselContainer) {
        carouselContainer.setAttribute('tabindex', '0');
        carouselContainer.addEventListener('keydown', handleCarouselKey);
    }

    if (slides.length > 0) {
        focusProject(currentIndex);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a.navItem[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});