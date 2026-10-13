import { useRecoilState } from 'recoil'
import { usuarioAtom } from '../atoms/usuarioAtom'
import TarefaForm from './TarefaForm'
import Filtros from './Filtros'
import TarefaLista from './TarefaLista'

// Tela exibida somente depois do login
function ListaDeTarefas() {
  const [usuario, setUsuario] = useRecoilState(usuarioAtom)

  return (
    <section className="card">
      <header className="topo">
        <h1>{usuario}'s to do list</h1>
        <button type="button" className="sair" onClick={() => setUsuario('')}>
          Sair
        </button>
      </header>
      <TarefaForm />
      <Filtros />
      <TarefaLista />
    </section>
  )
}

export default ListaDeTarefas
