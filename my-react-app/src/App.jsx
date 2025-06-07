
import { useReducer, useState } from 'react';
import { FormReducer, initialState } from './FormReducer';

function App() {
  const [state, dispatch] = useReducer(FormReducer, initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.email || state.password) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  const handleReset = () => {
    dispatch({ type: 'reset' });
    setSubmitted(false);
  };

  return (
    <div style={styles.container}>
      <h2>Login Form using useReducer</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Enter email"
          value={state.email}
          onChange={(e) => dispatch({ type: 'email', payload: e.target.value })}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={state.password}
          onChange={(e) => dispatch({ type: 'password', payload: e.target.value })}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Submit</button>
        <button type="button" onClick={handleReset} style={styles.button}>Reset</button>
      </form>

      <div style={styles.output}>
        {!submitted ? (
          <div>No details found</div>
        ) : (
          <div>
            <div>User Email: {state.email}</div>
            <div>User Password: {state.password}</div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial',
    backgroundColor: '#f9f9f9',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  input: {
    padding: '10px',
    fontSize: '14px',
  },
  button: {
    padding: '10px',
    fontSize: '14px',
    cursor: 'pointer',
  },
  output: {
    marginTop: '20px',
    fontSize: '16px',
  },
};

export default App;
