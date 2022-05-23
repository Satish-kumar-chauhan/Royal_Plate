

 function sendEmail() {
    var user = document.getElementById("userEmail").value;
    // if(user==null)
    // {
    //     alert("Please Enter valid Email");
    // }
    // else{
Email.send({
Host: "smtp.gmail.com",
Username : "abcd@gmail.com",
Password : "abcd1234",
To : user,
From : "abcd@gmail.com",
Subject : "Mail using JavaScript",
Body : "Email body",
}).then(
message => alert("mail sent successfully"),
alert("mail sent successfully To:"+user)
);

}
// }