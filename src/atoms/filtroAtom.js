import { atom } from 'recoil'

// Filtro ativo: 'todas' | 'concluidas' | 'pendentes'
export const filtroAtom = atom({
  key: 'filtro',
  default: 'todas',
})
