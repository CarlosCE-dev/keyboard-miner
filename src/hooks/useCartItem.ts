import { IInventory, IKey } from "interfaces";
import { useAppDispatch, useAppSelector } from ".";
import { decrement, enableInventory, incrementInventory } from "../store/mainReducer";

/**
 * Use cart item hook.
 * @param item The current inventory selected
 * @param data The key item 
 */
export const useCartItem = ( item:IInventory, data:IKey ) => {
    const dispatch = useAppDispatch();
    const money = useAppSelector(x => x.main.value);
    /**
     * Multiplication value of item
     */
    const multiplicateValue = item.amount !== 0 ? data.price * item.amount : data.price;
    /**
     * Price value of item
     */
    const price = item.amount !== 0 ? multiplicateValue * (data.costMultiplication * item.amount) : multiplicateValue;
    /**
     * Enable price of item
     */
    const enablePrice = data.price * 10;
    /**
     * On buy item method
     */
    const onBuyItem = () => {
        dispatch(decrement(price));
        dispatch(incrementInventory(item.type));
    }
    /**
     * On enable button click
     */
    const onEnableButtonClick = () => {
        dispatch(decrement(enablePrice));
        dispatch(enableInventory(item.type));
    }

    return {
        price,
        enablePrice,
        enableButton: money < enablePrice,
        disabledButton: money < price,
        onBuyItem,
        onEnableButtonClick
    }
}