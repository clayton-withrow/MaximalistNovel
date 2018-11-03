//Variable Declaration
var VCscore = 0;
var PIscore = 0;
var CEscore = 0;
var HIscore = 0;
var HUscore = 0;
var VerbalInput = document.getElementsByName("VerbalOptions");
var PsychInput = document.getElementsByName("PsychOptions");
var CultInput = document.getElementsByName("CultOptions");
var HistInput = document.getElementsByName("HistOptions");
var HumorInput = document.getElementsByName("HumorOptions");

//Verbal Input
VerbalInput.forEach(function(element){
  element.addEventListener("change", function() {
    for (var i=0; i<VerbalInput.length; i++) {
      if(VerbalInput[i].checked){
        VCscore = i+1;
        console.log(VCscore);
        break;
      }
    }
  })
}
)

//Psychological Input
PsychInput.forEach(function(element){
  element.addEventListener("change", function() {
    for (var i=0; i<PsychInput.length; i++) {
      if(PsychInput[i].checked){
        PIscore = i+1;
        console.log(PIscore);
        break;
      }
    }
  })
}
)

//Cultural Input
CultInput.forEach(function(element){
  element.addEventListener("change", function() {
    for (var i=0; i<CultInput.length; i++) {
      if(CultInput[i].checked){
        CEscore = i+1;
        console.log(CEscore);
        break;
      }
    }
  })
}
)

//Historical Input
HistInput.forEach(function(element){
  element.addEventListener("change", function() {
    for (var i=0; i<HistInput.length; i++) {
      if(HistInput[i].checked){
        HIscore = i+1;
        console.log(HIscore);
        break;
      }
    }
  })
}
)

//Humor Input
HumorInput.forEach(function(element){
  element.addEventListener("change", function() {
    for (var i=0; i<HumorInput.length; i++) {
      if(HumorInput[i].checked){
        HUscore = i+1;
        console.log(HUscore);
        break;
      }
    }
  })
}
)

//Book Scores
var GRscore = VCscore + HIscore + HUscore;
var IJscore = VCscore + HUscore + PIscore;
var UNscore = HUscore + HIscore + PIscore;
var WTscore = CEscore + HIscore + PIscore;
var TCscore = HUscore + PIscore + VCscore;
var RBscore = CEscore + PIscore + HUscore;
var DCscore = VCscore + CEscore;
