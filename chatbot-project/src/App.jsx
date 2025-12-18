import { useState, useRef, useEffect } from 'react'
import { Chatbot } from 'supersimpledev';
import RobotImg from './assets/robot.png';
import UserImg from './assets/user.png';
import './App.css'
 

function ChatInput({setChatMsgs, chatMsgs}){

        const[inputMsg, setInputMsg] = useState("");
        function setInputValue(event){
            setInputMsg(event.target.value);
        }
        function sendMsg(){
            const newChatMsgs =[
                ...chatMsgs,
                {
                    msg:inputMsg,
                    sender:"user",
                    id:crypto.randomUUID()
 
                }
            ];
            setChatMsgs(
                newChatMsgs
            );
           const response = Chatbot.getResponse(inputMsg);
         
             setChatMsgs(
                [
                ...newChatMsgs,
                {
                    msg:response,
                    sender:"robot",
                    id:crypto.randomUUID()
 
                }
            ]
          );
            setInputMsg("");
        }
        return(
           <div className="chat-input-div"> {/*React Fragment: won't let us use extra div */}
                <input className="chat-input" 
                    type="text"
                    placeholder="Send a message to Chatbot" 
                    size="40"
                    onChange={setInputValue}
                    value={inputMsg}
                />
                <button className="send-btn" onClick={sendMsg}>Send</button>
           </div>
        );
       }

       function ChatMessage(props){
     //   const msg = props.message;
       // const img_src = props.img_src;

       const {msg} = props;
       const {sender} = props;

    /*. it's shortcut is giving below using guard operator: && 
      if(sender=="robot"){
        return (
             <div>
                <img src="robot.png" 
                alt="chatbot image" width="50" />
                 {msg}
            </div>
        );
       }*/
        return(
            <div className={sender==='robot'?"robot-div":"user-div"}>
                {sender==='robot' && 
                    (
                    <img 
                        src={RobotImg}
                        alt="chatbot image" 
                        className="chatbot-img"
                    />
                    )
                }

                <div className='chat-msg-div'>{msg}</div>

                {sender==='user' && 
                    (   
                        <img 
                            src={UserImg}
                            alt="chatbot image" 
                            className="chatbot-img"
                        />
                    )
                }
            </div>
        );
       }
   function ChatMsgs(props){
       
      const chatMsgRef =  useRef(null);
       useEffect(() =>{
            const contElement =  chatMsgRef.current;
            if(contElement){
                contElement.scrollTop = contElement.scrollHeight;
            }
       }, [props.chatMsgs]);    
        return(
            <div className="chat-msgs-div" ref={chatMsgRef}>
             
              {props.chatMsgs.map((chatmsg) =>{
                 return(
                    <ChatMessage 
                        msg={chatmsg.msg} 
                        sender={chatmsg.sender}
                        key={chatmsg.id}
                    />
                    )
                })
            }
            </div>
        );
     }

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
