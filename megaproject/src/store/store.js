import configureStore from 'react-redux'
import { authSlice } from './authSlice'

const store = configureStore({
  reducers: {
    auth: authSlice,
  }
})

export default store