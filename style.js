window.addEventListener("scroll", function () {
    const header = document.getElementById("header");

    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});



document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let status = document.getElementById("formStatus");

    if (!name || !email || !message) {
        status.textContent = "All fields are required.";
        status.style.color = "red";
        return;
    }

    status.textContent = "Sending...";
    status.style.color = "blue";

    try {
        let response = await fetch("your-api-url-here", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
        });

        if (response.ok) {
            status.textContent = "Message sent successfully!";
            status.style.color = "green";
            document.getElementById("contactForm").reset();
        } else {
            status.textContent = "Something went wrong. Try again!";
            status.style.color = "red";
        }

    } catch (error) {
        status.textContent = "Network error!";
        status.style.color = "red";
    }
});




function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_0bzsrmm","template_d41tpwq",parms).then(alert("Email Sent!!"))
}






 


            

