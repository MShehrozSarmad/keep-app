import './note.component.css';
import Button from '../button/button.component';

const Note = () => {
    return(
        <div className="note">
            <h1 className='title'>Title</h1>
            <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odit necessitatibus explicabo obcaecati maiores consectetur quo error vel adipisci autem!</p>
            <Button type='x'/>
        </div>
    );
}

export default Note;