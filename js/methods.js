let laptop = {
    cpu: 'i7',
    ram: 16,
    brand: 'HP',

    getConfig: function(){
        console.log(laptop.ram);
    }
}

console.log(laptop.brand);
laptop.getConfig();