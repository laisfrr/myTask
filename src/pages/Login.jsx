import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  function entrar(data) {
    console.log(data)
  }
  return (
    <main className="img-fluid container-login">
      <form
        className="form-section fw-semibold"
        onSubmit={handleSubmit(entrar)}
      >
        <h1>Login</h1>
        <hr />
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Seu email"
            className="form-control"
            {...register('email', { required: 'Email inválido' })}
          />
          {errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </div>
        <div>
          <label htmlFor="senha" className="mt-2">
            Senha
          </label>
          <input
            type="password"
            id="senha"
            className="form-control"
            placeholder="Sua senha"
            {...register('senha', {
              required: 'Senha inválida',
              minLength: {
                value: 6,
                message: 'O limite mínimo é de 6 caracteres'
              }
            })}
          />
          {errors.senha && (
            <small className="text-danger">{errors.senha.message}</small>
          )}
        </div>
        <Button id="botao-entrar" className="mt-4 w-100 fw-bold" type="submit">
          ENTRAR
        </Button>
        <Button variant="danger" className="mt-2 w-100 fw-bold" type="button">
          Entrar com o Google
        </Button>
      </form>
    </main>
  )
}

export default Login
