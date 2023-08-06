import { InventoryTypes } from "types";

/**
 * Key item props
 */
export interface IKey {
    /**
     * Basic price for the key
     */
    price: number;
    /**
     * Cost multiplication for key
     */
    costMultiplication: number;
    /**
     * Name of the key
     */
    name: InventoryTypes;
    /**
     * Gain value for a item
     */
    gainValue: number;
}