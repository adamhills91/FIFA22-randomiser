const submit = document.getElementById("submit");
let selectedTeams = [];


submit.addEventListener("click", function () {
  // when user clicks button, the function begins
  selectedTeams = [];
  let ratings = [];
  // reset selected teams and ratings every time submit is clicked
  let players = document.getElementById("names").value.split(", ");
  // separate names into array
  const ratingSelection = document.querySelectorAll("input[type='checkbox']:checked");
  const internationalSelection = document.querySelector("input[type='radio']:checked").value;

  if (players == "") {
    alert("Please enter at least one name");
  } else {
    // if names are entered, make array of selected ratings
    for (let i = 0; i < ratingSelection.length; i++) {
      ratings[i] = ratingSelection[i].value;
    }

    selectTeams(ratings, internationalSelection);

    if (selectedTeams.length < players.length) {
      alert("Not enough teams selected, please increase selection of ratings");
      return;
    }

    players = shuffle(players); //randomise player order
    selectedTeams = shuffle(selectedTeams); //randomise team order

    showResults(players);
  }
});

function selectTeams(ratings, internationalSelection) {
  for (let i of teams) {
    // loop through all teams
    for (let j = 0; j < ratings.length; j++) {
      // loop through selected ratings and add teams to array if their ratings match
      if (internationalSelection == "yes") {
        if (ratings[0] == "all" || i.rating == ratings[j]) {
          selectedTeams.push(i);
        }
      } else if (internationalSelection == "no" && i.country != "International") {
        if (ratings[0] == "all" || i.rating == ratings[j]) {
          selectedTeams.push(i);
        }
      } else if (internationalSelection == "only" && i.country == "International") {
        if (ratings[0] == "all" || i.rating == ratings[j]) {
          selectedTeams.push(i);
        }
      }
    }
  }
};

// Function to shuffle name and team arrays 
function shuffle(arr) {
  for (let i = (arr.length - 1); i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

function showResults(players) {
  // Get the modal

  const modal = document.getElementById("myModal");
  const table = document.getElementById("results");
  table.innerHTML = "<tr><th>Player</th><th>Team</th></tr>";

  formTable(players, table);

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  // When the user presses Esc, close the modal
  window.addEventListener("keydown", e => {
    if (event.keyCode === 27) {
      modal.style.display = "none";
    }
  });
};

function formTable(players, table) {
  for (i = 0; i < players.length; i++) {
    table.innerHTML += "<tr><td><h3>" + players[i] + "</h3></td>" + "<td><img src=\"" + selectedTeams[i].image + "\"><h4>" + selectedTeams[i].name + "</h4><h5>" + selectedTeams[i].country + "</h5><p>" + selectedTeams[i].league + "</p></td></tr>";
  }
}

// Function to unselect "all" checkbox when any other is selected 
function uncheckAll() {
  document.getElementById("all").checked = false;
};

// Function to unselect all other checkboxes when all checkbox is selected 
function uncheckOthers() {
  const checks = document.getElementsByClassName("notAll");
  for (let i = 0; i < checks.length; i++) {
    checks[i].checked = false;
  }
};