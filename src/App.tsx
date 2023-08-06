import { useEffect } from "react";
import { MainKeyboard } from "./components/Keyboard/MainKeyboard"
import { loadStart } from "store/mainReducer";
import { useAppDispatch } from "hooks";

export const App = () => {
    const dispatch = useAppDispatch();

	useEffect(() => {
        dispatch(loadStart());
    }, []);
	
	return (
		<>
			<MainKeyboard />
		</>
	)
}