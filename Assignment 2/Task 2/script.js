const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {

question.addEventListener("click",()=>{

const faqItem = question.parentElement;

faqItem.classList.toggle("active");

});

});