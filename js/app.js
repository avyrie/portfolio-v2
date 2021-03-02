// Mobile

function dropDown() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    };

    let y = document.getElementById("hamburger");
    if (y.className === "fa fa-bars") {
      y.className += " clickburger";
    } else {
      y.className = "fa fa-bars";
    };
}