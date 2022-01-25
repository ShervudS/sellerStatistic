import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from './store';

export interface IInitialState {
    isModalOpen: boolean;
    wbToken: string;
}

const initialState: IInitialState = {
    isModalOpen: false,
    wbToken: '',
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsModalOpen: (state, action) => {
            state.isModalOpen = action.payload;
        },
        setIsWbToken: (state, action) => {
            state.wbToken = action.payload;
        },
    },
});

export const selectApp = (state: AppState) => state.app;

export const { setIsModalOpen, setIsWbToken } = appSlice.actions;

export default appSlice.reducer;
