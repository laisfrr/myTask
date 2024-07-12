import Menu from './components/Menu'
import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Ajuda from './pages/Ajuda'
import NotFound from './pages/NotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Rodape from './components/Rodape'
import NovaTarefa from './pages/NovaTarefa'
import PoliticasDePrivacidade from './pages/PoliticasDePrivacidade'

//browserrouter --> é um componente essencial para conduzir o roteamento no navegador.
//spa -->single page apllication / aplicação de página única

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/nova-tarefa" element={<NovaTarefa />} />
          <Route
            path="/politicas-de-privacidade"
            element={<PoliticasDePrivacidade />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </>
  )
}

export default App
