import {configureStore} from '@reduxjs/toolkit'
import noteReducer from './slice'
import * as local from '../localStorage/localStorage'


// const preloadedState = {notes:[{
//         noteId: "123",
//         title: "title123",
//         note: "Note123",
//         dateCreated:"NGAYON",
//         backGround:"red"
//   }]}

const preloadedState=local.loadState();
  console.log(preloadedState)
 export default configureStore({
    reducer:{
        notes:noteReducer,
    },
    preloadedState
})