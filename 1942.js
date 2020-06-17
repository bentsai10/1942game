var gameStart = false; 

var hero = {
    x: 700,
    y:500, 
};

var enemies = []

var bullets = [];
function generateEnemies(){

}
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
function displayBullets(){
    var output = "";
    for(var i = 0; i < bullets.length; i++){
        output+='<div class="bullet" style="top:' + bullets[i].y + 'px; left:' + bullets[i].x + 'px;"></div>'
    }
    document.getElementById('bullets').innerHTML = output;
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
function moveBullets(){
    for(var i = 0; i < bullets.length; i++){
        if(bullets[i].y - 5 < 0){
            bullets[0] = bullets[bullets.length-1];
            bullets.pop();
        }else{
            bullets[i].y -=5;
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
        bullets.push({x: hero.x+8, y: hero.y-15})
    }
}

function gameLoop(){
    displayHero();
    // moveEnemies();
    // displayEnemies();
    moveBullets();
    displayBullets();
}

setInterval(gameLoop, 50);

