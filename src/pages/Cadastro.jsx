import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  //register --> saber os dados
  //handle--> evento de clique

  function cadastrar(data) {
    console.log('Cadastro')
    console.log(data)
  }
  return (
    <main className="fluid container-cadastro">
      <form
        className="form-section fw-semibold"
        onSubmit={handleSubmit(cadastrar)}
      >
        <h1>Cadastro</h1>
        <hr />
        <div>
          <label htmlFor="nome" className="mt-1">
            Nome:
          </label>
          <input
            type="text"
            id="nome"
            className="form-control"
            placeholder="Seu nome e sobrenome"
            {...register('nome', { required: true, maxLength: 150 })}
          />
          {errors.nome && (
            <small className="text-danger">Campo obrigatório</small>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mt-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Seu email"
            {...register('email', { required: true })}
          />
          {errors.email && (
            <small className="text-danger">Email inválido</small>
          )}
        </div>
        <div>
          <label htmlFor="senha" className="mt-2">
            Senha:
          </label>
          <input
            type="password"
            id="senha"
            className="form-control"
            placeholder="Sua senha"
            {...register('senha', { required: true, minLength: 6 })}
          />
          {errors.senha && (
            <small className="text-danger">Senha inválida</small>
          )}
        </div>
        <Button
          id="botao-cadastrar"
          className="mt-4 w-100 fw-bold"
          type="submit"
        >
          CADASTRAR
        </Button>
        <Button variant="danger" className="mt-2 w-100 fw-bold" type="button">
          Entrar com o Google
        </Button>
      </form>
    </main>
  )
}

export default Cadastro
