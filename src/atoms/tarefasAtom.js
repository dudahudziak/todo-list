import { atom } from 'recoil'

// Lista de tarefas: [{ id, texto, concluida }]
export const tarefasAtom = atom({
  key: 'tarefas',
  default: [],
})
