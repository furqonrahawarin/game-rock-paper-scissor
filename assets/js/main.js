let choices = ["kertas", "batu", "gunting"];
let i = Math.floor(Math.random() * 3);
let ComChoice = choices[i];


setInterval(50);
function convert(word){
    if(word === "kertas") return '<img width="50" height="50" class="mr-auto ml-auto" src="img/kertas.png" alt="">';
    if(word === "batu") return '<img width="50" height="50" class="mr-auto ml-auto" src="img/batu.png" alt="">';
    return '<img width="50" height="50" class="mr-auto ml-auto" src="img/gunting.png" alt="">'
}

function game(UserChoice){
    let box = document.getElementById("challenge");
    box.style.display = "inline-flex";
    let userDiv = document.getElementById("YourObject");
    userDiv.innerHTML = convert(UserChoice);
    let comDiv = document.getElementById("ComObject");
    comDiv.innerHTML = convert(ComChoice);
    if(UserChoice === "kertas" && ComChoice === "batu" || UserChoice === "batu" && ComChoice === "gunting" || UserChoice === "gunting" && ComChoice === "kertas"){
        win(UserChoice);
    }
    else if(UserChoice === ComChoice){
        draw(UserChoice);
    }
    else{
        lose(UserChoice);
    }
}
function win(bn){
    // UserPoints++;
    document.getElementById("who").innerHTML = "<h3>Kamu Menang!</h3>";
    var bn = document.getElementById(bn);
}
function draw(bn){
    document.getElementById("who").innerHTML = "<h3>Seri!</h3>";
    var bn = document.getElementById(bn);
}
function lose(bn){
    // ComPoints++;
    document.getElementById("who").innerHTML = "<h3>Kamu Kalah!</h3>";
    var bn = document.getElementById(bn);
}