import React, { useState } from 'react'
import { navigate } from 'gatsby'
import useAuth from '../hooks/useAuth'

const Login = ({ redirect }) => {
  const { state, login } = useAuth()
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try{
      await login({ identifier, password }) 
      navigate(redirect)
    }catch(e){
      console.log("Error occurred during authentication")
      const { response: { data: { message: [{ messages: [error]}] } } } = e
      const { message: msg } = error
      setError(msg)
    }
  }

  return (
    <div>
      <pre>
        { JSON.stringify({ state }, null, 2)}
      </pre>
      <form
        onSubmit={handleSubmit}
        >
        <div>
          <label htmlFor="username">
            Username
          </label>
          <input 
            onChange={ e => {
              setIdentifier(e.target.value)
            }}
            value={ identifier }
            id="username" type="text" placeholder="Username" />
        </div>
        <div>
          <label htmlFor="password">
            Password
          </label>
          <input
            onChange={ e => {
              setPassword(e.target.value)
            }}
            value={ password }
            className="shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Sign In
          </button>
        </div>
      </form>
      { (error.length > 1) && (
        <p>
          { error }
        </p>
      )}
    </div>
  )
}

export default Login