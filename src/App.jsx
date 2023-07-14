import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/Login/Login.page";
import HomePage from "./pages/Home/Home.page";
import { LocalStorageService } from "./services/User/LocalStorage.service";

if(!LocalStorageService.get('users')) {
  LocalStorageService.set('users', [
    {
      id: 1,
      email: 'andre@usercep.com',
      password: '12345678',
    },
    {
        id: 2,
        email: 'usercep@gmail.com',
        password: '12345678',
    },
    {
        id: 3,
        email: 'usuario@usercep.com',
        password: '12345678',
    },
    {
        id: 4,
        email: 'andre@teste.com',
        password: '12345678',
    },
  ])
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='*' element={<><p>Pagina não existe</p></>}/>
      </Routes>
    </Router>
  )
}

export default App
