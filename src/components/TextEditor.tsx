import {useContext, useState , useEffect} from 'react'
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { Context } from "../UserContext";
import axios from "axios";
import { Editor,  } from "react-draft-wysiwyg"
import draftToHtml from "draftjs-to-html"
import htmlToDraft from 'html-to-draftjs';
// import SpeedDialIcon from '@mui/SpeedDialIcon';
// import SpeedDial from '@mui/SpeedDial';
// import * as React from 'react';



import "./editor.css"
import {
 EditorState,
 ContentState, 
 convertFromRaw,
 convertToRaw,
 convertFromHTML,
} from "draft-js"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
function TextEditor() {

  const {  onEdit } = useContext(Context);
  const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];
  // const [bod, setBod] = useState('<p><span style="color: #e4e1e0;"><em>You can write your notes here</em></span></p>')
  const blocksFromHTML = htmlToDraft('<p><span style="color: #8b8989;"><em>You can write your notes here</em></span></p>');
  const [bod, setBod] = useState('<p><span style="color: #949291;"><em>You can write your notes here</em></span></p>')
 
  // let realbo
    const [editorState, setEditorState] = useState(EditorState.createWithContent(
      ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap,
      )
    ),)

  useEffect(()=>{
const getNote = async(inp:string)=>{
  let result:any = null
  let userDetails = window.localStorage.getItem('user')!
  
  try{
    result = await axios({
      headers:{
          'authorization' : JSON.parse(userDetails).token
      },
      // withCredentials : true,
      url : `http://localhost:3005/notes/${inp}`,
  }) 

       setEditorState(
      EditorState.createWithContent(
        ContentState.createFromBlockArray(
          htmlToDraft(result.data.body).contentBlocks,
          htmlToDraft(result.data.body).entityMap,
        )
      ),
     )
  result.data.body =  'hkern'
  setBod(result.data.body)

  }catch(err:any){
    result = err.message
  }
}
getNote(onEdit!)
},[onEdit, bod, setBod])
  const onEditorStateChange = (editorState:any) => {
    setEditorState(editorState)
  }
  const rawContentState = convertToRaw(editorState.getCurrentContent())
  const markup = draftToHtml(rawContentState)


  const handleSubmit = async() => {
    console.log(markup + onEdit)
    let result:any = null
    let userDetails = window.localStorage.getItem('user')!
    
    try{
      result = await axios({
        method: 'PUT',
        headers:{
            'authorization' : JSON.parse(userDetails).token
        },
        data: {body:markup},
        // withCredentials : true,
        url : `http://localhost:3005/notes/editnote/${onEdit}`,
    }) 
    console.log(result)
    window.location.reload()

    }catch(err:any){
      result = err.message
    }
  }


  
  return (
    <div className="text_editor">
      <Editor
          

      editorState={editorState}
      toolbarClassName="toolbar-class"
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      onEditorStateChange={onEditorStateChange}
      // onChange = {setBod}
      />
  <button onClick={handleSubmit} style={{color:"#32A05F", backgroundColor:"#15812c33",padding:"3px 5px", fontFamily:'poppins', fontSize:'12px', borderRadius:"7px" }}>Submit</button>
  {/* <SpeedDial
  ariaLabel="SpeedDial basic example"
  ButtonProps={{ color: "secondary" }}
  sx={{ position: 'absolute', bgcolor:'pink', width:300, bottom: 16, right: 16 }}
  icon={<SpeedDialIcon sx={{  bgcolor:'pink', width:30,}}/>}
  // size='large'
> */}
  {actions.map((action) => (
    <SpeedDialAction
      key={action.name}
      icon={action.icon}
      tooltipTitle={action.name}
      sx={{  bgcolor:'pink', width:30,}}
    />
  ))}
{/* </SpeedDial> */}
    </div>
  )
}
export default TextEditor





















// import { useEffect, useState } from "react";
// import { Editor, EditorState, ContentState } from "draft-js";
// import "draft-js/dist/Draft.css";

// // helper function
// const createState = (text:any) => {
//   return EditorState.createWithContent(ContentState.createFromText(text));
// };

// const ControlledEditor = ({ htmlContent }:{htmlContent?:any}) => {
//   // define the local state, using the createState callback to create the initial value
//   const [editorState, setEditorState] = useState(createState(htmlContent));

//   // override the local state any time that the props change
//   useEffect(() => {
//     setEditorState(createState(htmlContent));
//   }, [htmlContent]);

//   return (
//     <Editor
//     // toolbarClassName="toolbar-class"
//       // wrapperClassName="wrapper-class"
//       // editorClassName="editor-class"
//       editorState={editorState}
//       onChange={setEditorState}
//     />
//   );
// };
// // export default ControlledEditor
// export default function Appe() {
//   const [text, setText] = useState("Hello World");
//   return (
//     <div>
//       <h2>Source Text</h2>
//       <textarea value={text} onChange={(e) => setText(e.target.value)} />
//       <h2>Editor</h2>
//       <ControlledEditor htmlContent={text} />
//     </div>
//   );
// }