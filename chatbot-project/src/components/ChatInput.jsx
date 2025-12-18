import { useState } from "react";
import { Chatbot } from "supersimpledev";

export function ChatInput({setChatMsgs, chatMsgs}){

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
