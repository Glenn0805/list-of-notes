import React from 'react'
import { CgMaximize } from 'react-icons/cg'
import {AiFillDelete} from 'react-icons/ai'
import {useDispatch,useSelector} from 'react-redux'
import { remove_note } from '../../Redux/slice'
import * as local from '../../localStorage/localStorage'
import { NoteWrapper, TitleWrapper, 
    NoteBodyWrapper,NoteParagraph,
    NoteFooter } from './noteComponentStyle'

const Note = ({title,note,dateCreate,backGround,noteId,setdeletealert,preview,setpreview,setnoteInformation}) => {
    const dispatch=useDispatch()
    const noteList=useSelector((state)=>state.notes)
   
    const removeNote=()=>{
        dispatch(remove_note({noteId:noteId}))
        setdeletealert(true)
        local.deleteState("state")
        
    }
    const previewNote=()=>{
        const noteInfo=noteList.find(id=>id.noteId===noteId)
        setnoteInformation(noteInfo)
        setpreview(true)
    }
    
    return (
        <>
            <NoteWrapper className={backGround}>
                <TitleWrapper>
                    {title}
                    <CgMaximize className="maximize" onClick={previewNote} />
                </TitleWrapper>
                <NoteBodyWrapper>
                    <NoteParagraph>

                       {note}
                    </NoteParagraph>
                </NoteBodyWrapper>
                <NoteFooter>
                    date created:<br/>
                     {dateCreate}
                    <AiFillDelete className="delete" onClick={removeNote}/>
                </NoteFooter>

            </NoteWrapper>
        </>
    )
}

export default Note
