import React from "react";
import { useNotesStore } from "./NotesContext";

export const NewNoteForm = () => {
    const [noteText, setNoteText] = React.useState("");
    const notesStore = useNotesStore();

    return (
        <>
            <input
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                type="text"
            />
            <button onClick={() => notesStore.addNote(noteText)}>
                Add note
            </button>
        </>
    );
};

/*
import React from "react";
import { useNotesStore } from "./NotesContext";

export const NewNoteForm = () => {
    const [noteText, setNoteText] = React.useState("");
    const notesStore = useNotesStore();

    return (
        <>
            <input
                type="text"
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
            ></input>
            <button onClick={notesStore.addNote(noteText)}>add note</button>
        </>
    );
};

*/
