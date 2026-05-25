emailjs.init("YOUR_PUBLIC_KEY");

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("contact-form")
    .addEventListener("submit", function (e) {

        console.log("hellooo");

        e.preventDefault();

        emailjs.sendForm(
            "service_olrtixs",
            "template_pe9guol",
            this)
            
        .then(function () {

            alert("Email sent successfully");

            document.getElementById("contact-form").reset();

        }, function (error) {

            alert("Failed to send email");
            console.log(error);

        });

    });

});