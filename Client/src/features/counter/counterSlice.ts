import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@app/store';

interface CounterState {
	currentCount: number;
}

const initialState: CounterState = {
	currentCount: 0,
};

const counterSlice = createSlice({
	name: 'counter',
	initialState: initialState,
	reducers: {
		incrementCounter: (state) => {
			state.currentCount += 1;
		},
	},
});

export const { incrementCounter } = counterSlice.actions;
export const selectCurrentCount = (state: RootState) => state.counter.currentCount;
export default counterSlice.reducer;
