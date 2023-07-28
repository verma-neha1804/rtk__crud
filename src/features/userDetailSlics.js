import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


//create action
export const createUser = createAsyncThunk("create user", async (data, { rejectWithValue }) => {
    const response = await fetch("https://64b8f03179b7c9def6c049db.mockapi.io/CRUD",
        {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }
    )
    try {
        const result = await response.json
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})

//read
export const showUser = createAsyncThunk("showUser", async (args,{rejectWithValue})=>{
    const response= await fetch("https://64b8f03179b7c9def6c049db.mockapi.io/CRUD")
    try{
        const result=await response.json()
        return result
    }
    catch(error){
        return rejectWithValue(error)
    }
})

//delete
export const deleteUser = createAsyncThunk("deleteUser", async (id,{rejectWithValue})=>{
    const response= await fetch(`https://64b8f03179b7c9def6c049db.mockapi.io/CRUD/${id}`,{
        method:"DELETE"
    })
    try{
        const result=await response.json()
        return result
    }
    catch(error){
        return rejectWithValue(error)
    }
})

//update
export const updateUser = createAsyncThunk("UpdateUser", async (data, { rejectWithValue }) => {
    const response = await fetch(`https://64b8f03179b7c9def6c049db.mockapi.io/CRUD/${data.id}`,
        {
            method: "PUT",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }
    )
    try {
        const result = await response.json
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
        searchData:[],
    },

    reducers: {
        searchUser: (state, action) => {
          console.log(action.payload);
          state.searchData = action.payload;
        },
      },
    extraReducers: {
        [createUser.pending]: (state) => {
            state.loading = true
        },
        [createUser.fulfilled]: (state, action) => {
            state.loading = false
            state.users.push(action.payload)
        },
        [createUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [showUser.pending]: (state) => {
            state.loading = true
        },
        [showUser.fulfilled]: (state, action) => {
            state.loading = false
            state.users=action.payload
        },
        [showUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [deleteUser.pending]: (state) => {
            state.loading = true
        },
        [deleteUser.fulfilled]: (state, action) => {
            state.loading = false
            const {id}=action.payload
            if(id){
                state.users=state.users.filter((element)=>element.id !== id)
            }
        },
        [deleteUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [updateUser.pending]: (state) => {
            state.loading = true
        },
        [updateUser.fulfilled]: (state, action) => {
            state.loading = false
           state.users=state.users.map((element)=>
            element.id === action.payload.id ? action.payload: element
           )
        },
        [updateUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export default userDetail.reducer
export const { searchUser } = userDetail.actions;