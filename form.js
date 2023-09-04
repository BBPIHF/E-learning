const inputs = document.querySelectorAll(".input-field");
const btns = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll (".image");
const textSlider = document.querySelector(".text-group");
const signIn = document.querySelector(".sign-in");
const signUp = document.querySelector(".sign-up");


btns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
       main.classList.toggle("active");
    })
})

inputs.forEach((input)=>{
    input.addEventListener("focus", ()=>{
        input.classList.add("active");
    })

    input.addEventListener("blur", ()=>{
        if(input.value != "") return;
        input.classList.remove("active");
    })

})



function moveSlider(){
    let index = this.dataset.value;

    let currentImage = document.querySelector(`.img-${index}`);
    images.forEach(img=> img.classList.remove("show"));
    currentImage.classList.add("show");

    bullets.forEach(bull => bull.classList.remove("active"));
    this.classList.add("active");

    textSlider.style.transform = `translateY(${-(index-1) * 2.2}rem)`;
}



bullets.forEach((bullet)=>{
    bullet.addEventListener("click", moveSlider);
});


// swaping image of sign up and sign in a
signUp.addEventListener("click", ()=>{
    images.forEach (image => image.classList.remove("show"))
    images[2].classList.add("show");
});

signIn.addEventListener("click", ()=>{
    images.forEach (image => image.classList.remove("show"))
    images[0].classList.add("show");
});