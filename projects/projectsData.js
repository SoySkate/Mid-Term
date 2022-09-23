const url = "https://jsonplaceholder.typicode.com/posts?_limit=4";

async function dataJson() {
  try {
    const getUrl = await fetch(url);
    const getData = await getUrl.json();
    console.log("heyooo", getData);
    let dataRecieve = "";
    dataRecieve += `
          <h1 class="text-7xl my-20 mx-40 font-bold text-[#292e47] ">${getData[0].title.slice(
            0,
            8
          )}</h1>
          <div class="mx-40 pb-36 mb-8">
    <div class="flex justify-center">
          <img class=" mb-16 w-screen h-96" src="${
            getData[0].id
          }.jpeg"></img></div>
          <div class="">
          <p class="mb-8 text-2xl text-[#292e47]">${
            getData[0].body
          }</p></div></div>
          `;
    const slicedData = getData.slice(1, 4);

    let dataR2 = "";
    slicedData.forEach((position) => {
      dataR2 += `
          <div class="mx-10 pb-36 mb-8 bg-white">
            <img class="object-fill h-[60%] w-full mb-10" src="/projects/${
              position.id
            }.jpeg" alt="abstract img">
              <div class="ml-8">
              <h2 class="my-8 text-4xl text-[#292e47] font-semibold">${
                position.title.split(" ")[0] +
                " " +
                position.title.split(" ")[1]
              }</h2>
              <p class="mb-8 text-2xl text-[#292e47]">${position.body.slice(
                0,
                20
              )}</p>
              <a href="/projects/${
                position.id
              }.html" class="text-2xl text-blue-700 font-semibold" target="_blank" >Learn More</a>
              </div>
          </div>
          `;
    });
    document.querySelector("#fetchHtml").innerHTML = dataRecieve;
    document.querySelector("#recentP1").innerHTML = dataR2;
  } catch (error) {
    console.log(`Hola este es un error`, error);
  }
}
dataJson();
