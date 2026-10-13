import { useRecoilValue } from 'recoil'
import { usuarioAtom } from './atoms/usuarioAtom'
import Login from './components/Login'
import ListaDeTarefas from './components/ListaDeTarefas'

function App() {
  const usuario = useRecoilValue(usuarioAtom)

  return (
    <main className="app">
      {usuario ? <ListaDeTarefas /> : <Login />}
    </main>
  )
}

export default App
