class Plant{
constructor(x,y,width,height){
this.width=width;
this.height=height;
this.plantImg=loadImage("img/plant1.png");

this.body=createSprite(x,y,this.width,this.height);
this.body.addImage(this.plantImg);


}
}























