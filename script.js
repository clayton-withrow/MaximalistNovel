<!-- Variable Declaration -->
var VCscore = 0;
var PIscore = 0;
var CEscore = 0;
var HIscore = 0;
var HUscore = 0;
var Verbal1Input = document.getElementsByName("VerbalOptions");
var Verbal2Input = document.getElementsByName("VerbalOptions");
var Verbal3Input = document.getElementsByName("VerbalOptions");
var Verbal4Input = document.getElementsByName("VerbalOptions");
var Verbal5Input = document.getElementsByName("VerbalOptions");
var Psych1Input = document.getElementsByName("PsychOptions");
var Psych2Input = document.getElementsByName("PsychOptions");
var Psych3Input = document.getElementsByName("PsychOptions");
var Psych4Input = document.getElementsByName("PsychOptions");
var Psych5Input = document.getElementsByName("PsychOptions");
var Cult1Input = document.getElementsByName("CultOptions");
var Cult2Input = document.getElementsByName("CultOptions");
var Cult3Input = document.getElementsByName("CultOptions");
var Cult4Input = document.getElementsByName("CultOptions");
var Cult5Input = document.getElementsByName("CultOptions");
var Hist1Input = document.getElementsByName("HistOptions");
var Hist2Input = document.getElementsByName("HistOptions");
var Hist3Input = document.getElementsByName("HistOptions");
var Hist4Input = document.getElementsByName("HistOptions");
var Hist5Input = document.getElementsByName("HistOptions");
var Humor1Input = document.getElementsByName("HumorOptions");
var Humor2Input = document.getElementsByName("HumorOptions");
var Humor3Input = document.getElementsByName("HumorOptions");
var Humor4Input = document.getElementsByName("HumorOptions");
var Humor5Input = document.getElementsByName("HumorOptions");

<!-- Verbal Input -->
Verbal1.addEventListener("click", function() {
  for (var i=0; i<Verbal1Input.length; i++) {
    if(Verbal1Input[i].checked){
      VCscore = 1;
      console.log(VCscore);
      break;
    }
  }
})

Verbal2.addEventListener("click", function() {
  for (var i=0; i<Verbal2Input.length; i++) {
    if(Verbal2Input[i].checked){
      VCscore = 2;
      console.log(VCscore);
      break;
    }
  }
})

Verbal3.addEventListener("click", function() {
  for (var i=0; i<Verbal3Input.length; i++) {
    if(Verbal3Input[i].checked){
      VCscore = 3;
      console.log(VCscore);
      break;
    }
  }
})

Verbal4.addEventListener("click", function() {
  for (var i=0; i<Verbal4Input.length; i++) {
    if(Verbal4Input[i].checked){
      VCscore = 4;
      console.log(VCscore);
      break;
    }
  }
})

Verbal5.addEventListener("click", function() {
  for (var i=0; i<Verbal5Input.length; i++) {
    if(Verbal5Input[i].checked){
      VCscore = 5;
      console.log(VCscore);
      break;
    }
  }
})

<!-- Psychological Input -->
Psych1.addEventListener("click", function() {
  for (var i=0; i<Psych1Input.length; i++) {
    if(Psych1Input[i].checked){
      PIscore = 1;
      console.log(PIscore);
      break;
    }
  }
})

Psych2.addEventListener("click", function() {
  for (var i=0; i<Psych2Input.length; i++) {
    if(Psych2Input[i].checked){
      PIscore = 2;
      console.log(PIscore);
      break;
    }
  }
})

Psych3.addEventListener("click", function() {
  for (var i=0; i<Psych3Input.length; i++) {
    if(Psych3Input[i].checked){
      PIscore = 3;
      console.log(PIscore);
      break;
    }
  }
})

Psych4.addEventListener("click", function() {
  for (var i=0; i<Psych4Input.length; i++) {
    if(Psych4Input[i].checked){
      PIscore = 4;
      console.log(PIscore);
      break;
    }
  }
})

Psych5.addEventListener("click", function() {
  for (var i=0; i<Psych5Input.length; i++) {
    if(Psych5Input[i].checked){
      PIscore = 5;
      console.log(PIscore);
      break;
    }
  }
})

<!-- Cultural Input -->
Cult1.addEventListener("click", function() {
  for (var i=0; i<Cult1Input.length; i++) {
    if(Cult1Input[i].checked){
      CEscore = 1;
      console.log(CEscore);
      break;
    }
  }
})

Cult2.addEventListener("click", function() {
  for (var i=0; i<Cult2Input.length; i++) {
    if(Cult2Input[i].checked){
      CEscore = 2;
      console.log(CEscore);
      break;
    }
  }
})

Cult3.addEventListener("click", function() {
  for (var i=0; i<Cult3Input.length; i++) {
    if(Cult3Input[i].checked){
      CEscore = 3;
      console.log(CEscore);
      break;
    }
  }
})

Cult4.addEventListener("click", function() {
  for (var i=0; i<Cult4Input.length; i++) {
    if(Cult4Input[i].checked){
      CEscore = 4;
      console.log(CEscore);
      break;
    }
  }
})

Cult5.addEventListener("click", function() {
  for (var i=0; i<Cult5Input.length; i++) {
    if(Cult5Input[i].checked){
      CEscore = 5;
      console.log(CEscore);
      break;
    }
  }
})

<!-- Historical Input -->
Hist1.addEventListener("click", function() {
  for (var i=0; i<Hist1Input.length; i++) {
    if(Hist1Input[i].checked){
      HIscore = 1;
      console.log(HIscore);
      break;
    }
  }
})

Hist2.addEventListener("click", function() {
  for (var i=0; i<Hist2Input.length; i++) {
    if(Hist2Input[i].checked){
      HIscore = 2;
      console.log(HIscore);
      break;
    }
  }
})

Hist3.addEventListener("click", function() {
  for (var i=0; i<Hist3Input.length; i++) {
    if(Hist3Input[i].checked){
      HIscore = 3;
      console.log(HIscore);
      break;
    }
  }
})

Hist4.addEventListener("click", function() {
  for (var i=0; i<Hist4Input.length; i++) {
    if(Hist4Input[i].checked){
      HIscore = 4;
      console.log(HIscore);
      break;
    }
  }
})

Hist5.addEventListener("click", function() {
  for (var i=0; i<Hist5Input.length; i++) {
    if(Hist5Input[i].checked){
      HIscore = 5;
      console.log(HIscore);
      break;
    }
  }
})

<!-- Humor Input -->
Humor1.addEventListener("click", function() {
  for (var i=0; i<Humor1Input.length; i++) {
    if(Humor1Input[i].checked){
      HUscore = 1;
      console.log(HUscore);
      break;
    }
  }
})

Humor2.addEventListener("click", function() {
  for (var i=0; i<Humor2Input.length; i++) {
    if(Humor2Input[i].checked){
      HUscore = 2;
      console.log(HUscore);
      break;
    }
  }
})

Humor3.addEventListener("click", function() {
  for (var i=0; i<Humor3Input.length; i++) {
    if(Humor3Input[i].checked){
      HUscore = 3;
      console.log(HUscore);
      break;
    }
  }
})

Humor4.addEventListener("click", function() {
  for (var i=0; i<Humor4Input.length; i++) {
    if(Humor4Input[i].checked){
      HUscore = 4;
      console.log(HUscore);
      break;
    }
  }
})

Humor5.addEventListener("click", function() {
  for (var i=0; i<Humor5Input.length; i++) {
    if(Humor5Input[i].checked){
      HUscore = 5;
      console.log(HUscore);
      break;
    }
  }
})

<!-- Book Scores -->
var GRscore;
var IJscore;
var UNscore;
var WTscore;
var TCscore;
var RBscore;
var DCscore;
