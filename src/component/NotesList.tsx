import * as React from 'react';
import Notes from './Notes'
import {Note} from '../module/note.odule'


interface INotesListProps {
    notes: Note[]
    setNotes:React.Dispatch<React.SetStateAction<Note[]>>

}


const NotesList: React.FunctionComponent<INotesListProps> = ({ notes,setNotes }) => {
    const renderNote = ():JSX.Element[] => {
     const handleDelete=(id:string)=>{
        setNotes(notes.filter(note=> note.id!==id))
     }



       return notes.map(note => {
         return   <Notes key={note.id} note={note} handleDelete={handleDelete}/>
        })
    }

    return (
        <>
            <h3 className='mt-3'>Notes</h3>
            <div>{renderNote()}</div>
        </>
    );
};

export default NotesList;
