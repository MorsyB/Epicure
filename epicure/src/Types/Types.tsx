export interface Restaurant{
    name:string;
    owner:string;
    dishes:Dish[];
    picture:string;
}

export interface Dish{
    name:string;
    price:number;
    ingredients:string[];
    picture:string;
}