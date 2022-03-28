import React, { useState } from 'react'
import { GrAdd } from 'react-icons/gr'
import Alert from '../AlertComponent/alert'
import NewNote from '../NewNoteComponent/newNote'
import {
    HeaderWrapper, HeaderLogo,
    AddButton
} from './headerDesign'

const Header = ({addalert,setaddalert}) => {
    const [openNewNote, setopenNewNote] = useState(false)
    
    return (
        <>
            <HeaderWrapper>
                <HeaderLogo>
                    Note List

                </HeaderLogo>
                <AddButton onClick={() => { setopenNewNote(true) }}>
                    <GrAdd className="addNote" />
                    Add Notes
                </AddButton>
            </HeaderWrapper>

            {openNewNote ? <NewNote setopenNewNote={setopenNewNote}
                                    openNewNote={openNewNote}
                                    setaddalert={setaddalert} /> : ""}
        
            {addalert ? <Alert alertMessage="Note Added"
                                alertClassname="add"
                                setaddalert={setaddalert}
                                addalert={addalert} /> : ""}
           

        </>
    )
}

export default Header
