import { IInventory } from "interfaces";
import { firstRowTextKeys, secondRowTextKeys, thirdRowTextKeys } from "./keyboardText";

/**
 * Get initial inventory state
 * @returns A array of keys
 */
export const getInitialInventoryState = () : IInventory[] => {
    const items :IInventory[] = [];
    items.push(...firstRowTextKeys.map((x) => {
        const item: IInventory = {
            amount: 0,
            type: x,
            disabled: true
        }
        return item;
    }));

    items.push(...secondRowTextKeys.map((x) => {
        const item: IInventory = {
            amount: 0,
            type: x,
            disabled: x !== "A" 
        }
        return item;
    }));

    items.push(...thirdRowTextKeys.map((x) => {
        const item: IInventory = {
            amount: 0,
            type: x,
            disabled: true
        }
        return item;
    }));

    return items;
}