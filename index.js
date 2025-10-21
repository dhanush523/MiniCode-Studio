function toggleMenu() {
      const navLinks = document.getElementById("navLinks");
      navLinks.classList.toggle("active");
    }

// --------------------------------------------------------------
 function openGmail() {
    const email = "dhanushshankar74@gmail.com";
    const subject = "Inquiry about Mini Projects ";
const body = "Hello MiniCode Studio, I am interested in purchasing a project . Please provide more details.";

    
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      // 📱 Mobile → open Gmail app (mailto:)
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    } else {
      // 💻 Desktop → open Gmail web
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`,
        "_blank"
      );
    }
  }   

// --------------------------------------------------------------


 
    document.getElementById("inquiryForm").addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you! Your inquiry has been sent successfully.");
      this.reset();
    });
  
    // --------------------------------------------------------------
