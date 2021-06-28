class Zombie{
    constructor(x,y,width,height){
        this.body=createSprite(x,y,width,height)
        this.image=loadAnimation("zombieblue1.png","zombieblue2.png","zombieblue3.png","zombieblue4.png","zombieblue5.png","zombieblue6.png");
        this.body.addAnimation("zombie",this.image);
    }
}