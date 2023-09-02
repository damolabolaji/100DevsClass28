//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      //   for (let i = 0; i < data.subclasses.length; i++) {
      //     const list = document.createElement("li");

      //     list.appendChild(document.createTextNode(data.subclasses[i].name));
      //     document.querySelector("ul").appendChild(list);
      //   }

      data.subclasses.forEach((element) => {
        const list = document.createElement("li");
        list.appendChild(document.createTextNode(element.name)); // or list.textContent = element.name
        document.querySelector("ul").appendChild(list);
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
