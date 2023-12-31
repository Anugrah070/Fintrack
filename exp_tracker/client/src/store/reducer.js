import{createSlice} from '@reduxjs/toolkit'

const initialState={
    categories:[],
    transaction:[]
}

const expenseSlice=createSlice({
    name:'expense',
    initialState,
    reducers:{
        getTransactions:(state)=>{

        }
    }
})

const{getTransactions}=expenseSlice.actions
export default expenseSlice.reducer