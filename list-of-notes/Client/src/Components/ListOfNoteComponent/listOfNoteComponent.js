import React,{useEffect, useState} from 'react'
import Alert from '../AlertComponent/alert'
import Note from '../noteComponent/noteComponent'
import { useSelector } from 'react-redux'
import {ListOfNotesWrapper} from './listOfNoteDesign'
import PreviewNote from '../PreviewComponent/preview'



const ListOfNotes = ({deletealert,setdeletealert,setpreview,preview}) => {
    const noteList=useSelector((state)=>state.notes)
    const [noteInformation, setnoteInformation] = useState([])
    const displayNotes=noteList.map((notes,key)=>{
        return(
            <Note   key={key}
                    noteId={notes.noteId}
                    title={notes.title}
                    note={notes.note}
                    dateCreate={notes.dateCreated}
                    backGround={notes.backGround}
                    setdeletealert={setdeletealert}
                    setpreview={setpreview}
                    setnoteInformation={setnoteInformation}/>
        )
    })

   
    return (
        <>
            <ListOfNotesWrapper>
            {noteList.length === 0 ?  "NO LIST FOUND" :displayNotes}
            {preview ? <PreviewNote preview={preview} 
                        setpreview={setpreview}
                        setnoteInformation={setnoteInformation}
                        noteInformation={noteInformation}/> :""}
            {deletealert ? <Alert alertMessage="Note Deleted"
                            alertClassname="delete"
                            setdeletealert={setdeletealert} /> : ""}
            
            </ListOfNotesWrapper>
            
        </>
    )
}

export default ListOfNotes
