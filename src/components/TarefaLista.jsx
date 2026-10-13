import { useRecoilValue } from 'recoil'
import { tarefasFiltradasSelector } from '../selectors/tarefasFiltradasSelector'
import TarefaItem from './TarefaItem'

function TarefaLista() {
  const tarefas = useRecoilValue(tarefasFiltradasSelector)

  if (tarefas.length === 0) {
    return <p className="vazio">Nenhuma tarefa por aqui.</p>
  }

  return (
    <ul className="lista">
      {tarefas.map((tarefa) => (
        <TarefaItem key={tarefa.id} tarefa={tarefa} />
      ))}
    </ul>
  )
}

export default TarefaLista
