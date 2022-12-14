export interface Restaurant{
    name:string;
    owner:string;
    dishesID:number[];
    openingHours:string;
    closingHours:string;
    picture:string;
    visits:number;
    date:string;
}

export interface Dish{
    name:string;
    price:number;
    ingredients:string[];
    dishType:string;
    picture:string;
}

export interface Chef{
    name:string;
    description:string;
    restaurants:number[];
    picture:string;
}

