var score = 0;

var hero = {
    x: 700,
    y:500, 
};

var enemies = []

var bullets = [];
function generateEnemies(){
    if(enemies.length <8){
        var enemyType = Math.floor((Math.random() * 5)) + 1;
        var randomX = (Math.floor((Math.random() * 15)) + 5)*50;
        enemies.push({type: enemyType, x: randomX, y: 0});
    }
}
function displayHero(){
    document.getElementById('hero').style.top = hero.y + 'px'
    document.getElementById('hero').style.left = hero.x + 'px'
}
function displayEnemies(){
    var output = "";
    for(var i = 0; i < enemies.length; i++){
        output+='<div class="enemy' + enemies[i].type + '" style="top:' + enemies[i].y + 'px; left:' + enemies[i].x + 'px;"></div>'
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
function displayScore(){
    document.getElementById('score').innerHTML = score;
}
function moveEnemies(){
    for(var i = 0; i < enemies.length; i++){
        if(enemies[i].y + 2 > 527){
            enemies.shift();
        }
        else if(enemies[i].type ==4 && enemies[i].y + 2 > 508){
            enemies.shift();
        }
        else{
            enemies[i].y +=2;
        }   
    }
}
function moveBullets(){
    for(var i = 0; i < bullets.length; i++){
        if(bullets[i].y - 5 < 5){
            bullets.shift();
        }else{
            bullets[i].y -=5;
        }   
    }
}
function detectBulletCollision(){
    for(var i = 0; i <bullets.length; i++){
        for(var j = 0; j <enemies.length; j++){
            if(Math.abs(bullets[i].x - enemies[j].x) < 20 && Math.abs(bullets[i].y - enemies[j].y) < 10){
                score +=100;
            }
            else if(enemies[j].type == 4 && Math.abs(bullets[i].x - enemies[j].x) < 50 && Math.abs(bullets[i].y - enemies[j].y) < 20){
                score +=300;
            }
        }
    }
}
function detectPlaneCollision(){
    for(var i = 0; i <enemies.length; i++){
        if((Math.abs(hero.x - enemies[i].x) < 20 && Math.abs(hero.y - enemies[i].y) < 20)){
            score-=500;
            console.log("collision with plane!");
    
        }else if(enemies[i].type == 4 && Math.abs(hero.x - enemies[i].x) < 50 && Math.abs(hero.y - enemies[i].y) < 40){
            score-=500;
            console.log("Big collision with plane!");
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
    detectBulletCollision();
    detectPlaneCollision();
    displayHero();
    displayEnemies();
    moveEnemies();
    moveBullets();
    displayBullets();
    displayScore();
}

setInterval(gameLoop, 50);
setInterval(generateEnemies, 2000);

