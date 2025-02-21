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