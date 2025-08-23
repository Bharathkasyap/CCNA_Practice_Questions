function toggleAnswer(id) {
  const answer = document.getElementById(id);
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
}

function toggleAll(show) {
  const answers = document.querySelectorAll(".answer");
  answers.forEach(ans => ans.style.display = show ? "block" : "none");
}
