
//Prueba de llamada a la API
async function getWithFetch() {
    const res = await fetch("http://localhost:3000/posts");
    const finalRes = await res.json();
    console.log(finalRes);
}
getWithFetch();

//  json-server --watch db.json --port 3000

//  document.getElementById("myForm").submit();