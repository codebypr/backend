import { createSlice } from "@reduxjs/toolkit"

const initialState={
    data:[
        {
            id:'1',
            name:'Hello'
        }
    ]
}

export const dataSlice=createSlice({
    name:'data',
    initialState,
    reducers:{
        addData:(state,action)=>{
            for(let i=0; i<action.payload.length ;i++){
                const d=action.payload[i]
                state.data.push(d);
            }
        }
    }
})

export const {addData}=dataSlice.actions

export default dataSlice.reducer