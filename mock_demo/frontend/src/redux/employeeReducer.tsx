import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Employee } from "../utils/getEmployeeData";

const employeeSlice = createSlice({
    name: 'employeeData',
    initialState: { value: [] as Employee[] },
    reducers: {
        allemployee: (state, action) => {
            state.value = action.payload;
        },
        addNewEmployee: (state, action: PayloadAction<Employee>) => {
            state.value.push(action.payload);
        }


    }
})

export default employeeSlice.reducer;
export const { allemployee, addNewEmployee } = employeeSlice.actions;
