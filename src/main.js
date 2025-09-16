import "./style.css";
const btn = document.querySelector("#btn");
const alltextcont = document.querySelectorAll(".text-cont");
const inputbox= document.querySelector(".input");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  alltextcont.forEach((el) => {
    el.classList.toggle("bg-gray-800");
  });
  inputbox.classList.toggle("bg-gray-800");
});

//for Searching country

const search = document.querySelector(".searchbox");
const box = document.querySelectorAll(".boxes");

search.addEventListener("input",()=>{
    const query=search.value.trim().toLowerCase();
    
    box.forEach(conbox => {
        if(conbox.textContent.toLowerCase().includes(query))
        {
            conbox.style.display="grid";
        }
        else{
            conbox.style.display="none";
        }
    });
    if(query==="")
    {
        box.forEach(conbox => conbox.style.display="grid");
    }
});
