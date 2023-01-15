import { Chef, Restaurant } from "../Types/Types";

const date = new Date();
export function isNewRestaurant(restaurant: any) {
    const restDate = restaurant.openingDate.split("/");
    const restDateNum = [0, 0, 0];
    for (let i = 0; i < restDate.length; i++)
        restDateNum[i] = parseInt(restDate[i]);
    if (date.getFullYear() - restDateNum[2])
        return false;
    if (date.getMonth() - restDateNum[1] + 1)
        return false;
    return true
}
export function isNewChef(chef: any) {
    const chefDate = chef.createdAt.substring(0,10).split("-");
    const chefDateNum = [0, 0, 0];
    for (let i = 0; i < chefDate.length; i++)
        chefDateNum[i] = parseInt(chefDate[i]);
    if (date.getFullYear() - chefDateNum[0])
        return false;
    if (date.getMonth() - chefDateNum[1] + 1)
        return false;
    return true
}

export function isOpenNow(restaurant: Restaurant) {
    const restOpenHours = restaurant.openingHours.split(":");
    const restCloseHours = restaurant.closingHours.split(":");
    const restOpenHoursNum = [0, 0];
    const restCloseHoursNum = [0, 0];
    for (let i = 0; i < restCloseHours.length; i++) {
        restCloseHoursNum[i] = parseInt(restCloseHours[i]);
        restOpenHoursNum[i] = parseInt(restOpenHours[i]);
    }
    if (restCloseHoursNum[0] > restOpenHoursNum[0]) {
        if (date.getHours() > restCloseHoursNum[0])
            return false;
        if (date.getHours() == restCloseHoursNum[0] && date.getMinutes() > restCloseHoursNum[1])
            return false;
        if (date.getHours() < restOpenHoursNum[0])
            return false
        if (date.getHours() == restOpenHoursNum[0] && date.getMinutes() < restOpenHoursNum[1])
            return false;
    } else {
        if (date.getHours() > restOpenHoursNum[0])
            return true
        if (date.getHours() == restOpenHoursNum[0] && date.getMinutes() > restOpenHoursNum[1])
            return true;
        if (date.getHours() < restCloseHoursNum[0])
            return true
        if (date.getHours() == restCloseHoursNum[0] && date.getMinutes() < restCloseHoursNum[1])
            return true;

        return false;
    }

    return true
}

export function mostPopular(Restaurants: Array<Restaurant>): Array<Restaurant> {
    let mostVisits = [-1, -1, -1]
    let result = []
    for (let i = 0; i < Restaurants.length; i++) {
        if (Restaurants[i].visits > mostVisits[0]) {
            mostVisits[2] = mostVisits[1]
            mostVisits[1] = mostVisits[0]
            mostVisits[0] = Restaurants[i].visits
        } else {
            if (Restaurants[i].visits > mostVisits[1]) {
                mostVisits[2] = mostVisits[1]
                mostVisits[1] = Restaurants[i].visits
            }
            else if (Restaurants[i].visits > mostVisits[2]) {
                mostVisits[2] = Restaurants[i].visits
            }
        }
    }
    for (let i = 0; i < Restaurants.length; i++)
        if (Restaurants[i].visits == mostVisits[0]) {
            result.push(Restaurants[i])
            mostVisits[0] = i;
            break;
        }
    for (let i = 0; i < Restaurants.length; i++)
        if (Restaurants[i].visits == mostVisits[1] && i != mostVisits[0]) {
            result.push(Restaurants[i])
            mostVisits[1] = i;
            break;
        }
    for (let i = 0; i < Restaurants.length; i++)
        if (Restaurants[i].visits == mostVisits[2] && i != mostVisits[1]) {
            result.push(Restaurants[i])
            break
        }
    return result
}
export function mostPopularChefs(Chefs: Array<Chef>): Array<Chef> {
    let mostVisits = [-1, -1, -1]
    let result = []
    for (let i = 0; i < Chefs.length; i++) {
        if (Chefs[i].visits > mostVisits[0]) {
            mostVisits[2] = mostVisits[1]
            mostVisits[1] = mostVisits[0]
            mostVisits[0] = Chefs[i].visits
        } else {
            if (Chefs[i].visits > mostVisits[1]) {
                mostVisits[2] = mostVisits[1]
                mostVisits[1] = Chefs[i].visits
            }
            else if (Chefs[i].visits > mostVisits[2]) {
                mostVisits[2] = Chefs[i].visits
            }
        }
    }
    for (let i = 0; i < Chefs.length; i++)
        if (Chefs[i].visits == mostVisits[0]) {
            result.push(Chefs[i])
            mostVisits[0] = i;
            break;
        }
    for (let i = 0; i < Chefs.length; i++)
        if (Chefs[i].visits == mostVisits[1] && i != mostVisits[0]) {
            result.push(Chefs[i])
            mostVisits[1] = i;
            break;
        }
    for (let i = 0; i < Chefs.length; i++)
        if (Chefs[i].visits == mostVisits[2] && i != mostVisits[1]) {
            result.push(Chefs[i])
            break
        }
    return result
}

export const filtersArray = [[true, false, false, false, false],
[false, true, false, false, false],
[false, false, true, false, false],
[false, false, false, true, false],
[false, false, false, false, true]]
export const filtersArrayChefs = [[true, false, false],
[false, true, false],
[false, false, true]]