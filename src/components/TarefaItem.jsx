import { useRecoilState } from 'recoil'
import { tarefasAtom } from '../atoms/tarefasAtom'

function TarefaItem({ tarefa }) {
  const [, setTarefas] = useRecoilState(tarefasAtom)

  function alternar() {
    setTarefas((atuais) =>
      atuais.map((t) => (t.id === tarefa.id ? { ...t, concluida: !t.concluida } : t))
    )
  }

  function remover() {
    setTarefas((atuais) => atuais.filter((t) => t.id !== tarefa.id))
  }

  return (
    <li className={`item ${tarefa.concluida ? 'concluida' : ''}`}>
      <label>
        <input type="checkbox" checked={tarefa.concluida} onChange={alternar} />
        <span>{tarefa.texto}</span>
      </label>
      <button
        type="button"
        className="remover"
        aria-label={`Remover tarefa ${tarefa.texto}`}
        onClick={remover}
      >
        ✕
      </button>
    </li>
  )
}

export default TarefaItem
