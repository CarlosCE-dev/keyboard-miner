import { useCallback, useEffect, useState } from "react";

/**
 * Use key press handler for keyboard
 */
export const useKeyPressHandler = () => {
    const [keysPress, setKeys] = useState<string[]>([]);
    /**
     * Key down event
     * @param event Keyboard event
     */
    const keyDownEvent = useCallback((event: KeyboardEvent) => {
        setKeys([...keysPress, event.key]);
    }, []);
    /**
     * Key up event
     * @param event Keyboard event
     */
    const keyUpEvent = useCallback((event: KeyboardEvent) => {
        setKeys(keysPress.filter(x => x !== event.key));
    }, []);
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
        keysPress
    }
}