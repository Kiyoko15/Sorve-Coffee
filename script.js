
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
window.addEventListener('load', handleResize)
window.addEventListener('resize', handleResize)

// Função para salvar os depoimentos no Local Storage
function saveTestimonials(testimonials) {
  localStorage.setItem('customerTestimonials', JSON.stringify(testimonials))
}

// Função para carregar os depoimentos do Local Storage
function loadTestimonials() {
  const storedTestimonials = localStorage.getItem('customerTestimonials')
  return storedTestimonials ? JSON.parse(storedTestimonials) : []
}

// Array para armazenar os depoimentos
let testimonials = loadTestimonials()

// Função para renderizar os depoimentos na tela
function renderTestimonials() {
  const testimonialsDiv = document.getElementById('testimonials')
  testimonialsDiv.innerHTML = '' // Limpa a div antes de renderizar

  testimonials.forEach((testimonial, index) => {
    const newTestimonial = document.createElement('div')
    newTestimonial.classList.add('testimonial')
    newTestimonial.innerHTML = `
      <p>"${testimonial.text}"</p>
      <p>- ${testimonial.name}</p>
      <div class="testimonial-actions">
        <button class="delete-testimonial" data-index="${index}">Delete</button>
        <button class="edit-testimonial" data-index="${index}">Edit</button>
      </div>
    `
    testimonialsDiv.appendChild(newTestimonial)
  });

  // Adiciona os event listeners para os botões de deletar e editar
  addTestimonialEventListeners()
}

function addCustomerTestimonial() {
  const testimonialInput = document.getElementById('testimonialInput')
  const testimonialText = testimonialInput.value.trim()

  if (testimonialText !== "") {
    let customerName = prompt('Tell us your name.')
    if (customerName) {
      testimonials.push({ name: customerName, text: testimonialText })
      saveTestimonials(testimonials)
      renderTestimonials()
      testimonialInput.value = "" // Limpa a textarea
    }
  } else {
    alert("Please enter a testimonial.")
  }
}

function deleteTestimonial(index) {
  if (confirm('Are you sure you want to delete this testimonial?')) {
    testimonials.splice(index, 1)
    saveTestimonials(testimonials)
    renderTestimonials()
  }
}

function editTestimonial(index) {
  const testimonialToEdit = testimonials[index]
  const newText = prompt('Edit your testimonial:', testimonialToEdit.text)
  if (newText !== null) {
    const newName = prompt('Edit your name:', testimonialToEdit.name)
    if (newName !== null) {
      testimonials[index] = { name: newName, text: newText }
      saveTestimonials(testimonials)
      renderTestimonials()
    }
  }
}

function addTestimonialEventListeners() {
  const deleteButtons = document.querySelectorAll('.delete-testimonial')
  deleteButtons.forEach(button => {
    button.addEventListener('click', function () {
      const index = parseInt(this.dataset.index)
      deleteTestimonial(index)
    })
  })

  const editButtons = document.querySelectorAll('.edit-testimonial')
  editButtons.forEach(button => {
    button.addEventListener('click', function () {
      const index = parseInt(this.dataset.index)
      editTestimonial(index)
    })
  })
}

// Renderiza os depoimentos iniciais ao carregar a página
renderTestimonials()
