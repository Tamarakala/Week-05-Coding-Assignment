class Product {
    constructor(name) {
      this.name = name;
    }
  
    describe() {
      return `${this.name}`;
    }
  }
  
  class Catalog {
    constructor() {
        this.productList = []; 
    }
  // There are two classes in this code: "Product" and "Catalog". The first class "Product" has a constructor
  // that takes a name as a parameter. It has a 'describe' method that returns the name of the product. 
  // The "Catalog" class has a constructor that turns on an empty array. 

    start() {
      let selection = this.showCatalog();
      while (selection !== '0') {
        switch (selection) {
          case '1':
            this.showProductList();
            break;
          case '2':
            this.addItem();
            break;
          case '3':
            this.deleteItem();
            break;
          default:
            selection = '0';
        }
        selection = this.showCatalog();
      }
      alert(`You can add another item to the cart`);
    }
  // In this part the "start" is a method, which is a main program loop and provides the menu options.


    showCatalog() {
      return prompt(`
        0) exit
        1) show product list
        2) add item
        3) delete item
        `);
    }
  // The "showCatalog" method shows the menu of options using the "prompt' function and returns the user's choice as string.

  
    showProductList() {
      let result = '';
      for (let i = 0; i < this.productList.length; i++) {
        result += this.productList[i] + `\n`;
      }
      alert(result);
    }
  // This method displays the list of the products stored in the "productList" array using an alert. 


    addItem() {
      let productName = prompt("Enter the name of the product:");
      let newProduct = new Product(productName);
      this.productList.push(newProduct.describe());
      alert(`${productName} has been added to the catalog.`);
    }
  // This method adds the new product in the list. 
           
      
  deleteItem() {
    let name = prompt(`Enter the name of the product you would like to delete: `);
    let index = this.productList.indexOf(name);
    if (index !== -1 ) {
      this.productList.splice(index, 1);
      alert("Product deleted successfully.");
    } else {
      alert("Invalid name. Product not deleted.");
    }
  }
}
  
  // This is the method also which prompts the user to delete the item. 


  let catalog = new Catalog(); 
  catalog.start();
  // Here is the "Catalog" class that calls the "start" method to begin the program. 