import React,{useState} from 'react'
import * as icon from 'react-icons/all'
import { useDispatch } from 'react-redux'
import { add_note } from '../../Redux/slice'
import {NewNoteWrapper,NewNoteBody,
    NewNoteHeader,NewNoteInpuTTitle,NewNoteTextArea,
    NewNoteFooter,NewNoteSaveButton,NewNoteBgColor,
    NewNoteRadioButton,NewNoteRadioButtonWrapper} from './newNoteDesign'
    
const NewNote = ({setopenNewNote,openNewNote,setaddalert}) => {
    const dispatch=useDispatch();

    const [bgColor, setbgColor] = useState("")
    const color=["","red","green","yellow"];
    const [title, settitle] = useState("")
    const [note, setnote] = useState("")
    const date=new Date().toLocaleString()

    const noteTitle=()=>{
        if(title===""){
            return "No Title"
        }else
            return title
    }
    const addNewNote=()=>{       
        dispatch( add_note({
            noteId: Date.now(),
            title:`${title===""? "No Title":title}`,
            note:note,
            dateCreated:date,
            backGround:bgColor
        }))
        setopenNewNote(false)
        setaddalert(true)
    }

    const radioColor=color.map((color,index)=>{
        return(
            <NewNoteBgColor key={index}>
                <NewNoteRadioButton name="bgColor" type="radio"  onChange={()=>{setbgColor(color)}} defaultChecked={index===0}/> 
                {color===""?"Default":color.charAt(0).toUpperCase()+color.slice(1)}
            </NewNoteBgColor>
        )
    })
    return (
        <>
            <NewNoteWrapper>
                <NewNoteBody className={bgColor}>
                    <NewNoteHeader>
                        <NewNoteInpuTTitle placeholder="Title Here" value={title} onChange={(e)=>{settitle(e.target.value)}} />
                        <icon.IoCloseSharp className="close" onClick={()=>{setopenNewNote(!openNewNote)}}/>
                    </NewNoteHeader>
                    Background Color:
                    <NewNoteRadioButtonWrapper>
                        {radioColor}
                    </NewNoteRadioButtonWrapper>
                    <NewNoteTextArea placeholder="Note Here" value={note} onChange={(e)=>{setnote(e.target.value)}}/>
                    <NewNoteFooter>
                        <NewNoteSaveButton onClick={addNewNote}>
                            <icon.AiFillSave className="save"/>
                            Save Note
                        </NewNoteSaveButton>
                    </NewNoteFooter>
                </NewNoteBody>
            </NewNoteWrapper>
            
        </>
    )
}

export default NewNote
