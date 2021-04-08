// variable 
let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
    let joueur = buttons[i].innerHTML;
    let robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
    let resultat = "";
  
  if (joueur === robot) {
    resultat="Egalité 🤝🏻"
  }
  else if ((joueur === "Pierre"&& robot === "Ciseau") || (joueur === "Feuille"&& robot === "Pierre") || (joueur === "Ciseau" && robot === "Feuille")) {
    resultat="Vous avez Gagné 😜";
  } else {
    resultat="Vous avez Perdu 😢";
  }
  document.querySelector(".resultat").innerHTML = `
  Joueur : ${joueur} </br>
  Robot : ${robot}</br>
  </br>
  ${resultat}`
});
};
