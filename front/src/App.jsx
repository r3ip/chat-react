import './app.css'
import { AiOutlineSend  } from 'react-icons/all'
// import { useEffect, useState } from 'react';
// import { io } from 'socket.io-client';

// const socket = io('http://localhost:5000');

const App = () => {

  // const [isConnected, setIsConnected] = useState(false);
  // const [message, setMessage] = useState('');
  // const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   socket.on('connect', () => {
  //     setIsConnected(true);
  //   })

  //   socket.on('chat message', (payload) => {
  //     setMessages(messages => [...messages, payload])
  //   })

  //   return () => {
  //     socket.off('connect');
  //     socket.off('chat message');
  //   }

  // }, []);

  // const sendMessage = () => {
  //   socket.emit('chat message', {
  //     user: socket.id,
  //     message
  //   })
  // }


  return (
    <>
      {/* <h1 className="text-3xl font-bold underline pb-5">
        {isConnected ? 'CONECTADO' : ' NO CONECTADO'}
      </h1>
      <div className='container'>
        <input
          type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="btn btn-primary" onClick={() => sendMessage()}>
          Enviar
        </button>
      </div>
      <div>
        {
          messages.map((chat) => (
            <div className="chat chat-start">
              <div className="chat-bubble" key={chat.user}>{chat.message}</div>
            </div>
          ))
        }
      </div> */}

      <div class="grid place-items-center h-screen m-10">
        <div className="card-chat rounded-lg shadow-xl">
          <div className="card-header">
          <div className="avatar mr-4">
            <div className="w-10 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
              <img src="https://mott.pe/noticias/wp-content/uploads/2018/07/los-10-terminos-fotograficos-que-todo-fotografo-debe-conocer.png" />
            </div>
          </div>
            <h1>Piero</h1>
          </div>
          <div className="chat-box">
            <div className="chat chat-start">
              <div className="chat-bubble">It's over Anakin, <br />I have the high ground.</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble chat-bubble-primary">You underestimate my power!</div>
            </div>
          </div>
          <div className="card-footer">
            <div className="flex justify-center items-center">
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mr-4" />
              <button className="btn btn-circle btn-outline">
                <AiOutlineSend className='w-6 h-6'></AiOutlineSend>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
