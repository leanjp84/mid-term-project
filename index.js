
// "http://localhost:3000/posts";

////////////////////////////// INDEX PROJECT CARDS

const container = document.querySelector('.container-projects');

const renderPosts = async () => {
    let uri = "https://marketplace.freelancewebdesign.online/wp-json/wp/v2/projects";
    // SORT METHOD "hhttp://localhost:3000/posts?_sort=likes&order=desc"

    const res = await fetch(uri);
    const posts = await res.json();
    //console.log(posts);

    let template = " ";
    posts.forEach(post => {
        template += `
        <div class="project-card project-img">
            <img src="${post.better_featured_image.source_url}">
            <div class="carta1">
                 <div class="project-text">
                        <p id="project-title1" class="body-medium">${post.title.rendered}</p>
                        <p id="description1 " class="headline-regular" ">${post.acf.description}</p>
                        <br><br>
                        <a class=" headline-regular" href="">Learn More</a>
                    </div>
            </div>
         </div>
        `
    });
    container.innerHTML = template;
}
window.addEventListener('DOMContentLoaded', () => renderPosts());


///////////////////////////////////////// FORM POST NO FUNCIONA

// const form = document.querySelector("contact-form");

// const createMessage = async (e) => {
//     e.preventDefault();

//     const doc = {
//         name: document.querySelector("fullname").value,
//         email: document.querySelector("email").value,
//         phone: document.querySelector("phone").value,
//         message: document.querySelector("message").value,
//     }
//     await fetch("http://localhost:3000/messages", {
//         method: "POST",
//         body: JSON.stringify(doc),
//         headers: { 'Content-Type': 'application/json' }
//     });

//     alert("Thanks for your message! We'll respond ASAP");
//     location.reload();

// }

// form.addEventListener('submit-btn', createMessage);


///////////////////////////////////////// FORM POST TAMPOCO FUNCIONA
async function createMessage2(e) {
    e.preventDefault();
    const doc = {
        name: document.querySelector("#fullname").value,
        email: document.querySelector("#email").value,
        phone: document.querySelector("#phone").value,
        message: document.querySelector("#message").value,
    }
    const messageInfo = await fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(doc)
    });
    const finalInfo = await messageInfo.json()
    console.log(finalInfo)
}
document.addEventListener('submit-btn', createMessage2);
