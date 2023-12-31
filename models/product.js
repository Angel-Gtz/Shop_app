const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data', 
    'products.json'
)

const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if(err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent))
        }
    })
} 

class Product {
    constructor(title){
        this.title = title;
    }
    
    save() {
        getProductsFromFile( product => {
            productsData.push(this);
            fs.writeFile(p, JSON.stringify(productsData), ( err ) => {
                console.log(err)
            })  
        })        
    };

    static fetchAll(cb) {
        getProductsFromFile(cb)
    };
};

module.exports = Product;