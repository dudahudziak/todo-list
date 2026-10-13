import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { usuarioAtom } from '../atoms/usuarioAtom'

function Login() {
  const setUsuario = useSetRecoilState(usuarioAtom)
  const [nome, setNome] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const limpo = nome.trim()
    if (!limpo) return
    setUsuario(limpo)
  }

  return (
    <form className="card login" onSubmit={handleSubmit}>
      <h1>Bem-vindo(a)!</h1>
      <p>Digite seu nome para começar.</p>
      <input
        type="text"
        placeholder="Seu nome"
        aria-label="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  )
}

export default Login
