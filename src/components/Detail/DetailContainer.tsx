import { Button, Stack } from "@mui/material"
import { getStoreItems } from "data";
import { useCartItem } from "hooks";
import { IInventory, IKey } from "interfaces";
import { CSSProperties, useMemo } from "react";

const cartItems = getStoreItems();
interface Props {
    item: IInventory;
}
export const DetailContainer = ({ item }: Props) => {
    const data = useMemo(() => cartItems.find(x => x.name === item.type) as IKey, [item]);
    const { price, disabledButton, enablePrice, enableButton, onBuyItem, onEnableButtonClick } = useCartItem(item, data);
    const description = `Bought: ${item.amount}`;

    const divButtons: CSSProperties = {
        marginLeft: 'auto'
    }

    return (
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" alignItems="center">
            <div>
               { description }
            </div>
            <div style={divButtons}>
                {
                    item.disabled &&
                    <Button color="success" disabled={enableButton} onClick={onEnableButtonClick}>Enable {enablePrice.toFixed(2)}</Button>
                }
                {
                    !item.disabled &&
                    <Button disabled={disabledButton} onClick={onBuyItem}>Buy {price.toFixed(2)}</Button>
                }
            </div>
        </Stack>
    )
}
