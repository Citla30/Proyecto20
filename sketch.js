var cat,cat1,cat2,cat3;
var mouse,mouseimg,mouse2,mouse3,mouse4,mouse5,mouse6;
var fondo;
var ground,ground2,ground3,ground4;
var t1,t1img,t2,t2img,t3,t3img,t4,t4img;

function preload(){
  fondo=loadImage("fondo.png");
  
  cat1=loadImage("cat1.png");
  cat2=loadAnimation("cat2.png","cat3.png");
  cat3=loadImage("cat4.png");
  
  mouseimg=loadImage("raton1.png");
  mouse2=loadAnimation("raton2.png","raton3.png");
  mouse3=loadImage("raton4.png");
  mouse5=loadImage("Imagenfinal.png");
  
  t1img=loadImage("texto1.png");
  t2img=loadImage("texto2.png");
  t3img=loadImage("texto3.png");
  t4img=loadImage("texto4.png");
}

function setup(){
  createCanvas(600,450);
  
  cat=createSprite(470,390);
  cat.addImage(cat1);
  cat.scale=0.5;
  cat.debug=false;
  cat.setCollider("rectangle",0,70,300,170);

  mouse=createSprite(-50,390);
  mouse.addImage(mouseimg);
  mouse.scale=0.4;
  
  ground=createSprite(450,265,150,3);
  ground.visible=false;
  
  ground1=createSprite(240,235,250,10);
  ground1.visible=false;
  
  ground3=createSprite(300,460,600,20);
  ground3.visible=false;
  
  mouse4=createSprite(50,50)
  mouse4.addImage(mouse3);
  mouse4.scale=0.5;
  mouse4.visible=false;
  
  mouse6=createSprite(150,270);
  mouse6.addImage(mouse5);
  mouse6.scale=0.5;
  mouse6.visible=false;
  
  t1=createSprite(470,45);
  t1.addImage(t1img);
  t1.scale=0.6;
  
  t2=createSprite(470,45);
  t2.addImage(t2img);
  t2.scale=0.6;
  t2.visible=false;
  
  t3=createSprite(470,100);
  t3.addImage(t3img);
  t3.scale=0.6;
  t3.visible=false;
  
  t4=createSprite(300,200);
  t4.addImage(t4img);
  t4.scale=0.6;
  t4.visible=false;

}

function draw(){
 background(fondo);  
  
   edges= createEdgeSprites();
   cat.collide(edges);
   cat.collide(ground3);
   cat.collide(ground1);
  
  if(cat.collide(ground1)){
    
     if(keyDown("space")){
        cat.velocityY=-8;
  }
    
}

 if(cat.collide(ground)){
    if(keyDown("space")&&cat.y>=100){
       cat.velocityY=-5;
    }
 }
  
  if(keyDown("space")&&cat.y>=250){
     cat.velocityY=-5;
  }
 
  cat.velocityY=cat.velocityY+0.3;
  
  if(keyDown("right_arrow")){
     mouse.velocityX=2;
  }
  
  if(mouse.x==60){
     mouse.velocityX=0;
     Raton();
     t1.destroy();
     t2.visible=true;
  }
  
  if(cat.x-mouse.x<cat.width/2+mouse.width/2
     &mouse.x-cat.x<cat.width/2+mouse.width/2
     &mouse.y-cat.y<cat.height/2+mouse.height/2
     &cat.y-mouse.y<cat.height/2+mouse.height/2){
        cat.velocityX=0;
        cat.addAnimation("gato1",cat1);
        cat.changeAnimation("gato1");
        cat.scale=0.5;
        cat.x=460;
        cat.y=390;
        cat.setCollider("rectangle",30,70,150,10);
    
        ground3.y=430;

        mouse.destroy();
        mouse4.visible=true;

        t3.visible=true;
  }
  
  if(cat.x-mouse4.x<cat.width/2+mouse4.width/2
     &mouse4.x-cat.x<cat.width/2+mouse4.width/2
     &mouse4.y-cat.y<cat.height/2+mouse4.height/2
     &cat.y-mouse4.y<cat.height/2+mouse4.height/2){
    
        cat.destroy();
        mouse4.destroy();
    
        mouse6.visible=true;
        t4.visible=true;
  }
  
  Raton2();
  
  drawSprites();
}

function Raton(){
  
  if(keyDown("left_arrow")){
    mouse.addAnimation("ratón",mouse2);
    mouse.changeAnimation("ratón");
    mouse.y=380;
    
    cat.velocityX=-2;
    cat.addAnimation("gato",cat2);
    cat.changeAnimation("gato");
    cat.scale=0.35;
    cat.y=350;
    cat.setCollider("rectangle",0,80,300,380);
    
    t2.destroy();
  }
}

function Raton2(){
  if(keyDown("k")){
    cat.x=cat.x+5;
    cat.addAnimation("gato",cat3);
    cat.changeAnimation("gato");
    cat.scale=0.5;
    
    t3.destroy();
  }
  
  if(keyDown("a")){
    cat.x=cat.x-5;
    cat.addAnimation("gato",cat1);
    cat.changeAnimation("gato");
    cat.scale=0.5;
    
    t3.destroy();
  }
  
}