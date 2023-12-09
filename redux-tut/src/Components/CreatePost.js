import React, { useState } from 'react'

export default function CreatePost() {
    const [title,setTitle]= useState('');
    const [content , setConent] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlfor="Title" >Title</label>
            <input type="text" name="title" id="title" onChange={e => setTitle(e.target.value)}/>
        </div>
        <div>
            <label htmlfor="Conent" >Conent</label>
            <textarea name="content" id="content" cols="30" rows="10" onChange={e => setConent(e.target.value)}/>
        </div>
        <div>
            <input type="submit" value="Add"/>
        </div>
    </form>
  )
}
