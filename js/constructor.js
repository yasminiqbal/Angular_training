function Alien(name, tech){
    this.name = name;
    this.tech = tech;
}


let alien1 = new Alien('Yasmin', 'JS') // new keyword used for multiple instance
let alien2 = new Alien('Raja', 'Marketing')
console.log(alien1)
alien2.tech = 'full stack'
console.log(alien2)