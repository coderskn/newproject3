document.addEventListener('DOMContentLoaded', function() {
    // 1. Interactivity: CTA Button Click Event
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Functionality: Scroll to the projects section
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
                
                // Also provide visual feedback via console/alert
                console.log("CTA button clicked. Scrolling to projects.");
                alert("Exploring projects section now!");
            }
        });
    }

    // 2. Interactivity: Contact Form Submission Handling
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the default form submission (which reloads the page)
            event.preventDefault(); 
            
            // In a real application, you would send this data to a server here.
            // For this project, we simulate the success feedback.

            // Get form data (optional, but good practice)
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log(`Simulating submission from: ${name} (${email})`);

            // Show success message
            formStatus.style.display = 'block';
            contactForm.reset(); // Clear the form fields

            // Hide the success message after 3 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 3000);
        });
    }
});
