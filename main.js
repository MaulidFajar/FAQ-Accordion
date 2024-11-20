const faqLinks = document.querySelectorAll(".faq_link");
const answerWrappers = document.querySelectorAll(".faq_answer_wrapper");
const expandBtns = document.querySelectorAll(".expand_btn");
const shrinkBtns = document.querySelectorAll(".shrink_btn");

faqLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const answer = link.parentElement.nextElementSibling;

    const isActive = answer.classList.toggle("active");

    if (isActive) {
      toggleFaqLinkVisibility(answer, isActive);
      link.nextElementSibling.style.display = "none";
      link.nextElementSibling.nextElementSibling.style.display = "block";
    } else {
      link.nextElementSibling.style.display = "block";
      link.nextElementSibling.nextElementSibling.style.display = "none";
    }
  });
});

expandBtns.forEach((expand) => {
  expand.addEventListener("click", () => {
    const answer = expand.parentElement.nextElementSibling;

    const isActive = answer.classList.toggle("active");

    toggleFaqLinkVisibility(answer, isActive);

    if (isActive) {
      expand.style.display = "none";
      expand.nextElementSibling.style.display = "block";
    } else {
      expand.style.display = "block";
      expand.nextElementSibling.style.display = "none";
    }
  });
});

shrinkBtns.forEach((shrink) => {
  shrink.addEventListener("click", () => {
    const answer = shrink.parentElement.nextElementSibling;

    const isActive = answer.classList.toggle("active");

    toggleShrinkButtonVisibility(answer, isActive);

    if (isActive) {
      shrink.previousElementSibling.style.display = "none";
      shrink.style.display = "block";
    } else {
      shrink.previousElementSibling.style.display = "block";
      shrink.style.display = "none";
    }
  });
});

function toggleFaqLinkVisibility(answer, isActive) {
  shrinkBtns.forEach(
    (shrink) => (shrink.style.display = isActive ? "none" : "block")
  );
  expandBtns.forEach(
    (expand) => (expand.style.display = isActive ? "block" : "none")
  );

  answerWrappers.forEach((info) => {
    if (info !== answer) {
      info.classList.remove("active");
    }
  });
}

function toggleShrinkButtonVisibility(answer, isActive) {
  shrinkBtns.forEach(
    (shrink) => (shrink.style.display = isActive ? "block" : "none")
  );
  expandBtns.forEach(
    (expand) => (expand.style.display = isActive ? "none" : "block")
  );

  answerWrappers.forEach((info) => {
    if (info !== answer) {
      info.classList.remove("active");
    }
  });
}
