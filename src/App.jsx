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
import Tarefas from './pages/Tarefas'
import { Toaster } from 'react-hot-toast'
import EditarTarefa from './pages/EditarTarefa'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/config'
import { UsuarioContext } from './contexts/UsuarioContext'
import { Spinner } from 'react-bootstrap'

//browserrouter --> é um componente essencial para conduzir o roteamento no navegador.
//spa -->single page apllication / aplicação de página única

function App() {
  const [userLogin, setUserLogin] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUserLogin(user)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <div class="d-flex justify-content-center">
        <Spinner animation="grow" />
      </div>
    )
  }
  //Usuario provider vai compartilhar os dados para os componentes filhos
  //usuario={userLogin} --> qdo faz por meio de props
  return (
    <>
      <UsuarioContext.Provider value={userLogin}>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/ajuda" element={<Ajuda />} />
            <Route path="/tarefas" element={<Tarefas />} />
            <Route path="/tarefas/adicionar" element={<NovaTarefa />} />
            <Route path="/tarefas/editar/:id" element={<EditarTarefa />} />
            <Route
              path="/politicas-de-privacidade"
              element={<PoliticasDePrivacidade />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Rodape />
        </BrowserRouter>
        <Toaster position="top-right" />
      </UsuarioContext.Provider>
    </>
  )
}

export default App
