import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    sideBar: {
        open: false,
        type: "CONTACT"
    }
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleSideBar: (state, action) => {
            state.sideBar.open = !state.sideBar.open
        },
        updateStateSideBarType: (state, action) => {
            state.sideBar.type = action.payload.type
        }
    }
});

export default appSlice.reducer

export function ToggleSidebar() {
    return async (dispatch) => {
        dispatch(appSlice.actions.toggleSideBar())
    }
}
export function UpdateSidebarType(type) {
    return async (dispatch, getState) => {
      dispatch(appSlice.actions.updateStateSideBarType({ type }));
    };
  }


// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   sideBar: {
//     open: false,
//     type: "CONTACT", 
//   },
// };

// const slice = createSlice({
//   name: "app",
//   initialState,
//   reducers: {

//     toggleSideBar(state) {
//       state.sideBar.open = !state.sideBar.open;
//     },
//     updateSideBarType(state, action) {
//       state.sideBar.type = action.payload.type;
//     },
//   },
// });


// export default slice.reducer;




// export function ToggleSidebar() {
//   return async (dispatch, getState) => {
//     dispatch(slice.actions.toggleSideBar());
//   };
// }






