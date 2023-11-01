import { useState } from 'react';
import Card from './Components/Card';
import styles from '../styles/App.module.css';
function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState({});
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length < 3) {
      return setError(true);
    }
    if (email.length < 6) {
      return setError(true);
    }
    if (password.length < 3 || password.length > 12) {
      return setError(true);
    }
    setError(false);
    setData({
      userName: username,
      email: email,
      password: password,
    });
    setSent(true);
  };
  return (
    <div className={styles.container}>
      {!sent && (
        <>
          <h2>¡Registro de usuario!</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ingrese un nombre de usuario"
              onChange={(e) => setUsername(e.target.value.trim())}
            />
            <input
              type="text"
              placeholder="Ingrese su email"
              onChange={(e) => setEmail(e.target.value.trim())}
            />
            <input
              type="password"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value.trim())}
            />
            <button type="submit">Enviar</button>
          </form>
          {error && (
            <>
              <h3 className={styles.error}>
                Por favor chequea que la información sea correcta.
              </h3>
            </>
          )}
        </>
      )}
      {sent && <Card data={data} />}
    </div>
  );
}

export default App;
