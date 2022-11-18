export interface Restaurant{
    name:string;
    owner:string;
    dishesID:number[];
    picture:string;
}

export interface Dish{
    name:string;
    price:number;
    ingredients:string[];
    picture:string;
}

export interface Chef{
    name:string;
    description:string;
    restaurants:number[];
    picture:string;
}

