import "./App.css";
import TakeNote from "./components/take-note/take-note.component";
import NotesList from "./components/notes-list/notes-list.component";
import Header from "./components/header/herder.component";

function App() {
    return (
        <div className="App">
            <Header/>
            <TakeNote/>
            <NotesList/>
        </div>
    );
}

export default App;
