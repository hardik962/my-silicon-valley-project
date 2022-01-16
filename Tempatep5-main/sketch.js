 var bk
var doll,dollimg,d2,d3
var k, k1,k2,kimg
var snakeimg,snake,alien,alienimg,monster,monsterimg
var virus,virusimg,thunder,thunderimg
var boy,boyimg,gunimg,gun
 var lifes=[1,2,3,4,5]
var gammeState="wating"
var gameState="end"
 var finishLine
 var Bullet
 var heart,heartimg
var winimg
function preload(){
   
dollimg=loadImage("./assets/doll.png")
kimg=loadImage("./assets/k.png")
thunderimg=loadImage("./assets/thunder.png")
alienimg=loadImage("./assets/alien.png")
virusimg=loadImage("./assets/virus.png")
snakeimg=loadImage("./assets/snake.png")
monsterimg=loadImage("./assets/monster.png")
 boyimg=loadImage("./assets/boy.png")
 heartimg=loadImage("./assets/heart.png")
 background1=loadImage("./assets/bk.jpg")
 laser=loadSound("laser.mp3")
 winimg=loadImage("./assets/win.jfif")
}


function setup (){
 createCanvas(1070,520)

doll=createSprite(180,50)
doll.addImage("doll",dollimg)
doll.scale=0.5

d2=createSprite(520, 50)
 d2.addImage("doll",dollimg)
 d2.scale=0.5

 d3=createSprite(870,50)
 d3.addImage("doll",dollimg)
 d3.scale=0.5

k=createSprite(50,50)
k.addImage("k",kimg)
k.scale=0.2
 
k2=createSprite(330,50)
k2.addImage("k",kimg)
k2.scale=0.2

k1=createSprite(700,50)
 k1.addImage("k",kimg)
 k1.scale=0.2

boy=createSprite(900,480,10,10)
boy.addImage(boyimg)
boy.scale=0.2

life=createSprite(970,50)
life.addImage(heartimg)
 life.scale=0.05

life1=createSprite(990,50)
life1.addImage(heartimg)
life1.scale=0.05

life2=createSprite(1010,50)
life2.addImage(heartimg)
life2.scale=0.05

life3=createSprite(1030,50)
life3.addImage(heartimg)
life3.scale=0.05

life4=createSprite(1050,50)
life4.addImage(heartimg)
life4.scale=0.05

 finishLine=createSprite(500,125,1128,5)
 finishLine.shapeColor=("yellow")

 snakeGroup=new Group()
alienGroup=new Group()
 thunderGroup=new Group()
 virusGroup=new Group()
 monsterGroup=new Group()
 bulletGroup=new Group()
 laserGroup=new Group()
 lifeGroup=new Group()
}


function draw(){
background(background1)
 
spawnSnake()
spawnAlien()
spawnMonster()
spawnThunder()
spawnVirus()
spawnLaser()
drawSprites()
moveBoy()
spawnBullet()
collision ()
 

}
 

  
 


function spawnSnake() {
    if (frameCount % 150 === 0) {
    var snake = createSprite( 50,190,10,10);
    snake.addImage(snakeimg);
     snake.velocityX=10
     snake.scale = 0.3;
     snake.lifetime = 600;
      snakeGroup.add(snake);
 
    }
    
    }
  
      function spawnAlien() {
        if (frameCount % 60 === 0) {
        var alien = createSprite(180,190,10,10);
         alien.addImage( alienimg);
         alien.velocityY=10
         alien.scale = 0.2;
         alien.lifetime = 200;
         alienGroup.add( alien);
        }
        
        }

        function spawnMonster() {
            if (frameCount % 60 === 0) {
            var  monster = createSprite(330,190,10,10);
           monster.addImage( monsterimg);
           monster.velocityY=10
           monster.scale = 0.4;
           monster.lifetime = 200;
           monsterGroup.add(monster)
            }
            
            }
            function spawnVirus () {
                if (frameCount %  50 === 0) {
                var  virus = createSprite(520,190,10,10);
                virus.addImage(virusimg);
                virus.velocityY=10
                virus.scale = 0.2;
                virus.lifetime = 200;
                virusGroup.add(  virus );
                }
            }

                function spawnThunder () {
                    if (frameCount % 100 === 0) {
                    var  thunder = createSprite(700,190,10,10 );
                    thunder.addImage(thunderimg);
                    thunder.velocityY=10
                    thunder.scale = 0.2;
                    thunder.lifetime = 200;
                    thunderGroup.add(thunder);
                    }

                   
                    
                
                }
                function spawnLaser () {
                    if (frameCount % 90 === 0) {
                    var laser= createSprite(870,190,10,10) 
                    laser.addImage(snakeimg)
                    laser.scale=0.4
                    laser.velocityY=10
                    laser.lifetime = 200;
                     laserGroup.add(laser);
                    }
                }

                function spawnBullet(){
                if(keyDown(32)){
                bullet=createSprite(boy.position.x,boy.position.y,2,10)
                bullet.lifetime=200
                bullet.velocityY=-10
                bullet.shapeColor=("blue")
                bulletGroup.add(bullet)
                laser.play()
                }
                }
               function moveBoy(){
                if(keyIsDown(87)){
                boy.y=boy.y-2

                }
                if(keyIsDown(83)){
                    boy.y=boy.y+2
                     
                }
                if(keyIsDown(65)){
                    boy.x=boy.x-2
                }
                if(keyIsDown(68)){
                    boy.x=boy.x+2
                }
            
               }
             function collision (){
            if(boy.isTouching(thunderGroup) || boy.isTouching(laserGroup) || boy.isTouching(monsterGroup) || boy.isTouching(snakeGroup) || boy.isTouching(virusGroup) || boy.isTouching(alienGroup)){
                  life.destroy()
                
                  }
              /*    if(Bullet.isTouching(thunderGroup) ||  Bullet.isTouching(laserGroup) || Bullet.isTouching(monsterGroup) ||   Bullet.isTouching(snakeGroup) ||   Bullet.isTouching(virusGroup) || Bullet.isTouching(alienGroup)){
           
                    snakeGroup.destroyEach()
                    alienGroup.destroyEach()
                    laserGroup.destroyEach()
                    virusGroup.destroyEach()
                    monsterGroup.destroyEach()
                    thunderGroup.destroyEach()
                }*/
                if(boy.isTouching(finishLine)){
                
               var win=createSprite(500,300)
               win.addImage(winimg)
             win.scale=4
             snake.velocityX=0
             alien.velocityY=0
              monster.velocityY=0
             thunder.velocityY=0
             virus.velocityY=0
             laser.velocityY=0
                }
             }
           