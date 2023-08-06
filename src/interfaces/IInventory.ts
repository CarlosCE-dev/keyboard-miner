import { InventoryTypes } from "types";

/**
 * Current inventory in store application
 */
export interface IInventory {
    /**
     * List of keyboard keys
     */
    type: InventoryTypes;
    /**
     * Current amount of keys purchase
     */
    amount: number;
    /**
     * Indicates if key is disabled
     */
    disabled: boolean;
}
