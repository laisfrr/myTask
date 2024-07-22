import { Badge, Button, Card, Container, Toast } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {
  deleteTarefa,
  getTarefas,
  getTarefasUsuario
} from '../firebase/tarefas'
import { useContext, useEffect, useState } from 'react'
import Loader from '../components/Loader'
import toast from 'react-hot-toast'
import { UsuarioContext } from '../contexts/UsuarioContext'

// const categoriaCores = {
//   'pessoal': 'primary',
//   'trabalho': 'success',
//   'urgente': 'danger',
//   'estudos': 'warning',
//   'lazer': 'info',
//   // Adicione mais categorias e cores conforme necessário
// };

// ;<Badge className="ms-2" bg={categoriaCores[tarefa.categoria] || 'secondary'}>
//   {tarefa.categoria}
// </Badge>

function Tarefas() {
  const [tarefas, setTarefas] = useState(null)
  const usuario = useContext(UsuarioContext)

  if (usuario === null) {
    return <Navigate to="/login" />
  }
  function carregarDados() {
    if (usuario) {
      getTarefasUsuario(usuario.uid).then(resultados => {
        setTarefas(resultados)
      })
    }
  }

  function deletarTarefa(id) {
    const deletar = confirm('Tem certeza que deseja excluir?')
    if (deletar) {
      deleteTarefa(id).then(() => {
        toast.success('Tarefa removida com sucesso!')
        carregarDados()
      })
    }
  }
  const navigate = useNavigate()

  useEffect(() => {
    carregarDados()
  }, [])

  return (
    <main>
      <Container className="container-tarefas">
        <h1 className="text-center">Suas Tarefas</h1>
        <hr />
        <div className="div-tarefas-add">
          <Link className="btn btn-dark btn-tarefa-add" to="/tarefas/adicionar">
            <img src="/add.svg" className="icon-add" alt="" />
            Adicionar Tarefas
          </Link>
        </div>
        {tarefas ? (
          <section className="mt-2">
            {tarefas.map(tarefa => {
              return (
                <Card key={tarefa.id} className="mb-2 ">
                  <Card.Body>
                    <Card.Title>{tarefa.titulo}</Card.Title>
                    <Card.Text>{tarefa.descricao}</Card.Text>
                    <div className="mb-2 badges-tarefas">
                      {tarefa.concluido ? (
                        <Badge bg="success">Concluído</Badge>
                      ) : (
                        <Badge bg="warning">Pendente</Badge>
                      )}
                      <Badge bg="dark">{tarefa.categoria}</Badge>
                      <Badge bg="dark">
                        <span>Conclusão: </span>
                        {new Date(tarefa.dataConclusao).toLocaleDateString()}
                      </Badge>
                    </div>
                    <div className="container-btn-listar d-flex gap-2">
                      <Button
                        className="btn-edit"
                        variant="btn btn-outline-info"
                        onClick={() => {
                          navigate(`/tarefas/editar/${tarefa.id}`)
                        }}
                      >
                        <img
                          className="icon-edit "
                          src="/edit.svg"
                          title="editar"
                          alt="icone editar"
                        />
                      </Button>
                      <Button
                        variant=" btn btn-outline-danger"
                        onClick={() => deletarTarefa(tarefa.id)}
                      >
                        <img
                          className="icon-delete "
                          src="/delete.svg"
                          title="deletar"
                          alt="icone deletar"
                        />
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              )
            })}
          </section>
        ) : (
          <Loader />
        )}
      </Container>
    </main>
  )
}

export default Tarefas
