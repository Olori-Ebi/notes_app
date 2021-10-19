import { createContext, useState } from "react";

interface cont {
  noteLists?: NotesDetails[],
  handleSetNoteLists?: React.Dispatch<React.SetStateAction<NotesDetails[]>>
}
interface NotesDetails {
  date: string
  title : string
  body : string
  tags:string[]
}

let init:cont = {}
const Context = createContext(init);
let first:NotesDetails[] = []
function NameContextProvider(props:any) {
  const [name, setName] = useState(first);


  return (
    <Context.Provider
      value={{ noteLists: name, handleSetNoteLists:setName, }}
    >
      {props.children}
    </Context.Provider>
  );
}

// let expcontext = { NameContextProvider, Context };

export  { NameContextProvider, Context }
