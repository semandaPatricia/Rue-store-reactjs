import React, { useState } from 'react';
import { account, ID } from '../../libs/appwrite';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  async function login(email, password) {
    await account.createEmailSession(email, password);
    setLoggedInUser(await account.get());
  }
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10 align-middle">
    <p>{loggedInUser ? `Logged in as ${loggedInUser.name}` : 'Not logged in'}</p>

    <form className="mt-4">
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 mb-4 border rounded-md" />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-2 mb-4 border rounded-md" />
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="w-full p-2 mb-4 border rounded-md" />

      <button type="button" onClick={() => login(email, password)} className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Login</button>

      <button
        type="button"
        onClick={async () => {
          await account.create(ID.unique(), email, password, name);
          login(email, password);
        }}
        className="w-full p-2 mt-2 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        Register
      </button>

      <button
        type="button"
        onClick={async () => {
          await account.deleteSession('current');
          setLoggedInUser(null);
        }}
        className="w-full p-2 mt-2 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Logout
      </button>
    </form>
  </div>
  )
}

export default Login