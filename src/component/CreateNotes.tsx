import * as React from 'react';
import { useRef } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Note } from '../module/note.odule'


interface ICreateNotesProps {
    notes: Note[]
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({ notes, setNotes }) => {
    //display msg error
    const [error, setError] = React.useState<string>("")

    const titleRef = React.useRef<HTMLInputElement | null>(null);
    const textRef = React.useRef<HTMLTextAreaElement | null>(null);
    const colorRef = React.useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (titleRef.current?.value === "" || (textRef.current as HTMLTextAreaElement).value === "") {
            return setError("Please fill All the Fields");
        }
        setError("");
        setNotes([...notes, {
            id: (new Date()).toString(),
            title: (titleRef.current as HTMLInputElement).value,
            text: (textRef.current as HTMLTextAreaElement).value,
            color: (colorRef.current as HTMLInputElement).value,
            date: (new Date()).toString(),
        }]);
            (titleRef.current as HTMLInputElement).value = "";
            (textRef.current as HTMLTextAreaElement).value="";
    }


    return (
        <>
            <h2  style={{color:'black' , fontWeight:'bolder'}}>Create Your Notes</h2>
            {error &&<Alert variant='danger'>{error}</Alert>}
            <Form className="mb-3" onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label style={{color:'black', fontSize:'20px' , fontWeight:'bolder'}}>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title for the Notes" ref={titleRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label style={{color:'black', fontSize:'20px' , fontWeight:'bolder'}}>Text</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title Your Notes" as='textarea' rows={3} ref={textRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label htmlFor='colorInput'>Notes Color</Form.Label>
                    <Form.Control type="color" id='colorInput' defaultValue='#dfdfdf' title='Choose Your Color' ref={colorRef} />
                </Form.Group>
                <Button type='submit' variant='primary' style={{width:'full'}}>Submit</Button>
            </Form>
        </>
    )
};

export default CreateNotes;
