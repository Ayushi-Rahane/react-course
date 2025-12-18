import { useState} from 'react';
import {ChatInput} from './components/ChatInput.jsx';
import {ChatMsgs} from './components/ChatMsgs.jsx';
import './App.css'

function App(){
    const [chatMsgs, setChatMsgs] = useState(
      [
    
      {
          msg:"hello user!",
          sender:"robot",
          id:'id2'
      }
  ]
  );
// const [chatMsgs, setChatMsgs] = array;
// const chatMsgs = array[0];
// const setChatMsgs = array[1];
  
    return(
        <div className="app-div">
      
        <ChatMsgs 
        chatMsgs={chatMsgs}
        />
          <ChatInput chatMsgs={chatMsgs} setChatMsgs={setChatMsgs}/>
      </div>
    );
}
      
    
export default App
