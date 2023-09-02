//animation
 const links = document.querySelector(".links")
 const hambuger = document.querySelector(".hamburger").addEventListener("click", ()=>{
   links.classList.toggle("show")
 })
const observer = new IntersectionObserver((items)=>{
   items.forEach((item)=>{
     if(item.isIntersecting){
       item.target.classList.add("show");
     }else{
       item.target.classList.remove("show");
     }
   });
 });

const elementObs = document.querySelectorAll(".js-box");
elementObs.forEach((element)=>{
observer.observe(element);
})






//review

const review = [
    {
        img: "images/trainer5.jpg",
        name: "Inaolaji Tope",
        desc: "As an educator, I appreciate the flexibility and resources offered by this e-learning platform. It allows me to create dynamic lessons, connect with my students easily, and track their progress. It's made teaching a joy!"

    },

    {
        img: "images/trainer.jpg",
        name: "John George",
        desc: "I've been using this e-learning platform for the past year, and it's been a game-changer for my education. The interactive courses and engaging instructors have made learning a breeze. I can't recommend it enough!"

    },

   {
        img: "images/trainer6.jpg",
        name: "Olawuyi Ifeoluwa",
        desc: "I'm so glad I found this e-learning platform for my kids. It's a safe and effective way for them to continue their education from home. The platform's content is not only educational but also fun, keeping my children motivated to learn."

    },

    {
        img: "images/trainer.png",
        name: "Aiyegbokiti Sheu",
        desc: "I needed to upskill for my career, and this e-learning platform was the perfect solution. The variety of courses and certifications available helped me improve my skills, making me more competitive in the job market. Thank you!"

    },


];

const boxWrapper = document.querySelector('.box-wrapper');

let accumulator = '';

review.forEach(function(item){
   accumulator+= `<div class="box jsreview">
   <div class="inner-wrapper">
   <p><span class="fas fa-quote-left"></span><br>${item.desc}.<span class="fas fa-quote-right"></span></p>
   <img src=${item.img} class="user" alt="">
   <h3>${item.name}</h3>
   <div class="stars">
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>
       <i class="fas fa-star-half-alt"></i>
   </div>
   </div>
</div>`
})

 boxWrapper.innerHTML = accumulator;



const chevronRigth = document.querySelector('.fa-chevron-right');
const chevronLeft = document.querySelector('.fa-chevron-left');


let count = 0;
let maxNum = 4;

chevronRigth.addEventListener('click', ()=>{
        if (count === 3) {
            return;
        } 
        count++;
        boxWrapper.style.transform = `translateX(-${count * 101.5}vw)`
        console.log(count);

    
})


chevronLeft.addEventListener('click', ()=>{   
        
        if (count === 0) {
            return;
        } 
        count--;
        console.log(count);
        boxWrapper.style.transform = `translateX(-${count * 100}vw)`

})


const preloader = document.querySelector(".preloader");

window.addEventListener("load", function(){
  preloader.classList.add("hide-preloader");
})

