function scriptLoader(path, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.src = path;
  script.onload = function() {
    if (typeof callback == "function") {
      callback();
    }
  };
  try {
    var scriptOne = document.getElementsByTagName("script")[0];
    scriptOne.parentNode.insertBefore(script, scriptOne);
  } catch (e) {
    document.getElementsByTagName("head")[0].appendChild(script);
  }
}

scriptLoader("src/js/globalFunctions.js");
scriptLoader("src/js/popupController.js");
scriptLoader("src/js/modalController.js");
scriptLoader("src/js/tableController.js");
scriptLoader("src/js/testController.js");
scriptLoader("src/js/scoreController.js");
scriptLoader("src/js/display.js");

scriptLoader("src/api/register.js");
scriptLoader("src/api/login.js");
scriptLoader("src/api/list.js");
scriptLoader("src/api/words.js");
scriptLoader("src/api/score.js");
