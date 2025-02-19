import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { addTarefa } from '../firebase/tarefas'
import toast from 'react-hot-toast'
import { Navigate, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UsuarioContext } from '../contexts/UsuarioContext'

function NovaTarefa() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  const usuario = useContext(UsuarioContext)
  if (usuario === null) {
    return <Navigate to="/login" />
  }
  //then-->qdo finalizar eu vou executar  a funcao do arrow
  const navigate = useNavigate()

  function salvarTarefa(data) {
    //novo campo no documento que associa o usuário e a tarefa que ele criou.
    data.idUsuario = usuario.uid
    addTarefa(data)
      .then(() => {
        toast.success('Tarefa Adicionada')
        reset()
        navigate('/tarefas')
      })
      .catch(() => {
        toast.error('Tarefa não Adicionada')
      })
  }
  console.log(errors.titulo)
  return (
    <main className="container-form">
      <form className="form-section" onSubmit={handleSubmit(salvarTarefa)}>
        <h1>Adicionar Tarefa</h1>
        <hr />
        <div>
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            className="form-control"
            {...register('titulo', { required: true, maxLength: 200 })}
          />
          {errors.titulo && (
            <small className="text-danger">Campo obrigatório</small>
          )}
        </div>
        <div>
          <label htmlFor="descricao">Descrição:</label>
          <textarea
            id="descricao"
            className="form-control"
            {...register('descricao', { required: true })}
          />
          {errors.descricao && (
            <small className="text-danger">Campo obrigatório</small>
          )}
        </div>
        <div>
          <label htmlFor="dataConclusao">Data:</label>
          <input
            id="dataConclusao"
            type="date"
            className="form-control"
            {...register('dataConclusao')}
          />
        </div>
        <div className="form-check mt-2">
          <input
            type="checkbox"
            id="concluido"
            className="form-check-input"
            {...register('concluido')}
          />
          <label htmlFor="concluido" className="form-check-label">
            Concluído?
          </label>
        </div>
        <div>
          <label htmlFor="categoria">Categoria</label>
          <select
            name=""
            id="categoria"
            className="form-select"
            {...register('categoria')}
          >
            <option value="trabalho">Trabalho</option>
            <option value="estudos">Estudos</option>
            <option value="projetos">Projetos</option>
            <option value="lazer">Lazer</option>
            <option value="saude">Saúde</option>
            <option value="outros">Outros</option>
          </select>
        </div>
        <Button variant="dark" className="w-100 mt-2" type="submit">
          Adicionar
        </Button>
      </form>
    </main>
  )
}

export default NovaTarefa
