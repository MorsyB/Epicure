import { Restaurant } from "../Types/Types";

const date = new Date();
export function isNewRestaurant(restaurant: Restaurant) {
    const restDate = restaurant.date.split("/");
    const restDateNum = [0, 0, 0];
    for (let i = 0; i < restDate.length; i++)
        restDateNum[i] = parseInt(restDate[i]);
    if (date.getFullYear() - restDateNum[2])
        return false;
    if (date.getMonth() - restDateNum[1] + 1)
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

export const filtersArray = [[true, false, false, false, false],
[false, true, false, false, false],
[false, false, true, false, false],
[false, false, false, true, false],
[true, false, false, false, true]]
export const filtersArrayChefs = [[true, false, false],
[false, true, false],
[false, false, true]]