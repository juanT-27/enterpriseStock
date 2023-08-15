class User {
  constructor(userName, password) {
    this.userName = userName;
    this.password = password;
  }
}

let manager = new User("vivis", "bts");
console.log(manager);

const showValidations = (spanEl,clss) => {
    let spanObj= document.querySelector(spanEl)
    spanObj.classList.toggle(clss)
};

const logInValidation = (e) => {
  e.preventDefault();
  let inputPassword = document.getElementById("inputPassword").value;
  let inputName = document.getElementById("inputName").value;

  if (inputName !== manager.userName) {
    showValidations(".userError", "invisible");
  }else{
    showValidations(".correctUser", "invisible")
  }

  if (inputPassword !== manager.password) {
    showValidations(".error", "invisible");
  } else{
    showValidations(".correctPsW", "invisible")
  }

  if (inputPassword === manager.password && inputName === manager.userName) {
    window.location.href = "index.html";
  }
};

let form = document.getElementById("logIn");

form.addEventListener("submit", (e) => {
  logInValidation(e);
});
