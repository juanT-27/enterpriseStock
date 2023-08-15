class Product {
  constructor(pName, cost, price, units,categorie) {
    this.pName = pName;
    this.cost = cost;
    this.price = price;
    this.units = units;
    this.categorie= categorie;
    this.total = this.totalProfit();
  }

  profitMade() {
    let total = this.price - this.cost;
    return total;
  }

  totalProfit() {
    let purchaseMade = this.profitMade();
    let totalProfitDone = purchaseMade * this.units;
    return totalProfitDone;
  }
}

class UiStock{
    constructor(){
        this.form= document.querySelector()
    }

}


let nwProduct = new Product("Agenda devocional", 30000, 59000, 500);

console.log(nwProduct.profitMade());
console.log(nwProduct.total);
