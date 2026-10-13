import { atom } from 'recoil'

// Nome da pessoa logada ('' = ninguém logado)
export const usuarioAtom = atom({
  key: 'usuario',
  default: '',
})
