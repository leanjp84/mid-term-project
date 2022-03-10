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
