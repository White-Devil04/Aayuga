import React, { useState } from 'react'
import axios from 'axios'
const QnA = ({ isChange, setIsChange }) => {
   const [question, setQuestion] = useState("");
   const [reply, setReply] = useState("");

   const handleChat = async () => {
      try {
         console.log(question);
         const response = await axios.post('/api/chat', {
            prompt: question
         });
         console.log(response);
         setReply(response.data);
         setIsChange(!isChange);
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <div className='QnA-container flex-col  bg-slate-100 w-[60vw] py-5 rounded-md'>
         <div className='flex items-center mx-6 bg-slate-500 rounded-md'>
            <p className='w-[200px]'>Enter your query:</p>
            <input className='w-full rounded-md m-2' type="text" value={question} onChange={(e) => setQuestion(e.target.value)} ></input>
            <button className='mx-3 p-2 bg-slate-700 rounded-md' onClick={handleChat}>Send</button>
         </div>
         <div className='object-cover m-6 bg-slate-300 h-[460px] overflow-y-hidden p-4 rounded-md'>
            {reply}
         </div>
      </div>
   )
}

export default QnA