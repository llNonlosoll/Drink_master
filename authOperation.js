import { createAsyncThunk } from '@reduxjs/toolkit';
import { allusion } from './src/api/allusion';
import Notiflix from 'notiflix';
// import { selectAuthAccessToken, selectUserLoading } from './src/redux/selectors.js';

export const setToken = token => {
  allusion.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
export const clearToken = () => {
  allusion.defaults.headers.common['Authorization'] = ``;
};



export const logoutThunk = createAsyncThunk('@@auth/logout', async () => {
  try {
    const res = await allusion.post('users/logout');
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    clearToken();
    return res;
  } catch (error) {
    const errorMessage = error.response.data.message;
    Notiflix.Notify.failure('Respond from server is ' + errorMessage);
  }
});

// export const refreshThunk = createAsyncThunk(
//   '@@auth/refresh',
//   async (_, thunkAPI) => {
//     const refreshToken = selectAuthAccessToken(thunkAPI.getState());
//     setToken(refreshToken);
//     try {
//       const res = await allusion.post('users/refresh');
//       return res.data;
//     } catch (error) {
//       const errorMessage = error.response.data.message;
//       Notiflix.Notify.failure('Respond from server is ' + errorMessage);
//     }
//   }
// );

// export const getCurrentUserThunk = createAsyncThunk(
//   '@@auth/current',
//   async (_, thunkAPI) => {
//     try {
//       const res = await allusion.get('users/current');
//       return res.data;
//     } catch (error) {
//       const errorMessage = error.response.data.message;
//       Notiflix.Notify.failure('Respond from server is ' + errorMessage);
//     }
//   }
// );


