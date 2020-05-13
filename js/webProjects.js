//I decided to put my projects into JavaScript objects to hopefully make it easier when I am adding more porjects.
// project1 is matched with description1 and lang1, project2 is matched with description2 and lang2 ect ect...

//----PIXEL ART PROJECT PROJECT 1------------
const pixelArt = {
	  projectTitle:"Pixel Art Maker",
      projectDes: "A single-page web app that allows users to draw pixel art on a customizable canvas.",
      langUsed: "HTML5, CSS3, JavaScript"
};
document.getElementById("project1").innerHTML = pixelArt.projectTitle;
document.getElementById("description1").innerHTML = pixelArt.projectDes;
document.getElementById("lang1").innerHTML = pixelArt.langUsed;

//--NUN CHUCK BREWING PROJECT 2---------------
const nunChucks = {
	  projectTitle:"Nun Chuck's Brewing",
    projectDes: "This was my first freelance job. I was approached by a local craft brewer to design and build his website.",
    langUsed: "HTML5 and CSS3"
};
document.getElementById("project2").innerHTML = nunChucks.projectTitle;
document.getElementById("description2").innerHTML = nunChucks.projectDes;
document.getElementById("lang2").innerHTML = nunChucks.langUsed;

//--Random Employee API PROJECT 3---------------
const randomAPI = {
	  projectTitle:"Random Employee API",
    projectDes: "I made a single page app that pulls and parses data from a 3rd party API and manipulates the HTML DOM using JavaScript.",
    langUsed: "HTML5, CSS3, JavaScript, JSON"
};
document.getElementById("project3").innerHTML = randomAPI.projectTitle;
document.getElementById("description3").innerHTML = randomAPI.projectDes;
document.getElementById("lang3").innerHTML = randomAPI.langUsed;

//--Web App Dashboard PROJECT 4---------------
const webApp = {
	  projectTitle:"Web App Dashboard",
    projectDes: "I was provided with a mock up and had to replicate a web app dashboard, complete with JavaScript-driven charts and graphs.",
    langUsed: "HTML5, CSS3, JavaScript, jQuery"
};
document.getElementById("project4").innerHTML = webApp.projectTitle;
document.getElementById("description4").innerHTML = webApp.projectDes;
document.getElementById("lang4").innerHTML = webApp.langUsed;

//--GAME SHOW PROJECT 5---------------
const gameShow = {
    projectTitle: "Game Show",
    projectDes: "I created a word guessing game where players click letters from an onscreen keyboard and try to guess a random phrase.",
    langUsed: "HTML5, CSS3, JavaScript"
};
document.getElementById("project5").innerHTML = gameShow.projectTitle;
document.getElementById("description5").innerHTML = gameShow.projectDes;
document.getElementById("lang5").innerHTML = gameShow.langUsed;

//--INTERACTIVE PHOTO GALLERY PROJECT 6----------------
const interactivePhoto = {
  projectTitle: "Interactive Photo Gallery",
  projectDes: "I created an interactive photo gallery using JavaScript and jQuery. When the user clicks on a thumbnail, the photo will display in a shadow box.",
  langUsed: "HTML5, CSS3, JavaScript, jQuery"
};
document.getElementById("project6").innerHTML = interactivePhoto.projectTitle;
document.getElementById("description6").innerHTML = interactivePhoto.projectDes;
document.getElementById("lang6").innerHTML = interactivePhoto.langUsed;

//--FLASH CARD WITH VUE PROJECT 7----------------
const flashCard = {
  projectTitle: "Flashcards with Vue",
  projectDes: "My first project with Vue. I decided to make a flashcard web site for myself to study JavaScript. Still an ongoing project with more flashcards to add!",
  langUsed: "HTML5, CSS3, JavaScript, Vue.js"
};
document.getElementById("project7").innerHTML = flashCard.projectTitle;
document.getElementById("description7").innerHTML = flashCard.projectDes;
document.getElementById("lang7").innerHTML = flashCard.langUsed;

//--WEB STYLE GUIDE PROJECT 8------
const styleGuide = {
  projectTitle: "Web Style Guide",
  projectDes: "I was provided completed index.html and styles.css files by Treehouse. I was responsible for converting the CSS into Sass by splitting the code into several Sass partial files.",
  langUsed: "HTML5, CSS3, Sass"
};
document.getElementById("project8").innerHTML = styleGuide.projectTitle;
document.getElementById("description8").innerHTML = styleGuide.projectDes;
document.getElementById("lang8").innerHTML = styleGuide.langUsed;

//--ROCK, PAPER, SCISSORS PROJECT 9------
const rsp = {
  projectTitle: "Rock, Paper, Scissors",
  projectDes: "Rock, Paper, Scissors game with Python! This is a CL game. Please download and cd into the local file that it is stored.",
  langUsed: "Python"
};
document.getElementById("project9").innerHTML = rsp.projectTitle;
document.getElementById("description9").innerHTML = rsp.projectDes;
document.getElementById("lang9").innerHTML = rsp.langUsed;



