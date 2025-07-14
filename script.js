const form = document.getElementById("workout-form");
const workoutList = document.getElementById("workout-list");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const workout = document.getElementById("workout").value;
  const duration = document.getElementById("duration").value;

  const listItem = document.createElement("li");
  listItem.textContent = workout + " - " + duration + " minutes";

  workoutList.appendChild(listItem);

  form.reset();
});
