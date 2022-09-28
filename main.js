let count = 1,
  s = false;

document.getElementById("btn").onclick = () => {
  let s = parseInt(document.getElementById("da").value);
  random(s);
};

let ran = parseInt(Math.random() * 10);

function random(inp) {
  console.log(ran);
  if (count < 5) {
    if (ran === inp) {
      document.getElementById("wl").innerHTML = "winner";
      setTimeout(() => {
        document.getElementById("wl").innerHTML = "Play it Again";
      }, 2000);
      ran = parseInt(Math.random() * 10);
      count = 0;
      window.ReferenceError;
    } else if (Math.abs(ran - inp) > 2) {
      document.getElementById("wl").innerHTML = "So far";
    } else {
      document.getElementById("wl").innerHTML = "so close";
    }
  } else {
    document.getElementById("wl").innerHTML = "Loser";
    ran = parseInt(Math.random() * 10);
    count = 0;
    setTimeout(() => {
      document.getElementById("wl").innerHTML = "Play it Again";
    }, 2000);
  }
  document.getElementById("da").value = "";
  count++;
}
