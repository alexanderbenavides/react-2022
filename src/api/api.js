import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getService } from './api-config';
let dataType = '';
let isArray = true;
export const fetchService = createAsyncThunk('', async (params) => {
  dataType = params.dataType;
  isArray = params.isArray;
  return getService(params.path); 
});

const initialState = (type) => {
  return {
    [type]: [],
    isLoading: true,
    finishWithErrors: false,
    errorMessage: 'Hemos tenido problemas'
  }
}
const PostSlice = createSlice({
  name: 'fetchData',
  initialState: initialState('users'),
  reducers: {
    clearData: state => {
      state[dataType] = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state[dataType] = state[dataType].filter(param => param.id !== itemId);
    },
  },
  extraReducers: {
    [fetchService.pending]: state => {
      state.isLoading = true;
    },
    [fetchService.fulfilled]: (state, action) => {
      let data = [];
      if (isArray ) {
        const hasArr = Array.isArray(action.payload);
        data = hasArr ? action.payload : [];
        state.finishWithErrors = !hasArr;
      }  else {
        const emptyObj =  Object.keys(action.payload).length === 0;
        state.finishWithErrors = emptyObj;
        data = action.payload;
      }
      state.isLoading = false;
      state[dataType] = data;
    },
    [fetchService.rejected]: (state) => {
      state.isLoading = false;
      state[dataType] = isArray ? [] : {};
    }
  }
})
export const { clearData, removeItem } = PostSlice.actions;
export default PostSlice.reducer;
