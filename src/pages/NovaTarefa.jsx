import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

function NovaTarefa() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  function salvarTarefa(data) {
    console.log(data)
  }
  console.log(errors.titulo)
  return (
    <main>
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
          Salvar
        </Button>
      </form>
    </main>
  )
}

export default NovaTarefa
