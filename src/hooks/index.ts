export { useKeyPressHandler } from './useKeyPressHandler';
export { useCartItem } from './useCartItem';
export { useCartManager } from './useCartManager';
export { useInterval } from './useInterval';

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
