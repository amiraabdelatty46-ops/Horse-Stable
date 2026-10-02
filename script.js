//burger
let burger = document.querySelector('.menu-toggle');
let navLinks = document.querySelector('.nav-links');
if (burger) {
    burger.addEventListener('click', function(){ 
        navLinks.classList.toggle('active');
    }
)};

//الفورم
let booking = document.querySelector('.bookingForm');
let name=document.querySelector('.userName')
let email = document.querySelector('.userEmail')
booking.addEventListener('submit',function(e){
    e.preventDefault();
    if(name.value=="" && email.value==""){
         alert("Please fill all the fields / من فضلك أكمل البيانات");
    }
    else{
        alert(`Thank you ${name.value}! We will contact you soon.`);
    }
})





