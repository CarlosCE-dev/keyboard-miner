import { getStoreItems } from "data";
import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect, useState } from "react";
import { manualIncrement } from "store/mainReducer";

const store = getStoreItems();
/**
 * Use key press handler for keyboard
 */
export const useKeyPressHandler = () => {
    const [keysPress, setKeys] = useState<string[]>([]);
    const inventory = useAppSelector(x => x.main.inventory);
    const dispatch = useAppDispatch();
    
    /**
     * Key down event
     * @param event Keyboard event
     */
    const keyDownEvent = (event: KeyboardEvent) => {
        if (keysPress.includes(event.key)) return;
        
        const key = store.find(x => x.name === event.key.toLocaleUpperCase());
        if (key && inventory.some(x => !x.disabled && x.type === key.name)) {
            dispatch(manualIncrement(key));
        }

        setKeys([...keysPress, event.key]);
    };
    /**
     * Key up event
     * @param event Keyboard event
     */
    const keyUpEvent = (event: KeyboardEvent) => {
        setKeys(keysPress.filter(x => x !== event.key));
    };
    /**
     * Adds key down event 
     */
    useEffect(() => {
        document.addEventListener("keydown", keyDownEvent, false);
        return () => {
            document.removeEventListener("keydown", keyDownEvent, false);
        };
    }, [keyDownEvent]);
    /**
     * Adds key up event 
     */
    useEffect(() => {
        document.addEventListener("keyup", keyUpEvent, false);
        return () => {
            document.removeEventListener("keyup", keyUpEvent, false);
        };
    }, [keyUpEvent]);

    return {
        keysPress,
        inventory
    }
}