import { getStoreItems } from "data";
import { IInventory } from "interfaces";

/**
 * Sum all the inventory totals
 * @param inventory Current list of inventory
 * @returns Returns total for inventory
 */
export const sumInventoryTotals = (inventory:IInventory[]) => {
    return inventory.map(x => {
        const item = getStoreItems().find(y => x.type === y.name);
        if (!item) return 0;
        return x.amount * item.gainValue;
    }).reduce((a, b) => a + b);
}