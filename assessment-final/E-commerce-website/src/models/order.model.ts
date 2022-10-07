import { Products } from "./products.model";
import { ShoppingCart } from "./shopping-cart.model";

export class Order{

    datePlaced !: number;
    items !: any[];


    constructor(public userId: string, public shipping: any,
        shoppingCart: ShoppingCart) {

        this.datePlaced = new Date().getTime();

        this.items = shoppingCart.items.map((i:any) =>
        {
          return {
            product: {
              prodName : i.product.prodName,
              imgPath : i.product.imgPath,
              price : i.product.price
            },
            quantity: i.quantity,
            totalPrice: i.totalPrice
          }
        })
    }

}