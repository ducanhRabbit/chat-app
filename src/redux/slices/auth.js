import { createSlice } from '@reduxjs/toolkit'
import axios from '../../axios/axios';

const initialState = {
    isLoggedIn: false,
    token: "",
    isLoading: false,
    user: null,
    user_id: null,
    email: "",
    error: false,
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn(state, action) {
            state.isLoggedIn = action.payload.isLoggedIn;
            state.token = action.payload.token;
            state.user_id = action.payload.user_id;
        },
        signOut(state, action) {
            state.isLoggedIn = false;
            state.token = "";
            state.user_id = null;
        },
        updateRegisterEmail(state, action) {
            state.email = action.payload.email;
        },
    }
});

export const {logIn,signOut,updateRegisterEmail } = auth.actions

export default auth.reducer

// Thunk

export function Login(formValue){
    return async (dispatch,getState) =>{
            try{
                const res = await axios.post('/auth/login',{
                    ...formValue
                },{
                    headers:{
                        "Content-Type": "application/json",
                    }
                })
                
                dispatch(auth.actions.logIn({
                    isLoggedIn:true,
                    token: res.data.token
                }))
            }catch(err){
                console.log(err)
            }
       
    }
}