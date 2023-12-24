// import { createSlice } from "@reduxjs/toolkit"
// const initalstate={
//     carts:[]
// }
// const CartSlice=createSlice ({
//     name:"cartSlice",
//     initalstate,
//     reducers:{
//         addToCart:(state,action)=>{
          
//         },
//         removeToCart:(state,action)=>{

//         },
//         removeSingleIteams:(state,action)=>{

//         },
//         emptycartIteam:(state,action)=>{

//         }
//     }

// })
// export const { addToCart,removeToCart,removeSingleIteams ,emptycartIteam} = CartSlice.actions;
//  export default CartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit"

const initialstate = {
    carts: []
}

// card slice
const cartSlice = createSlice({
    name: "cartslice",
    initialState:initialstate,
    reducers:{
    addToCart:(state,action)=>{
        const cartindex=state.carts.findIndex((item)=>
            item.id===action.payload.id

            
        )
        if(cartindex>=0){
            state.carts[cartindex].qnty+=1;
        }
        else{
            const temp={...action.payload,qnty:1};
            state.carts=[...state.carts,temp];

        }
        
        //console.log(action);
          
    },
    removeToCart:(state,action)=>{
        const data=state.carts.filter((ele)=>ele.id!==action.payload)
        //console.log(data);
        state.carts=data;

    },
    removeSingleIteams:(state,action)=>{
        const IteamIndex_dec = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            if(state.carts[IteamIndex_dec].qnty >=1){
                state.carts[IteamIndex_dec].qnty -= 1
            }

    },
    emptycartIteam:(state,action)=>{
        state.carts = []

    }

    }
});

export const { addToCart,removeToCart,removeSingleIteams ,emptycartIteam} = cartSlice.actions;

export default cartSlice.reducer;