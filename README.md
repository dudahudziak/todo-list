# To-do List com Recoil

Lista de tarefas em React cujo estado global é gerenciado com **Recoil** (átomos e seletores).

Fluxo: a pessoa digita o nome e clica em **Login**. Aparece o título "*nome*'s to do list" e só então a seção para adicionar, concluir, remover e filtrar tarefas.

## Tecnologias

- React 18
- Vite
- Recoil 0.7

## Conceitos do Recoil usados

| Conceito | Arquivo |
|---|---|
| `RecoilRoot` | `src/main.jsx` |
| Átomo da lista de tarefas | `src/atoms/tarefasAtom.js` |
| Átomo do filtro ativo | `src/atoms/filtroAtom.js` |
| Átomo do usuário logado | `src/atoms/usuarioAtom.js` |
| Seletor da lista filtrada | `src/selectors/tarefasFiltradasSelector.js` |
| Seletor das contagens | `src/selectors/contagemSelector.js` |
| `useRecoilState`, `useRecoilValue`, `useSetRecoilState` | `src/components/` |

## Estrutura

```
src/
├── atoms/        usuarioAtom, tarefasAtom, filtroAtom
├── selectors/    tarefasFiltradasSelector, contagemSelector
├── components/   Login, ListaDeTarefas, TarefaForm, Filtros, TarefaLista, TarefaItem
├── App.jsx
├── main.jsx
└── index.css
```

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal

Os dados ficam apenas em memória: ao recarregar a página, a lista é reiniciada.
