import RobotImg from '../assets/robot.png';
import UserImg from '../assets/user.png';


  export function ChatMessage(props){
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