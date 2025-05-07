export default function validate({ email, password, confirmPassword }) {
    if (!email || !password || !confirmPassword) {
      return 'Preencha todos os campos'
    }
    if (password !== confirmPassword) {
      return 'Senhas não conferem'
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return 'Email inválido'
    }
    if (password.length < 6) {
      return 'Senha deve ter pelo menos 6 caracteres'
    }
    return null
  }