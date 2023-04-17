function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#/", "");

  if (pageID == "") {
    model.placeholder("home");
    console.log("Grabbing:" + pageID);
  } else {
    model.placeholder(pageID);
    console.log("Grabbing:" + pageID);
  }

  $(window).scrollTop(0);
}

function initListeners() {
  $(window).on("hashchange", route);
  $("a").click(function (e) {
    console.log("clicked");
    // route();
  });
  route();
}

//this is the change day function that is on the Riley TV page.
function changeday() {
  const events = [
    "No Event",
    "Picture Bingo",
    "Tech Time with Jacob",
    "Picture Bingo",
    "Craft Time with Kim",
    "Surprise Eggs",
    "No Event",
  ];
  const eventsDes = [
    "There will be no episode today!",
    "Ask your child life specialist for today's bingo sheet and call in when you win.",
    "Learn about a new STEM topic each week with crafts, 3d printing and Minecraft.",
    "Ask your child life specialist for today's bingo sheet and call in when you win.",
    "Follow along with the provided craft kit or just watch for fun.",
    "Call in to pick an egg and win a bag full of prizes!",
    "There will be no episode today!",
  ];

  const bg = [
    "linear-gradient(to right,rgba(31, 2, 117, 0.9),rgba(195, 0, 255, 0.7)), url(../css/img/trees.jpg)",
    "linear-gradient(to right,rgba(31, 2, 117, 0.9),rgba(195, 0, 255, 0.7)), url(../css/img/bingo.jpg)",
    "linear-gradient(to right,rgba(31, 2, 117, 0.9),rgba(195, 0, 255, 0.7)), url(../css/img/tech.jpg)",
    "linear-gradient(to right,rgba(31, 2, 117, 0.9),rgba(195, 0, 255, 0.7)), url(../css/img/games.jpg)",
    "linear-gradient(to right,rgba(31, 2, 117, 0.9),rgba(195, 0, 255, 0.7)), url(../css/img/crafts.jpg)",
    "linear-gradient(to right,rgba(31, 2, 117, 0.9),rgba(195, 0, 255, 0.7)), url(../css/img/easter.jpg)",
    "linear-gradient(to right,rgba(31, 2, 117, 0.9),rgba(195, 0, 255, 0.7)), url(../css/img/pool.jpg)",
  ];

  const eventType = document.getElementById("eventType");
  const eventDesType = document.getElementById("eventDesType");
  const eventBG = document.getElementById("eventbg");

  const dayref = document.getElementById("day");
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dateToday = new Date();
  let dayToday = dateToday.getDay();

  //display day of week
  dayref.innerHTML = `${daysOfWeek[dayToday]}'s Event`;

  const eventDay = events[dayToday];
  const eventDesDay = eventsDes[dayToday];
  const eventbgday = bg[dayToday];

  //display the day event
  eventType.innerHTML = eventDay;

  //display the day event description
  eventDesType.innerHTML = eventDesDay;

  //change background style
  eventBG.style.backgroundImage = eventbgday;
}

//checking every second
setInterval(changeday, 1000);

$(document).ready(function () {
  initListeners();
});
