function sendmail(){
    let parms ={
        name : document.getElementById("Your Name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    };
    emailjs.send("template_0qxr0ja","template_srlgn28",parms)
    .then(()=>{
        alert("Email sent successfully");
    })
    .catch((error)=>{
       console.log("error sending email:",error);
       alert("failed to sent email. Please try again.");
    })
}