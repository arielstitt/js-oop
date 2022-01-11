// //js constructor 
// function Teacher(name){
//     //Attributes are assigned to the object using this keyword
//     this.name = name;
//     this.teach = function(){
//         console.log(`${this.name} says constructors are cool!`);
//     }
// }
// //The new keyword calls the function and returns the resulting object.
// let teacher1 = new Teacher('Ariel');
// let teacher2 = new Teacher('Lionel');

// teacher1.teach();
// teacher2.teach();

// //Constructor Exersie Answer
// function Particle(startX, startY) {
//     //attributes
//     this.x = startX;
//     this.y = startY;
//     velocity = {x: 0, y: 0};
// }

// var particles = [];
// for(var i = 0; i < 100; i++) {
//     particles.push(new Particle(i, Math.floor(Math.random()*500)));
// }

// console.log(particles);

// //INHERITANCE

// //constructor function
// function Teacher(name){
//     this.name = name;
//     sleep = function(){
//         console.log(`night night`);
//     }
// }

// Teacher.prototype = {
//     teach: function(){
//         console.log(`Prototypes are important says, ${this.name}`);
//     }
// }

// function Teacher(){
//     //look, I'm empty!    
// }

// Teacher.prototype = {
//     disposition: 'chaotic evil'
// }

// let shane = new Teacher();
// let assaf = new Teacher();
// console.log(shane.disposition, assaf.disposition) //evil, evil

// //reassigning the value of disposition
// Teacher.prototype.disposition = 'happy';
// console.log(shane.disposition, assaf.disposition) //happy, happy


// //****** PROTOTYPE CHAIN ******/
// function Teacher() {}

// Teacher.prototype = {
// 	name: 'John Doe'
// }

// let shane = new Teacher();
// let assaf = new Teacher();

// shane.name = "Shane";

// console.log(shane.name, assaf.name) //'Shane', 'John Doe'

//********PROTOTYPE EXERCISE************* */
var gravity = 0.5;
var time = 0;

function Particle(startX,startY) {
    this.x = startX;
    this.y = startY;
}

Particle.prototype = {
    getVelocity: function(){
        return time * gravity;
    },

    move: function() {

      this.y += this.getVelocity();
      if(this.y >= 500)
          console.log('bottom');
    }
}

var particles = [];
for(var i = 0; i < 100; i++) {
    particles.push(new Particle(i,Math.random()*500));
}

setInterval(function(){
    time++;
    particles.filter(function(p){
        console.log(p.x)
        return p.y < 500;
    })
    .forEach(function(p){
        p.move();
    })
},100)