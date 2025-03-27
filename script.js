function clickMenu(){
  if(itens.style.display == "block"){
    itens.style.display = 'none'
  }else{
    itens.style.display = 'block'
  }
}


document.addEventListener('click', function(event) {
  const burger = document.getElementById('burger')
  const itens = document.getElementById('itens')
  if (itens.style.display === "block" && !burger.contains(event.target) && !itens.contains(event.target)) {
    itens.style.display = 'none'
  }
})

function handleResize() {
  if (window.innerWidth > 768) {
      itens.style.display = 'flex'
  } else {
      if (itens.style.display !== 'block'){
         itens.style.display = 'none'
      }
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