import { useEffect, useState } from "react";
import { bagIcon } from "../../Data/Icons";
import { Dish } from "../../Types/Types";
import { BlackBTN } from "../DishPopup/syles";
import { BagText, BagPopupDiv, BagBTN, BagDiv, BagTitle, RestTitle, DishesDiv, Comment, CommentText, WhiteBTN, DishBagCard, DishBagDetails, DishIMG, DishTitleDiv, DishQuantityDiv, DishTitle, DishPrice, DishTitleQuantityDiv } from "./styles";
import shekel from '../../Data/Pictures/shekel.png'


function BagPopup() {
    const order = JSON.parse(sessionStorage.getItem('order') || "{}");
    const checkIfFetched = (object: string) => { return sessionStorage.getItem(object) != null && sessionStorage.getItem(object) != undefined }
    const [dishes, setDishes] = useState<Array<Dish>>([]);
    const getQuantity = (dish:String)=>{
        let quantity = 0;
        order.dishes.forEach((orderDish:any)=>{if(quantity == 0 && orderDish.dish == dish) quantity = orderDish.quantity;})
        return quantity
    }
    useEffect(() => {
        if (checkIfFetched("order" || "")) {
            if (checkIfFetched(order?.restaurant || "")) {
                const restDishes = JSON.parse(sessionStorage.getItem(order?.restaurant || "") || "");
                const dishs = restDishes.filter((dish: Dish) => {
                    for (let i = 0; i < order?.dishes.length; i++) {
                        if (order?.dishes[i].dish == dish.name) {
                            return true
                        }
                    }
                    return false
                });
                setDishes(dishs)

            } else {
                fetch("/api/dishes/getDishesByRestaurant/" + order?.restaurant)
                    .then((response) => response.json())
                    .then((data: Array<Dish>) => {
                        if (data) {
                            setDishes(data.filter((dish: Dish) => {
                                for (let i = 0; i < order?.dishes.length; i++)
                                    if (order?.dishes[i].dish == dish.name)
                                        return true
                                return false
                            }))
                            sessionStorage.setItem(order.restaurant || "", JSON.stringify(data))
                        } else {
                            alert("Can't receive data from server...");
                        }
                    });
            }

        }
    }, [])
    return (<BagPopupDiv>
        {dishes.length > 0 ? <BagDiv>
            <BagTitle>Your order</BagTitle>
            <RestTitle>{order.restaurant}</RestTitle>
            <DishesDiv>
                {dishes.map((dish) => {
                    return <DishBagCard>
                        <DishIMG src={dish.img} />
                        <DishBagDetails>
                            <DishTitleQuantityDiv>
                                <DishQuantityDiv>
                                    {getQuantity(dish.name)}
                                </DishQuantityDiv>
                                <DishTitleDiv>
                                    <DishTitle>
                                        {dish.name}
                                    </DishTitle>
                                    <DishPrice>
                                        <img width="10%" src={shekel}/>{dish.price}.00
                                    </DishPrice>
                                </DishTitleDiv>
                            </DishTitleQuantityDiv>
                        </DishBagDetails>
                    </DishBagCard>
                })}
            </DishesDiv>
            <Comment>Add A Comment</Comment>
            <CommentText type="text" placeholder="Special requests, allergies, restrictions, etc." />
            <BlackBTN disabled={true}>Checkout <img width="10%" src={shekel}/>{order.price}</BlackBTN>
            <WhiteBTN>Order History</WhiteBTN>
        </BagDiv> : <>
            <img width="45px" src={bagIcon} />
            <BagText>Your bag is empty</BagText>
            <BagBTN>Order History</BagBTN>
        </>}
    </BagPopupDiv>)
}
export default BagPopup;