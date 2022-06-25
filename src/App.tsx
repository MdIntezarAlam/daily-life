import React, { useState } from 'react';
import './App.css';
import { Note } from './module/note.odule';
import Header from './component/Header'
import NotesList from './component/NotesList';
import { Col, Container, Row } from 'react-bootstrap';
import CreateNotes from './component/CreateNotes';


function App() {

  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date()).toString(),
    title: "STORE YOUR DAILY ROUTINE",
    text: "Shedule meeting with the Time",
    color: "#fcfcfc",
    date: (new Date()).toString()
  }])


  return (
    <div className="mt-5 another">
      <h1 className='p-3 fs-2 ' style={{textAlign:'center', color:'white'}}>This is Daily Life Applications</h1>
      <Header />
      <Container>
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
