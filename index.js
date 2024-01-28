
const questionbank = [];
  questionbank[1] = "question1";
  questionbank[2] = "question2";
  questionbank[3] = "question3";
  questionbank[4] = "question4";
  questionbank[5] = "question5";
  questionbank[6] = "question6";

let value = 360;

$(".spinBtn").on("click",function(){
  value += Math.ceil(Math.random()*3600)*2;

  $(".wheel").css("transform", "rotate(" + value + "deg)");

  while (value >= 360) {
    value = value -360;
  }

  setTimeout(() => {
    if (value > 315 || value <= 15) {
      $(".question").text(questionbank[1]);
    }
    else if (value > 255 && value <= 315) {
      $(".question").text(questionbank[2]);
    }
    else if (value > 195 && value <= 255) {
      $(".question").text(questionbank[3]);
    }
    else if (value > 135 && value <= 195) {
      $(".question").text(questionbank[4]);
    }
    else if (value > 75 && value <= 135) {
      $(".question").text(questionbank[5]);
    }
    else if (value > 15 && value <= 75) {
      $(".question").text(questionbank[6]);
    }

  }, 8000)

})


for (let i=1; i<7; i++) {
  $("#q" + i).on("click",function(){
    $(".question").text(questionbank[i]);
  })
}
