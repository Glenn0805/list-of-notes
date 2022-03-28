import React,{useState,useEffect} from "react";
import Header from "./Components/HeaderComponent/headerComponent";
import ListOfNotes from './Components/ListOfNoteComponent/listOfNoteComponent'
import Footer from './Components/FooterComponent/footerComponent'
import {useSelector} from 'react-redux'
import store from "./Redux/store";
import * as local from './localStorage/localStorage'
function App() {
  const [addalert, setaddalert] = useState(false)
  const [deletealert, setdeletealert] = useState(false)
  const [preview, setpreview] = useState(false)
  const noteList=useSelector((state)=>state.notes)

// store.subscribe(()=>{
//   local.saveState({notes:noteList})
// })
useEffect(()=>{
  local.saveState({notes:noteList})
})

  return (
    <>
      <Header addalert={addalert} setaddalert={setaddalert}/>
      <ListOfNotes deletealert={deletealert} 
                   setdeletealert={setdeletealert}
                   setpreview={setpreview}
                   preview={preview}/>
      <Footer/>
    </>
  );
}

export default App;
