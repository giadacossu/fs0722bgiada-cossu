fetch("users.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    classe = json;
    console.log(classe);



    document.querySelector("#john").innerHTML =
      classe[0].firstName + " " + classe[0].lastName + " ";
    document.querySelector("#emailj").innerHTML = classe[0].email;
    document.querySelector("#imgj").innerHTML = `<img class="bg-light border rounded-circle" src ="img/male.png"></img>`;




    document.querySelector("#jane").innerHTML =
      classe[1].firstName + " " + classe[1].lastName;
    document.querySelector("#emailje").innerHTML = classe[1].email;
    document.querySelector("#imgje").innerHTML = `<img class="bg-light border rounded-circle" src ="img/female.png"></img>`;
  });
