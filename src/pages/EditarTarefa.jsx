import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getTarefa, updateTarefa } from '../firebase/tarefas'
import { useContext, useEffect } from 'react'
import { UsuarioContext } from '../contexts/UsuarioContext'

function EditarTarefa() {
  const { id } = useParams()
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
  function CarregarDado() {
    getTarefa(id).then(tarefa => {
      if (tarefa) {
        reset(tarefa)
      } else {
        navigate('/tarefas')
      }
    })
  }

  function atualizarTarefa(data) {
    updateTarefa(id, data).then(() => {
      toast.success('Tarefa Atualizada!')
      navigate('/tarefas')
    })
  }

  useEffect(() => {
    CarregarDado()
  }, [])

  return (
    <main className="container-form">
      <form className="form-section" onSubmit={handleSubmit(atualizarTarefa)}>
        <h1>Editar Tarefa</h1>
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

        <Button
          variant="dark"
          className="w-100 mt-2 container-btn-save"
          type="submit"
        >
          <img src="/save.svg" alt="icone de salvar" className="icon-save" />
          Salvar
        </Button>
      </form>
    </main>
  )
}
export default EditarTarefa
