
var winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

var winningCombination2 = [];

$(".box").on("click",function(){

  // if (this.innerHTML.trim()=="") {
      this.innerHTML = "<img src='Icon/stamp.png' alt=''>"
  // }
  // else {
  //     this.innerHTML = ""
  // }

  if (matchWin()) {
    if ($("#F").hasClass("success") && $("#B").hasClass("success") && !$("#T").hasClass("success")) {
      $("#T").addClass("success");
    }
    else if ($("#F").hasClass("success") && !($("#B").hasClass("success"))) {
      $("#B").addClass("success");
    }
    else {
      $("#F").addClass("success");
    }
  };

  function matchWin() {
    return winningCombination.some(combination => {
      let ite = 0;
      combination.forEach(index => {
        if ($(".box")[index].innerHTML !== "") ite++;
      })

      if (ite==3) {
        let done = winningCombination.indexOf(combination);
        winningCombination2.push(winningCombination[done]);
        winningCombination.splice(done,1);
        $("#" + combination[0]).addClass("completeLine");
        $("#" + combination[1]).addClass("completeLine");
        $("#" + combination[2]).addClass("completeLine");
      }

      return combination.every(index => {
        return $(".box")[index].innerHTML !== ""
      })
    })
  }
  console.log(winningCombination2);
})

let value = Math.ceil(Math.random()*1000);
$(".spinBtn").on("click",function(){
  $(".wheel").css("transform", "rotate(" + value + "deg)");
  value += Math.ceil(Math.random()*1000);
})

$(".sectionTitle").on("click",function() {
  for (let b = 0; b < winningCombination2.length; b++) {
    winningCombination.push(winningCombination2[b]);
  };
  $(".box").html("");
  $(".box").removeClass("completeLine");
  $("#F").removeClass("success");
  $("#B").removeClass("success");
  $("#T").removeClass("success");
})
