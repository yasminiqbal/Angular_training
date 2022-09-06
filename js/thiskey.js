let laptop = {
    cpu: 'i7',
    ram: 16,
    brand: 'HP',

    getConfig: function(){
        console.log(this.ram); // this keyword used to represent this function
    }
}

laptop.getConfig();

let laptop1 = {
    cpu: 'i9',
    ram: 16,
    brand: 'HP',

    getConfig: function(){
        console.log(this.brand);
    }
}


laptop1.getConfig();


let laptop_2 = {
    cpu: 'i7',
    ram: 16,
    brand: 'HP',
    compare: function(other){
        if (this.cpu > other.cpu)
            console.log(this);
        else
            console.log(other);
    }
}
let laptop_3 = {
    cpu: 'i9',
    ram: 16,
    brand: 'HP'
}

laptop_2.compare(laptop_3)