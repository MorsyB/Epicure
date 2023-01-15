export interface Restaurant{
    name:string;
    chef:string;
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
    restaurant:string;
    about:string;
    dishMenu:string;
    dishType:string;
    img:string;
    visits:number;
}

export interface Chef{
    name:string;
    description:string;
    restaurants:any[];
    img:string;
    visits:number;
}

