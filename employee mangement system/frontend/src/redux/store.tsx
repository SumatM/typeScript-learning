import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from './employeeReducer'
import totalPagesReducer from './totalPagesReducer';

const store = configureStore({
    reducer: {
        employeeReducer,
        totalPagesReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export default store;