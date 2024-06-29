document.addEventListener('DOMContentLoaded', function () {
  const myCarouselElement = document.querySelector('#myCarousel');
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: false
  });
});

const sections = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-up-active');
      observer.unobserve(entry.target); // Optional: Stop observing once animated
    }
  });
});

sections.forEach(section => {
  observer.observe(section);
});

