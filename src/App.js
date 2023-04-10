import "./App.css";
import { useEffect, useState } from "react";
import TakeNote from "./components/take-note/take-note.component";
import NotesList from "./components/notes-list/notes-list.component";
import Header from "./components/header/herder.component";

const getLocal = () => {
    let data = JSON.parse(localStorage.getItem('localData'));
    return (data) ? data : [];
}

function App() {
    const [noteObj, setNoteobj] = useState({ title: '', content: '' });
    const [placeholder, setPlaceholder] = useState('Take a note');
    const [hiddenStat, setHiddenStat] = useState(true);
    const [notes, setNotes] = useState(getLocal);

    const startNote = (e) => {
        setPlaceholder('Title');
        setHiddenStat(false);
    }
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setNoteobj((prvsData) => {
            return {
                ...prvsData,
                [name]: value,
            }
        })
    }
    const setNotesHandler = () => {
        setNotes([...notes, noteObj]);
        setNoteobj({ title: '', content: '' });
        setPlaceholder('Take a note');
        setHiddenStat(true);
    }
    const removeNote = (id) => {
        setNotes(notes.filter((note, index) => index !== id));
    }

    const setLocal = (x) => {
        localStorage.setItem('localData', JSON.stringify(x))
    }
    useEffect(() => setLocal(notes), [notes]);
    
    return (
        <div className="App">
            <Header />
            <TakeNote placeholder={placeholder} startNote={startNote} isHidden={hiddenStat} noteObj={noteObj} inputHandler={inputHandler} setNotesHandler={setNotesHandler} />
            <NotesList notes={notes} removeNote={removeNote} />
        </div>
    );
}

export default App;