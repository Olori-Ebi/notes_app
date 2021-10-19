import React from 'react'
import './fil.css';

interface NotesDetails {
    date: string
    title : string
    body : string
    tags:string[]
}

export default function EachNote(props:NotesDetails) {
    return (
        <>
            <div className="notes-list" style={{ textAlign:'left', }}>
            <span className="note-date">{props.date}</span>
            <h3 className="note-title">{props.title}</h3>
            <p className="note-body">{props.body}</p>
            <div className="note-tags">
                {props.tags.map((val)=>(<p className="tag">#{val.toUpperCase()}</p>))}
            </div>
        </div>
        </>
        
    )
}
