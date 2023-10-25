"use strict";
let professions = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function pro(professions) {
  let proContainer = document.querySelector(".pro-container");
  proContainer.innerHTML = "";
  professions.forEach(function (ele) {
    proContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="pro-row">
          <p class="pro-index">${ele.id}</p>
          <p class="pro-name">Name: ${ele.name}</p>
          <p class="pro-work">Profession: ${ele.profession}</p>
          <p class="pro-age">Age: ${ele.age}</p>
        </div>`
    );
  });
}

pro(professions);

let filterBtn = document.querySelector(".sub-1");
filterBtn.addEventListener("click", function () {
  let selectedProfession = document.querySelector("select").value.toLowerCase();
  if (selectedProfession) {
    let filteredProfessions = professions.filter(function (ele) {
      return ele.profession.toLowerCase() === selectedProfession;
    });
    pro(filteredProfessions);
  } else {
    alert("No Option Selected!!");
  }
});

let addUserBtn = document.querySelector(".sub-2");
addUserBtn.addEventListener("click", function () {
  let name = document.querySelector("#name").value.trim();
  let profession = document.querySelector("#proff").value.trim();
  let age = document.querySelector("#age").value.trim();
  if (name && profession && age) {
    let newId = professions.length + 1;
    let newProfession = { id: newId, name, age, profession };
    professions.push(newProfession);
    pro(professions);
    document.querySelector("#name").value = "";
    document.querySelector("#proff").value = "";
    document.querySelector("#age").value = "";
  } else {
    alert("Please fill in all fields.");
  }
});
