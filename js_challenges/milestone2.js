// My crazy animals
class Animal{
    constructor(voice, limbs) {
        this.voice = voice;
        this.limbs = limbs;
    }
   speak() {
       console.log(this.voice);
   }
   walk() {
       console.log("Walking on my" + this.limbs + "limbs");
   }
}

// Prototypal inheritance
class Donkey extends Animal {
    constructor(name) {
        super("Heeho", "four");
        this.name = name;
    }
}

let john = new Donkey("John");
