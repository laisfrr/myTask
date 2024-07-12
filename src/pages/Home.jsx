import CardHome from '../components/CardHome'

function Home() {
  return (
    <main className="d-flex flex-column align-items-center h-100">
      <h1>Home</h1>
      <div className="d-flex gap-2 flex-wrap justify-content-center align-items-center">
        <CardHome
          titulo="Como ser produtivo"
          img="https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHV0aXZpZGFkZXxlbnwwfHwwfHx8MA%3D%3D"
          descricao="1-Domine a arte do planejamento, 2-Elimine distrações,3-Potencialize seu foco."
        />
        <CardHome
          titulo="Faça um planejamento"
          img="https://images.unsplash.com/photo-1514474959185-1472d4c4e0d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          descricao="  Podendo ser mensal, semanal ou diário, o planejamento é essencial."
        />
        <CardHome
          titulo="Use a metodologia KanBan"
          img="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWV0b2RvbG9naWElMjBrYW5iYW58ZW58MHx8MHx8fDA%3D"
          descricao="A metodologia KanBan é uma forma de organizar suas tarefas. A ideia é dividir as tarefas em três colunas: a fazer, fazendo e feito."
        />
        <CardHome
          titulo="Pomodoro"
          img="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/a-tecnica-pomodoro-um-metodo-gestao-tempo-5b4e0f6051f44.jpg"
          descricao="A técnica Pomodoro é uma técnica de gerenciamento de tempo que foi desenvolvida por Francesco Cirillo no final dos anos 1980."
        />
      </div>
    </main>
  )
}

export default Home
