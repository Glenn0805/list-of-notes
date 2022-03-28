import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
    name: "note",
    initialState: [],
    reducers: {
        add_note: (state, action) => {
            const new_note = {
                noteId: action.payload.noteId,
                title: action.payload.title,
                note: action.payload.note,
                dateCreated:action.payload.dateCreated,
                backGround:action.payload.backGround
            }
            state.unshift(new_note)
        },
        remove_note:(state,action)=>{
           return state.filter(note=>note.noteId !==action.payload.noteId)
        },
        update_note:(state,action)=>{
            const index= state.findIndex(note=>note.noteId ===action.payload.noteId)
            state[index].title=action.payload.title;
            state[index].note=action.payload.note;
            state[index].backGround=action.payload.backGround;

        }

    }
})

export const { add_note,remove_note,update_note } = noteSlice.actions
export default noteSlice.reducer