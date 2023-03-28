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
}

function initListeners() {
  $(window).on("hashchange", route);
  $("a").click(function (e) {
    console.log("clicked");
    // route();
  });
  route();
}

$(document).ready(function () {
  initListeners();
});
