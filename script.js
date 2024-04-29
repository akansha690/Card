
let ctitle = document.querySelector(".title");
let cName = document.querySelector(".cName");
let cviews = document.querySelector(".views");
let monthsOldVideo = document.querySelector(".monthsOld");
let durationOfVideo = document.querySelector(".duration");

function createCard(title, Name, views, monthsOld, duration){ 
  ctitle.innerHTML = title;
  cName.innerHTML =Name;
  if(views >= 1000 && views <= 100000){
    views = views/1000 + "k";
  }
  else if(views >= 1000000 && views <= 100000000){
    views = views/1000000 + "M";
  }
  else{
    views = views/1000000000 + "B";
  }
  cviews.innerHTML = views;
  monthsOldVideo.innerHTML=monthsOld + "months ago";
  durationOfVideo.innerHTML=duration;
}

createCard("Installing Vscode and How websites Work | Sigma Web Development Course-Tutorial #1" , "Code With Harry", 56899000, 4, "12:30");