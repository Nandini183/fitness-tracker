const form = document.getElementById("workout-form");
const workoutList = document.getElementById("workout-list");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 
  const workout = document.getElementById("workout").value;
  const duration = document.getElementById("duration").value;

  if (workout === "" || duration === "") {
    alert("Please fill in both workout and duration.");
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = `${workout} - ${duration} minutes`;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.style.border = "none";
  deleteBtn.style.background = "transparent";
  deleteBtn.style.cursor = "pointer";
  deleteBtn.onclick = function () {
    listItem.remove();
  };

  listItem.appendChild(deleteBtn);

  workoutList.appendChild(listItem);

  alert("Workout added!");

  form.reset();
});
