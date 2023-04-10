import './take-note.component.css';
import Button from '../button/button.component';

const TakeNote = ({startNote, placeholder, isHidden, noteObj, inputHandler, setNotesHandler}) => {
    return( 
        <div className="take-note">
            <div className="title-container">
                <input type="text" name='title' className='title-in' placeholder={placeholder} onClick={startNote} onChange={inputHandler} value={noteObj.title}/>
            </div>
            <div className="content-container">
                <textarea name="content"  className={`content-in ${isHidden ? 'hidden' : ''}`}  placeholder='your note here' onChange={inputHandler} value={noteObj.content}></textarea>
            </div>
            <Button type='+' clickFunc={setNotesHandler}/>
        </div>
    );
}

export default TakeNote;