import React, { useState } from 'react'
import * as style from './previewDesign'
import * as icons from 'react-icons/all'
import {update_note} from '../../Redux/slice'
import { useDispatch } from 'react-redux'
import * as local from '../../localStorage/localStorage'
const PreviewNote = ({ preview, setpreview,setnoteInformation,noteInformation }) => {
    const color = ["", "red", "green", "yellow"];
    const [bgColor, setbgColor] = useState(noteInformation.backGround)
    const [title, settitle] = useState(noteInformation.title)
    const [note, setnote] = useState(noteInformation.note)
    const dispatch=useDispatch();
    const selectedDefault=()=>{
        if(bgColor==="red"){
            return 1
        }else
        if(bgColor==="green"){
            return 2
        }else
        if(bgColor==="yellow"){
            return 3
        }else
        return 0
    }
    const updateDetail=()=>{
        
        dispatch(update_note({noteId:noteInformation.noteId,
                              title:title,
                              note:note,
                              backGround:bgColor}))
        local.updateState("state",{noteId:noteInformation.noteId,
                                    title:title,
                                    note:note,
                                    backGround:bgColor})
    }

    const radioColor = color.map((color, index) => {
        return (
            <style.PreviewBgColor key={index}>
                <style.PreviewRadioButton name="bgColor" type="radio" onChange={() => { setbgColor(color) }} defaultChecked={index===selectedDefault()} />
                {color === "" ? "Default" : color.charAt(0).toUpperCase() + color.slice(1)}
            </style.PreviewBgColor>
        )
    })
    return (
        <>
            <style.PreviewWrapper>
                <style.PreviewBody className={bgColor}>
                    <style.PreviewHeader>
                        <style.PreviewTitle placeholder="Title Here" value={title} onChange={(e) => { settitle(e.target.value) }} />
                        <icons.IoCloseSharp className="close" onClick={() => { setpreview(!preview) }} />
                    </style.PreviewHeader>
                    Background Color:
                    <style.PreviewRadioButtonWrapper>
                        {radioColor}
                    </style.PreviewRadioButtonWrapper>
                    <style.PreviewTextArea placeholder="Note Here" value={note} onChange={(e) => { setnote(e.target.value) }} />
                    <style.PreviewFooter>
                        <style.PreviewSaveButton  onClick={updateDetail} >
                            <icons.AiFillSave className="save"/>
                            Update
                        </style.PreviewSaveButton>
                    </style.PreviewFooter>
                </style.PreviewBody>
            </style.PreviewWrapper>

        </>
    )
}

export default PreviewNote
