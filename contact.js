const form = document.querySelector("form");

const createMessage = async (e) => {
    e.preventDefault();

    const doc = {
        name: form.fullname.value,
        email: form.email.value,
        phone: form.phone.value,
        message: form.message.value,
    }
    await fetch("http://localhost:3000/messages", {
        method: "POST",
        body: JSON.stringify(doc),
        headers: { 'Content-Type': 'application/json' }
    });

    window.location.replace('/index.html');
}


form.addEventListener("submit-btn", createMessage);





// "http://localhost:3000/messages";

// function guardarDatos() {

//     var name = document.form["contact"]["fullname"].value;
//     var email = document.form["contact"]["email"].value;
//     var phone = document.form["contact"]["phone"].value;
//     var message = document.form["contact"]["message"].value;

//     var messages = { 'fullname': name, 'email': email, 'phone': phone, 'message': message, };

//     alert(datos['fullname']);
// }
// guardarDatos()