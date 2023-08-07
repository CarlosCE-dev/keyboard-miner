import { InventoryTypes } from "types";

export interface IPriceKey {
    name: InventoryTypes;
    price: number;
    costMultiplication: number;
}