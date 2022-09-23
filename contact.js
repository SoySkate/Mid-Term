document.getElementById("my-form").addEventListener("submit", addPost);
const url = "https://jsonplaceholder.typicode.com/comments";

function addPost(eventoSubmit) {
  eventoSubmit.preventDefault();

  // Apuntar a todos los inputs que necesitamos
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let phone = document.querySelector("#phone").value;
  let message = document.querySelector("#message").value;

  // vamos a usar el metodo fetch, llamamos a la constante url que esta afuera y le pasamos el objeto con 3 propiedades[method, headers, body]

  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json, text/plain",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      phone: phone,
      body: message,
    }),
  })
    .then((response) => response.json())
    .then((dataForm) => console.log(dataForm))
    .then(() => {
      let message = "";
      message += `
		   <div class="flex justify-center" id="message2">
		  <h6 class="bg-green-400 py-10 px-10 rounded-md text-2xl text-black font-bold" >Message Submitted</h6>
	  </div> 
		  `;
      document.querySelector("#message3").innerHTML = message;
    })
    .catch(() => {
      let message = "";
      message += `
      <div class="flex justify-center" id="message2">
      <h6 class="bg-green-400 py-10 px-10 rounded-md text-2xl text-black font-bold" >Oh, there was an error with your submit!</h6>
  </div> 
			`;
      document.querySelector("#message3").innerHTML = message;
    });

  document.querySelector("#name").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#phone").value = "";
  document.querySelector("#message").value = "";
}
