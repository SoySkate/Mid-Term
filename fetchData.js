const url = "https://jsonplaceholder.typicode.com/posts?_limit=3";

async function dataJson() {
  await fetch(url)
    .then((argumento) => argumento.json())
    .then((argumento2) => {
      let dataRecieve = "";
      argumento2.forEach((eachPost) => {
        dataRecieve += `
              <div class="mx-4 pb-10 mb-8 bg-white">
              <img class="object-fill h-[60%] w-full mb-10" src="/projects/${
                eachPost.id
              }.jpeg" alt="abstract img">
              <div class="ml-8">
              <h2 class="my-8 text-4xl text-[#292e47] font-semibold">${eachPost.title.slice(
                0,
                20
              )}</h2>
              <p class="mb-8 text-2xl text-[#292e47]">${eachPost.body.slice(
                0,
                20
              )}</p>
              <a href="/projects/${
                eachPost.id
              }.html" class="text-2xl text-blue-700 font-semibold">Learn More</a>
              </div>
          </div>
              `;
      });
      document.querySelector("#project-container").innerHTML = dataRecieve;
    })
    .catch((argumentoError) => {
      console.log("heyo", argumentoError);
    });
}
dataJson();
