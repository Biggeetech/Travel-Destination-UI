const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Counter animation
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const increment = target / 200;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  // Trigger only when visible
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      updateCounter();
      observer.disconnect();
    }
  });

  observer.observe(counter);
});

// Chart bot 
document.getElementById("chatBubble").onclick = () => {
  document.getElementById("chatBox").classList.toggle("hidden");
};

// FAQs
function toggleFAQ(id) {
  const faq = document.getElementById("faq" + id);
  faq.classList.toggle("hidden");
}