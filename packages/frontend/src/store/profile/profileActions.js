import { createAsyncThunk } from '@reduxjs/toolkit'
import apiRequest from '../../Service/auth'


export const getProfile = createAsyncThunk(
  //action type string
  'users/profile',
  // callback function
  async (data, { dispatch }) => {
    const res = await apiRequest({
      url: 'users/profile',
      method: 'GET',
      data
    }).then((response) => {
      // dispatch(createPlayer('12344'));
      return response
    })
    return res
  })



export const getProfileTypes = createAsyncThunk(
  //action type string
  'common/userTypes',
  // callback function
  async (data, { dispatch }) => {
    const res = await apiRequest({
      url: 'usertype',
      method: 'GET',
      data
    }).then((response) => {
      // dispatch(createPlayer('12344'));
      return response
    })
    return res
  })


  export const getCurrencies = createAsyncThunk(
    //action type string
    'common/currency',
    // callback function
    async (data, { dispatch }) => {
      const res = await apiRequest({
        url: 'currency',
        method: 'GET',
        data
      }).then((response) => {
        // dispatch(createPlayer('12344'));
        return response
      })
      return res
    })

    

// export const getBrands = createAsyncThunk(
//   //action type string
//   'brands',
//   // callback function
//   async (data, { dispatch }) => {
//     const res = await apiRequest({
//       url: 'api/brands',
//       method: 'GET',
//       data
//     }).then((response) => {
//       // dispatch(createPlayer('12344'));
//       return response
//     })
//     return res
//   })

// export const getGender = createAsyncThunk(
//   //action type string
//   'gender',
//   // callback function
//   async (data, { dispatch }) => {
//     const res = await apiRequest({
//       url: 'api/gender',
//       method: 'GET',
//       data
//     }).then((response) => {
//       // dispatch(createPlayer('12344'));
//       return response
//     })
//     return res
//   })

// export const getSize = createAsyncThunk(
//   //action type string
//   'size',
//   // callback function
//   async (data, { dispatch }) => {
//     const res = await apiRequest({
//       url: 'api/size',
//       method: 'GET',
//       data
//     }).then((response) => {
//       // dispatch(createPlayer('12344'));
//       return response
//     })
//     return res
//   })
