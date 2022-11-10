import { useState } from 'react'

import Chat from './components/Chat'
import Title from './components/Title'
// import Message from './components/Message'

import './styles.css'





export default function App() {
  
  const [user, setUser] = useState('Sergio')
  // const []

 

  return (
    <div className="app">
      <Title potato={user} />
      <Chat user={user} />
      {/* <Message /> */}
    </div>
  )
}
