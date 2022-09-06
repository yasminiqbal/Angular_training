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