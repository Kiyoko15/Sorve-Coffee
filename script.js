function toggleMenu() {
  const isOpen = menuIsOpen()

  if (isOpen) {
    closeMenu()
  } else {
    openMenu()
  }
}

function menuIsOpen() {
  return itens.classList.contains('itens--active')
}

function closeMenu() {
  itens.classList.remove('itens--active')
  burger.setAttribute('aria-expanded', false)
}
function openMenu() {
  itens.classList.add('itens--active')
  burger.setAttribute('aria-expanded', true)
}

const burger = document.getElementById('burger')
burger.addEventListener('click', toggleMenu)

const itens = document.getElementById('itens')

document.addEventListener('click', function (event) {

  const isMenuOpen = menuIsOpen()

  const isClickedInsideBurger = burger.contains(event.target)
  const isclickedInsideMenuItens = !itens.contains(event.target)

  if (isMenuOpen && !isClickedInsideBurger && isclickedInsideMenuItens) {
    closeMenu()
  }
})

function handleResize() {
  if (window.innerWidth > 768) {
    openMenu()
    burger.removeAttribute('aria-expanded')

  } else {
    closeMenu()

  }
}

// Chame handleResize quando a página carregar e sempre que a janela for redimensionada
window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);

function addCustomerTestimonial() {
  const testimonialsDiv = document.getElementById('testimonials');
  const testimonialInput = document.getElementById('testimonialInput');
  const testimonialText = testimonialInput.value.trim();

  if (testimonialText !== "") {
    const newTestimonial = document.createElement('div');
    newTestimonial.classList.add('testimonial');
    let costumerName = prompt('Tell us your name')
    newTestimonial.innerHTML = `<p>"${testimonialText}"</p><p>- ${costumerName}</p>`; // You can add a prompt for the customer's name

    testimonialsDiv.appendChild(newTestimonial);
    testimonialInput.value = ""; // Clear the textarea
  } else {
    alert("Please enter a testimonial.");
  }
}