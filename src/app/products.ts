export interface Products {
    _id:string;
    title:string;
    imageCover:string;
    price:number;
    ratingsAverage:number;
    category:ICategory;
}

export interface ICategory {
    name:string;

}