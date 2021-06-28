class Game{
    constructor(){

    }
getState(){
 var gsr=database.ref("gamestate");
 gsr.on('value',(data)=>{
    gameState=data.val();

 })
}
updateState(state){
database.ref("/").update({
gameState:state
})

}
async start(){
    // if (gameState===0) {
        player1=new Player();
        var playerCountRef=await database.ref("playerCount").once("value")
    //     if (playerCountRef.exists()) {
            playerCount=playerCountRef.val();
            player1.getCount()
    //     }
        form1=new Form()

       form1.display();   

    // }
for (var i = 0; i < plants.length; i++) {
   plants.push(new Plant(50,Math.random(100,displayHeight),50,50));
    
}
}
play(){

drawSprites()



}



}