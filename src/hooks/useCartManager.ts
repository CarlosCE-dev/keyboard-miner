import { increment } from "store/mainReducer";
import { useAppDispatch, useInterval } from ".";

/**
 * Cart manager for app
 */
export const useCartManager = () => {
    // The counter
    const dispatch = useAppDispatch();

    useInterval(
        () => {
            dispatch(increment());
        },
        // Delay in milliseconds or null to stop it
        1000
    )
}