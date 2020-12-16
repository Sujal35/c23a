class Log{

constructor(x, y, width, height){
    
     this.body = Bodies.rectangle(x, y, width, height);
     this.x = x;
     this.y = y;
     this.width = width;
     this.height  = height;
 
}

display(){
     fill("red")
            rect(this.body.position.x, this.body.position.y, this.width,this.height);

}
}
