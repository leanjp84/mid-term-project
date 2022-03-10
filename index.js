
// "http://localhost:3000/posts";


// async function getPosts() {
//     const res = await fetch("http://localhost:3000/posts");
//     const finalRes = await res.json();
//     console.log(finalRes);
//}
// getPosts()
// async function showProjects(myData) {
//     const projectTitle = document.querySelector('project-title1');
//     const projectDescription = document.querySelector('description1');

//     for (let i = 0; i > myData.length; i++) {
//         projectTitle.innerHTML += myData[0].title;
//         projectDescription.innerHTML += myData[0].description;
//     };
// }





///////// FUNCIONA 

const container = document.querySelector('.container-projects');

const renderPosts = async () => {
    let uri = "http://localhost:3000/posts";
    // SORT METHOD "hhttp://localhost:3000/posts?_sort=likes&order=desc"

    const res = await fetch(uri);
    const posts = await res.json();
    //console.log(posts);

    let template = " ";
    posts.forEach(post => {
        template += `
        <div class="project-card project-img">
            <img src="${post.img}">
            <div class="carta1">
                 <div class="project-text">
                        <p id="project-title1" class="body-medium">${post.title}</p>
                        <p id="description1 " class="headline-regular" ">${post.description}</p>
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



const container2 = document.querySelector('.container-projects2');

const renderPosts2 = async () => {
    let uri2 = "http://localhost:3000/posts2";

    const res2 = await fetch(uri2);
    const posts2 = await res2.json();
    //console.log(posts2);

    let template2 = " ";
    posts2.forEach(post => {
        template2 += `
        <div class="project-card project-img">
            <img src="${post.img}">
            <div class="carta1">
                 <div class="project-text">
                        <p id="project-title1" class="body-medium">${post.title}</p>
                        <p id="description1 " class="headline-regular" ">${post.description}</p>
                        <br><br>
                        <a class=" headline-regular" href="">Learn More</a>
                    </div>
            </div>
         </div>
        `
    });
    container2.innerHTML = template2;
}

window.addEventListener('DOMContentLoaded', () => renderPosts2());


//  json-server --watch db.json --port 3000


// const form = document.querySelector("form");

// const createMessage = async (e) => {
//     e.preventDefault();

//     const doc = {
//         fullname: form.fullname.valueOf,
//         email: form.email.valueOf,
//         phone: form.phone.valueOf,
//         message: form.message.valueOf,
//     }
//     await fetch("http://localhost:3000/messages", {
//         method: "POST",
//         body: JSON.stringify(doc),
//         headers: { 'Content-Type': 'application/json' }
//     });

//     window.location.replace('/index.html');
// }


// form.addEventListener("submit-btn", createMessage);

