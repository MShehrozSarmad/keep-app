import './notes-list.component.css';
import Note from '../note/note.component';

const NotesList = ({notes, removeNote}) => {
    return(
        <div className="note-list">
            {notes.map((note, id) => <Note key={id} id={id} title={note.title} content={note.content} removeNote={removeNote}/>)}
        </div>
    );
}

export default NotesList;