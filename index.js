const toggle=document.getElementById("toggle")
const open=document.getElementById("open")
const close=document.getElementById("close")
const modal=document.getElementById("modal")
const modalForm = document.querySelector(".modal-form");
//Toggle nav

toggle.addEventListener("click",()=>{
    document.body.classList.toggle("show-nav")
})



// show modal

open.addEventListener("click", ()=>{
    modal.classList.add("show-modal")
})

//hide model


close.addEventListener("click",()=>{
    modal.classList.remove("show-modal")
})

//hide modal outside click

window.addEventListener("click", (e)=>{
    e.target==modal?modal.classList.remove("show-modal"):false;
})


const name=document.getElementById("name")
const email=document.getElementById("email")
const password=document.getElementById("password")
const password2=document.getElementById("password")
const submitBtn = document.querySelector(".submit-btn");
const error=document.getElementById("error")
submitBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission

  // Check if the form is valid (all input fields have a value)
  const inputFields = modalForm.querySelectorAll("input");
  let isFormValid = true;

  inputFields.forEach((input) => {
    if (input.value.trim() === "") {
      isFormValid = false;
    }
  });

  // If the form is valid, hide the modal and show header and container
  if (isFormValid) {
    modal.classList.remove("show-modal");
    document.body.classList.remove("show-nav");
    const header = document.querySelector("header");
    const container = document.querySelector(".container");
    header.style.display = "block";
    container.style.display = "block";
    name.value="";
    email.value="";
    password.value="";
    password2.value="";
    error.textContent=""
  }else{
error.textContent="Please fill all the fields"
  }
});