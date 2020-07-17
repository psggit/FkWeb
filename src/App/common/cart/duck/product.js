/* @flow */

class Product {
  //Keep em private
  #SKUID: number;
  #BrandName: string;
  #BrandID: number;
  #Price: number;
  #Volume: number;
  #Count: number;

  constructor(sku: Object) {
    this.#SKUID = sku.sku_id;
    this.#BrandName = sku.brand_name;
    this.#BrandID = sku.brand_id;
    this.#Price = sku.price;
    this.#Volume = sku.volume;
    this.#Count = 1;
  }

  add(sku: Object) {
    this.#SKUID = sku.sku_id;
    this.#BrandName = sku.brand_name;
    this.#BrandID = sku.brand_id;
    this.#Price = sku.price;
    this.#Volume = sku.volume;
    this.#Count = this.#Count + 1;
  }

  remove(sku: Object) {
    this.#SKUID = sku.sku_id;
    this.#BrandName = sku.brand_name;
    this.#BrandID = sku.brand_id;
    this.#Price = sku.price;
    this.#Volume = sku.volume;
    this.#Count++;
  }

  get count(): number {
    return this.#Count;
  }

  get price(): number {
    return this.#Price;
  }

  get total(): number {
    return this.#Price * this.#Count;
  }

  get brandName(): string {
    return this.#BrandName;
  }

  get brandID(): number {
    return this.#BrandID;
  }

  valueOf(): number {
    return this.#SKUID;
  }
}

class Products {
  #Products;

  constructor() {
    this.#Products = new Map();
  }

  add(sku: Object) {
    let prod = this.#Products.get(sku.sku_id);
    //if doesn't exist, create one and add it to the map
    if (prod === undefined) {
      let prod = new Product(sku);
      this.#Products.set(sku.sku_id, prod);
    } else {
      prod.add(sku);
    }
  }

  remove(sku: Object) {
    //Find the sku in the map
    let prod = this.#Products.get(sku.sku_id);
    // if doesn't exist, keep quiet, the world isn't coming to an end
    if (prod === undefined) {
      return;
    }
    // if exists, remove
    prod.remove(sku);
    // if the count is 0, remove from the map
    if (prod.count === 0) {
      this.#Products.delete(sku.sku_id);
    }
  }

  get total(): number {
    //sum up the price
    let total: number = 0;

    for (let prod of this.#Products.values()) {
      total = total + prod.total;
    }
    return total;
  }
}

export { Product, Products };
