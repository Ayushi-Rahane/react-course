import { useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage.jsx';
export function ChatMsgs(props){
       
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
