const form = document.querySelector("#contactForm");
form.addEventListener("submit", function(e){
     e.preventDefault();

     const formData = new FormData(this);

     const data = {};
        formData.forEach((value, key) => {
        data[key] = value;
    });

    form.reset();

    console.log("POST data received in JS:", data);
    showAlert(document.querySelector(".alert"));
})

//function for showing and removing the alert
const showAlert = (elem) =>{
    elem.classList.remove("hidden");
    
    setTimeout(() => {
        elem.classList.add("hidden");
    }, 5000);
}