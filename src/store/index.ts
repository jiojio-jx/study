import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

/**
 * 
 configureStore() 包裹createStore，并集成了redux-thunk、Redux DevTools Extension，默认开启
 createReducer()  创建一个reducer，action type 映射到 case reducer 函数中，不用写switch-case，并集成immer
 createAction()   创建一个action，传入动作类型字符串，返回动作函数
 createSlice()    创建一个slice，包含 createReducer、createAction的所有功能
 createAsyncThunk()  创建一个thunk，接受一个动作类型字符串和一个Promise的函数
 * 
 */
