import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../store/store';
import { IOrders, ISales } from '../../types/types';

export interface IInitialState {
    isModalOpen: boolean;
    isDarkMode: boolean;
    wbToken: string;
    wbOrders: Array<IOrders>;
    wbSales: Array<ISales>;
}

const initialState: IInitialState = {
    isModalOpen: false,
    isDarkMode: false,
    wbToken: '',
    wbOrders: [],
    wbSales: [],
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsModalOpen: (state, action) => {
            state.isModalOpen = action.payload;
        },
        setIsDarkMode: (state, action) => {
            state.isDarkMode = action.payload;
        },
        setIsWbToken: (state, action) => {
            state.wbToken = action.payload;
        },
        setWbOrders: (state, action) => {
            state.wbOrders = action.payload;
        },
        setWbSales: (state, action) => {
            state.wbSales = action.payload;
        },
    },
});

export const selectApp = (state: AppState) => state.app;

export const {
    setIsModalOpen,
    setIsDarkMode,
    setIsWbToken,
    setWbOrders,
    setWbSales,
} = appSlice.actions;

export default appSlice.reducer;
