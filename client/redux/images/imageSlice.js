import { createSlice } from "@reduxjs/toolkit";

//intial state
const initialState = {
    currentRealtedImage: "",
    loading: false,
    error:null,
}

const imageSlice = createSlice({
    name: "relatedImage",
    
    initialState,

    reducers: {
        imageSugesstionSet: {
            
        },
        imageSugesstionNotSet: {

        },
    }
})



//state in action