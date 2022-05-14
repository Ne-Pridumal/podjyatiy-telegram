import { AppDispatch } from '../store/index';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { rootState } from "../store";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector