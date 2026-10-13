import { selector } from 'recoil'
import { tarefasAtom } from '../atoms/tarefasAtom'
import { filtroAtom } from '../atoms/filtroAtom'

// Seletor: deriva a lista filtrada a partir da lista e do filtro ativo
export const tarefasFiltradasSelector = selector({
  key: 'tarefasFiltradas',
  get: ({ get }) => {
    const tarefas = get(tarefasAtom)
    const filtro = get(filtroAtom)

    if (filtro === 'concluidas') return tarefas.filter((t) => t.concluida)
    if (filtro === 'pendentes') return tarefas.filter((t) => !t.concluida)
    return tarefas
  },
})
