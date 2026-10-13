import { useRecoilState, useRecoilValue } from 'recoil'
import { filtroAtom } from '../atoms/filtroAtom'
import { contagemSelector } from '../selectors/contagemSelector'

const OPCOES = [
  { valor: 'todas', rotulo: 'Todas' },
  { valor: 'pendentes', rotulo: 'Pendentes' },
  { valor: 'concluidas', rotulo: 'Concluídas' },
]

function Filtros() {
  const [filtro, setFiltro] = useRecoilState(filtroAtom)
  const contagem = useRecoilValue(contagemSelector)

  return (
    <div className="filtros" role="group" aria-label="Filtrar tarefas">
      {OPCOES.map((opcao) => (
        <button
          key={opcao.valor}
          type="button"
          className={filtro === opcao.valor ? 'ativo' : ''}
          aria-pressed={filtro === opcao.valor}
          onClick={() => setFiltro(opcao.valor)}
        >
          {opcao.rotulo} ({contagem[opcao.valor]})
        </button>
      ))}
    </div>
  )
}

export default Filtros
