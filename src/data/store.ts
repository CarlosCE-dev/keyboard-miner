import { firstRowTextKeys, secondRowTextKeys, thirdRowTextKeys } from "data";
import { IKey } from "interfaces";

/**
 * Get store items
 * @returns A list of key available in the store
 */
export const getStoreItems = () => {
    const items : IKey[] = [];
    items.push(...firstRowTextKeys.map((x) => {
        const item: IKey = {
            costMultiplication: 3.50,
            name: x,
            price: 70,
            gainValue: 1,
        }
        return item;
    }));

    items.push(...secondRowTextKeys.map((x) => {
        const item: IKey = {
            costMultiplication: 3.50,
            name: x,
            price: 70,
            gainValue: 1,
        }
        return item;
    }));

    items.push(...thirdRowTextKeys.map((x) => {
        const item: IKey = {
            costMultiplication: 3.50,
            name: x,
            price: 70,
            gainValue: 1,
        }
        return item;
    }));

    return items;
}