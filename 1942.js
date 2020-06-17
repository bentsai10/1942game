

var hero = {
    x: 700,
    y:500, 
};

var enemies = [{x: 300, y:100}, {x: 400, y:100}, {x: 500, y:100}, {x: 600, y:100}, {x: 600, y:100}, {x: 600, y:100}, {x: 600, y:100}]

var bullets = [];

function displayHero(){
    document.getElementById('hero').style.top = hero.y + 'px'
    document.getElementById('hero').style.left = hero.x + 'px'
}
function displayEnemies(){
    var output = "";
    for(var i = 0; i < enemies.length; i++){
        output+='<div class="enemy1" style="top:' + enemies[i].y + 'px; left:' + enemies[i].x + 'px;"></div>'
    }
    document.getElementById('enemies').innerHTML = output;
}

function moveEnemies(){
    for(var i = 0; i < enemies.length; i++){
        if(enemies[i].y + 5 > 540){
            enemies[i].y = Math.floor(Math.random()*6);
        }else{
            enemies[i].y +=5;
        }   
    }
}
document.onkeydown = function (e) {
    if(e.keyCode == 37){//left
        hero.x-=10;
    }
    else if (e.keyCode == 38){//up
        hero.y-=10;
    }
    else if (e.keyCode == 39){ //right
        hero.x+=10;
    }
    else if (e.keyCode == 40){//down
        hero.y+=10;
    }else if (e.keyCode == 32){ //space

    }
}

function gameLoop(){
    displayHero();
    moveEnemies();
    displayEnemies();
}

setInterval(gameLoop, 50);

