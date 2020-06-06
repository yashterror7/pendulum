class Ball {
    constructor(x,y,width,height){
       var box_options ={
                   isStatic:true
                   restitution:1
               }
           ellipseMode(CENTER);
 ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
    this.width=width;
   this.height=height;
   World.add(world,this.body);
    display(){
          var pos=this.body.position;
          fill(&quot;white&quot;);
          imageMode(CENTER);
          image(this.image,pos.x,pos.y,this.width,this.height);
       }
    }