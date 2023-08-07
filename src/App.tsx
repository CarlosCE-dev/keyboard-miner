import { useEffect } from "react";
import { MainKeyboard } from "./components/Keyboard/MainKeyboard"
import { loadStart } from "store/mainReducer";
import { useAppDispatch, useCartManager } from "hooks";
import { MoneyViewer } from "components/Money/MoneyViewer";
import { Shopper } from "components/Detail/Shopper";

export const App = () => {
    const dispatch = useAppDispatch();

	useEffect(() => {
        dispatch(loadStart());
    }, []);

    useCartManager();
	
	return (
		<>
			<Shopper />
			<MoneyViewer />
			<MainKeyboard />
		</>
	)
}