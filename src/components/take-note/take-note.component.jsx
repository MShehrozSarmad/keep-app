import './take-note.component.css';
import Button from '../button/button.component';
import { useState } from 'react';

const TakeNote = () => {

    const [noteObj, setNoteobj] = useState({title:'', content:''});
    const inputHandler = (e) => {
        const {name, value} = e.target;
        setNoteobj((prvsData) => {
            return{
                ...prvsData,
                [name]: value
            }
        })
    }

    return(
        <div className="take-note">
            <div className="title-container">
                <input type="text" name='title' className="title-in" placeholder='Take a note' onChange={inputHandler} value={noteObj.title}/>
            </div>
            <div className="content-container">
                <textarea name="content" className='content-in' onChange={inputHandler} value={noteObj.content}></textarea>
            </div>
            <Button type='+' />
        </div>
    );
}

export default TakeNote;