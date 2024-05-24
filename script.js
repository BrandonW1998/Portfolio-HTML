function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var followCursor = (function () {
  var image = document.createElement("img");
  image.src = "./assets/pixel_me-down.png";
  image.style.position = "absolute";
  image.style.left = 100 + "px";
  image.style.top = 100 + "px";

  return {
    init: function () {
      document.body.appendChild(image);
    },

    run: function (e) {
      var e = e;
      console.log(e.clientY);
      let start = Date.now(); // remember start time

      let timer = setInterval(function () {
        // how much time passed from the start?
        let timePassed = Date.now() - start;

        if (timePassed >= 2000) {
          clearInterval(timer); // finish the animation after 2 seconds
          return;
        }

        // draw the animation at the moment timePassed
        draw(timePassed);
      }, 20);

      // as timePassed goes from 0 to 2000
      // left gets values from 0px to 400px
      function draw(timePassed) {
        var rightX = parseInt(image.style.left.split("p")[0]) + 10;
        var leftX = parseInt(image.style.left.split("p")[0]) - 10;
        var downY = parseInt(image.style.top.split("p")[0]) + 10;
        var upY = parseInt(image.style.top.split("p")[0]) - 10;
        if (rightX < e.clientX) {
          image.style.left = rightX + "px";
        } else if (leftX > e.clientX) {
          image.style.left = leftX + "px";
        } else if (downY < e.clientY) {
          image.style.top = downY + "px";
        } else if (upY > e.clientY) {
          image.style.top = upY + "px";
        }
      }
    },
  };
})();

window.onload = function () {
  followCursor.init();
  document.body.onclick = followCursor.run;
};
