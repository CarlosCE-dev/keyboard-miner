import { IInventory, IKey } from "interfaces";
import { useAppDispatch, useAppSelector } from ".";
import { decrement, enableInventory, incrementInventory } from "../store/mainReducer";

export const useCartItem = ( item:IInventory, data:IKey ) => {
    const dispatch = useAppDispatch();
    const money = useAppSelector(x => x.main.value);

    const multiplicateValue = item.amount !== 0 ? data.price * item.amount : data.price;

    const price = item.amount !== 0 ? multiplicateValue * (data.costMultiplication * item.amount) : multiplicateValue;
    const enablePrice = data.price * 10;

    const onBuyItem = () => {
        dispatch(decrement(price));
        dispatch(incrementInventory(item.type));
    }

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