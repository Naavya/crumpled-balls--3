class Dustbin{
    constructor(x,y,width,height){
    
this.body=Bodies.rectangle(x,y,width,height)
this.width=width
this.height=height
World.add(world,this.body)
this.image=loadImage("dustbingreen.png")
}
display(){
    var pos=this.body.position
    // transalate (pos.x,pos.y)
    fill (255,0,255)
    rectMode(CENTER)
    image(this.image,pos.x,pos.y,this.width,this.height)
   // pop ();
    }
}

