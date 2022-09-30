import { Products } from "./products.model";
import { ShoppingCart } from "./shopping-cart.model";

export class Order{

    datePlaced !: number;
    items !: any[];
    prodName !: string[];
    imgPath !: string[];
    price !: number[];

    constructor(public userId: string, public shipping: any,
        shoppingCart: ShoppingCart) {

        this.datePlaced = new Date().getTime();

        this.items = shoppingCart.items.map((i:any) =>
        {
          return {
            product: {
              prodName : i.prodName,
              imgPath : i.imgPath,
              price : i.price
            },
            quantity: i.quantity,
            totalPrice: i.totalPrice
          }
        })
    }

}