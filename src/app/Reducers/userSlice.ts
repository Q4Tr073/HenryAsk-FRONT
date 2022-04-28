import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { useAppSelector } from "../hooks";
import axios from "axios";
interface User {
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  city: string;
  role: number;
  user_name: string;
  profile_picture: string;
  biography: string;
  password: string;
  posts: Array<string>;
  answers: Array<string>;
  comments: Array<string>;
  own_henry_coin: number;
  give_henry_coin: number;
  theoric: Array<string>;
  excersices: Array<string>;
}
interface InitialState {
  data: User;
  loading: string;
}

const initialState: InitialState = {
  data: {
    first_name: "",
    last_name: "",
    email: "",
    country: "",
    city: "",
    role: 0,
    user_name: "",
    profile_picture: "",
    biography: "",
    password: "",
    posts: [],
    answers: [],
    comments: [],
    own_henry_coin: 0,
    give_henry_coin: 0,
    theoric: [],
    excersices: [],
  },
  loading: "",
};
export const fetchUserById = createAsyncThunk(
  "user/fetchUserById",
  async (id: string) => {
    console.log("A");
    const response = await (await axios.get(`/user/${id}`)).data;
    return response;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.data = {
        first_name: "",
        last_name: "",
        email: "",
        country: "",
        city: "",
        role: 0,
        user_name: "",
        profile_picture: "",
        biography: "",
        password: "",
        posts: [],
        answers: [],
        comments: [],
        own_henry_coin: 0,
        give_henry_coin: 0,
        theoric: [],
        excersices: [],
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state = action.payload;
    });
  },
});
export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
