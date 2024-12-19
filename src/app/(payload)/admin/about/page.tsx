'use client'
import { useState } from 'react'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    try {
      console.log('Login successful', username, password)
      // const response = await axios.post('/api/auth/login', { username, password })
      
      // // Store the token in localStorage (or sessionStorage)
      // localStorage.setItem('token', response.data.token)

      // Redirect or perform further actions
    } catch (err) {
      setError('Invalid username or password')
    }
  }

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2 className="text-[24px]">Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ width: '100px', padding: '10px', marginTop: '20px' }}>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
