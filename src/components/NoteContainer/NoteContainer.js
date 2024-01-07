import React from 'react'
import Note from '../Note/Note'
import "./NoteContainer.css"

function NoteContainer() {
  return (
    <div className="note-container">
      <h2>Notes</h2>
      <div className="note-container_notes">
      <Note note={{
        text:"kunal",
        time:"2.12Am",
        color:"cyan"
      }}/>
      <Note note={{
        text:"kunal",
        time:"2.12Am",
        color:"cyan"
      }}/>
      <Note note={{
        text:"kunal",
        time:"2.12Am",
        color:"cyan"
      }}/>
      <Note note={{
        text:"kunal",
        time:"2.12Am",
        color:"cyan"
      }}/>
      <Note note={{
        text:"kunal",
        time:"2.12Am",
        color:"cyan"
      }}/>
      <Note note={{
        text:"kunal",
        time:"2.12Am",
        color:"cyan"
      }}/>
       <Note note={{
        text:"kunal",
        time:"2.12Am",
        color:"cyan"
      }}/>
       <Note note={{
        text:"kunal",
        time:"2.12Am",
        color:"cyan"
      }}/>
       <Note note={{
        text:"kunal",
        time:"2.12Am",
        color:"cyan"
      }}/>
       <Note note={{
        text:"kunal",
        time:"2.12Am",
        color:"cyan"
      }}/>
      </div>
    </div>
  )
}

export default NoteContainer
