//const form = document.querySelector("#myForm");
const ageInput = document.querySelector("#age");
const nameInput = document.querySelector("#name");
const btn = document.querySelector("#btn");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (ageInput.value.trim() === "" || nameInput.value.trim() === "") {
    alert("Please fill in all fields.");
    return;
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const age = parseInt(ageInput.value);
      if (age >= 18) {
        resolve(`Welcome, ${nameInput.value}. You can vote.`);
      } else {
        reject(`Oh sorry ${nameInput.value}. You aren't old enough.`);
      }
    }, 4000);
  });

  promise.then((result) => {
    alert(result);
  }).catch((error) => {
    alert(error);
  });
});
your JS code here. If required.
const form = document.querySelector("#myForm");
const ageInput = document.querySelector("#age");
const nameInput = document.querySelector("#name");
const btn = document.querySelector("#btn");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (ageInput.value.trim() === "" || nameInput.value.trim() === "") {
    alert("Please fill in all fields.");
    return;
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const age = parseInt(ageInput.value);
      if (age >= 18) {
        resolve(`Welcome, ${nameInput.value}. You can vote.`);
      } else {
        reject(`Oh sorry ${nameInput.value}. You aren't old enough.`);
      }
    }, 4000);
  });

  promise.then((result) => {
    alert(result);
  }).catch((error) => {
    alert(error);
  });
});
