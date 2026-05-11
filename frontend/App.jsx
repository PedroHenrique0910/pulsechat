import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './src/Components/PrivateRoute.jsx'
import Home from './src/pages/Home/Home.jsx'
import Chat from './src/pages/Chat/Chat.jsx'
import Login from './src/pages/Login/Login.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Route>
    </Routes>
  )
}