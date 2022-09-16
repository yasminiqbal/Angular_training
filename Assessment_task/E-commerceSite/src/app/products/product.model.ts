import { ProductDetail } from "../shared/productDetail.model";

export class Product{
    public name : string;
    public description : string;
    public imagepath : string;
    public productDetail : ProductDetail[];

    constructor(name: string, 
                desc: string,
                imgpath: string,
                prodDetail: ProductDetail[]){

                    this.name = name;
                    this.description = desc;
                    this.imagepath = imgpath;
                    this.productDetail = prodDetail;
    }
}
