const questionWrapper = document.querySelectorAll(".question_wrapper");
const faqLinks = document.querySelectorAll(".faq_link");
const expandBtn = document.querySelectorAll(".expand_btn");
const shrinkBtn = document.querySelectorAll(".shrink_btn");
const answerWrapper = document.querySelectorAll(".faq_answer_wrapper");

faqLinks.forEach((link) => {
  link.addEventListener("click", () => {
    let answer = link.parentElement.nextElementSibling;

    if (answer.classList.contains("active")) {
      answerWrapper.forEach((info) => info.classList.remove("active"));
      shrinkBtn.forEach((minus) => (minus.style.display = "block"));
      expandBtn.forEach((plus) => (plus.style.display = "none"));
    } else {
      answerWrapper.forEach((info) => info.classList.remove("active"));
      answer.classList.add("active");
      shrinkBtn.forEach((minus) => (minus.style.display = "none"));
      expandBtn.forEach((plus) => (plus.style.display = "block"));
      link.nextElementSibling.style.display = "none";
      link.nextElementSibling.nextElementSibling.style.display = "block";
    }
  });
});
