import { firstRowTextKeys, getPriceItems, secondRowTextKeys, thirdRowTextKeys } from "data";
import { IKey } from "interfaces";
import { InventoryTypes } from "types";


const getDefaultPrice = (name:InventoryTypes) : IKey => {
    return {
        costMultiplication: 1,
        name,
        price: 99999,
        gainValue: 1
    }
}

/**
 * Get store items
 * @returns A list of key available in the store
 */
export const getStoreItems = () => {
    const items : IKey[] = [];
    items.push(...firstRowTextKeys.map((x) => {
        const { costMultiplication, price, gainValue } = getPriceItems.find(y => x === y.name) ?? getDefaultPrice(x);
        const item: IKey = {
            costMultiplication,
            name: x,
            price,
            gainValue,
        }
        return item;
    }));

    items.push(...secondRowTextKeys.map((x) => {
        const { costMultiplication, price, gainValue } = getPriceItems.find(y => x === y.name) ?? getDefaultPrice(x);
        const item: IKey = {
            costMultiplication,
            name: x,
            price,
            gainValue,
        }
        return item;
    }));

    items.push(...thirdRowTextKeys.map((x) => {
        const { costMultiplication, price, gainValue } = getPriceItems.find(y => x === y.name) ?? getDefaultPrice(x);
        const item: IKey = {
            costMultiplication,
            name: x,
            price,
            gainValue,
        }
        return item;
    }));

    return items;
}