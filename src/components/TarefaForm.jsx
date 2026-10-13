import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { tarefasAtom } from '../atoms/tarefasAtom'

function TarefaForm() {
  const [, setTarefas] = useRecoilState(tarefasAtom)
  const [texto, setTexto] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const limpo = texto.trim()
    if (!limpo) return

    setTarefas((atuais) => [...atuais, { id: Date.now(), texto: limpo, concluida: false }])
    setTexto('')
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma nova tarefa..."
        aria-label="Nova tarefa"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}

export default TarefaForm
