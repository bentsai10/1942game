var hero = {
    x: 700,
    y:500, 
};

var enemies = []

var bullets = [];
function generateEnemies(){
    if(enemies.length <8){
        var enemyType = Math.floor((Math.random() * 5)) + 1;
        var randomX = (Math.floor((Math.random() * 17)) + 5)*50;
        enemies.push({type: enemyType, x: randomX, y: 0});
        console.log(enemies);
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
function moveEnemies(){
    for(var i = 0; i < enemies.length; i++){
        if(enemies[i].y + 2 > 527){
            enemies[i] = enemies[enemies.length-1];
            enemies.pop();
        }
        else if(enemies[i].type ==4 && enemies[i].y + 2 > 508){
            enemies[i] = enemies[enemies.length-1];
            enemies.pop();
        }
        else{
            enemies[i].y +=2;
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
    displayEnemies();
    moveEnemies();
    moveBullets();
    displayBullets();
}

setInterval(gameLoop, 50);
setInterval(generateEnemies, 1000);

