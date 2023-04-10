import './note.component.css';
import Button from '../button/button.component';

const Note = ({title, content, id, removeNote}) => {
    return(
        <div key={id} className="note">
            <h5 className='title'>{title}</h5>
            <p className="content">{content}</p>
            <Button type='x' clickFunc={() => removeNote(id)}/>
        </div>
    );
}

export default Note;