import { selector } from 'recoil'
import { tarefasAtom } from '../atoms/tarefasAtom'

export const contagemSelector = selector({
  key: 'contagemTarefas',
  get: ({ get }) => {
    const tarefas = get(tarefasAtom)
    const concluidas = tarefas.filter((t) => t.concluida).length
    return {
      todas: tarefas.length,
      concluidas,
      pendentes: tarefas.length - concluidas,
    }
  },
})
