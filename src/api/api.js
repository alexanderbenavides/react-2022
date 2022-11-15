import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getService } from './api-config';
let stateType = '';
let singleRecord = false;
export const fetchService = createAsyncThunk('', async (params) => {
  stateType = params.stateType;
  singleRecord = params.singleRecord;
  return getService(params.path); 
});

const initialState = (type) => {
  return {
    [type]: [],
    isLoading: true,
    finishWithErrors: false,
    errorMessage: 'Hemos tenido problemas solicitando los datos'
  }
}
const PostSlice = createSlice({
  name: 'fetchData',
  initialState: initialState('users'),
  reducers: {
    clearData: state => {
      state[stateType] = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state[stateType] = state[stateType].filter(param => param.id !== itemId);
    },
  },
  extraReducers: {
    [fetchService.pending]: state => {
      state.isLoading = true;
    },
    [fetchService.fulfilled]: (state, action) => {
      let data = [];
      if (singleRecord) {
        const emptyObj =  Object.keys(action.payload).length === 0;
        state.finishWithErrors = emptyObj;
        data = action.payload;
      }  else {
        const isArray = Array.isArray(action.payload);
        data = isArray ? action.payload : [];
        state.finishWithErrors = !isArray;
      }
      state.isLoading = false;
      state[stateType] = data;
    },
    [fetchService.rejected]: (state) => {
      state.isLoading = false;
      state[stateType] = singleRecord ? {} : [];
    }
  }
})
export const { clearData, removeItem } = PostSlice.actions;
export default PostSlice.reducer;
