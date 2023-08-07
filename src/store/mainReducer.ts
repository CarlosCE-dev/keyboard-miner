import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getInitialInventoryState } from 'data';
import { sumInventoryTotals } from 'helpers';
import { IInventory, IKey } from 'interfaces';
import { InventoryTypes } from 'types';

/**
 * Main state of store
 */
interface MainState {
    /**
     * Current money of user
     */
    value: number;
    /**
     * Inventory of main reducer
     */
    inventory: IInventory[];
    /**
     * Current item selected
     */
    currentSelected: InventoryTypes;
}
/**
 * Initial state
 */
const initialState: MainState = {
    value: 0,
    inventory: getInitialInventoryState(),
    currentSelected: "A"
}
/**
 * Basic main slice
 */
export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        manualIncrement: (state, action: PayloadAction<IKey>) => {
            state.value = state.value + action.payload.gainValue;
            localStorage.setItem("data", JSON.stringify({ value: state.value, inventory: state.inventory }));
        },
        increment: (state) => {
            state.value = state.value + sumInventoryTotals(state.inventory);
            localStorage.setItem("data", JSON.stringify({ value: state.value, inventory: state.inventory }));
        },
        decrement: (state, action: PayloadAction<number | undefined>) => {
            state.value = state.value - (action.payload ?? 1)
            localStorage.setItem("data", JSON.stringify({ value: state.value, inventory: state.inventory }));
        },
        incrementInventory: (state, action: PayloadAction<InventoryTypes>) => {
            state.inventory = state.inventory.map((x) => {
                if (x.type === action.payload){
                    x.amount = x.amount + 1;
                }
                return x;
            });
            localStorage.setItem("data", JSON.stringify({ value: state.value, inventory: state.inventory }));
        },
        loadStart: (state) => {
            const data = localStorage.getItem('data');
            if (!data) return;
            const item = JSON.parse(data) as MainState;
            
            if (!item) return;
            state.inventory = item.inventory;
            state.value = item.value;
        },
        selectItem: (state, action: PayloadAction<InventoryTypes>) => {
            state.currentSelected = action.payload;
        },
        enableInventory: (state, action: PayloadAction<InventoryTypes>) => {
            state.inventory = state.inventory.map((x) => {
                if (x.type === action.payload){
                    x.disabled = false;
                }
                return x;
            });
            localStorage.setItem("data", JSON.stringify({ value: state.value, inventory: state.inventory }));
        }
    },
})
/**
 * Main reduces actions
 */
export const { increment, decrement, incrementInventory, loadStart, manualIncrement, selectItem, enableInventory } = mainSlice.actions;
/**
 * Main slice reducer
 */
export default mainSlice.reducer;