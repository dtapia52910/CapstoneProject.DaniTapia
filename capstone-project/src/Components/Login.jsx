import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../redux/api'; 
import './Styles/Login.css';

// function LoginForm({ onLogin }) {
//   const initialFormState = {
//     username: '',
//     password: '',
//   };
//   const [formState, setFormState] = useState(initialFormState);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const [login] = useLoginMutation(); 

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const data = await login(formState); 
//       onLogin(data.token);
//       navigate('/');
//     } catch (error) {
//       setError(error.message || 'Login failed');
//     }
//   };

//   const handleChange = (event) => {
//     setFormState({
//       ...formState,
//       [event.target.name]: event.target.value,
//     });
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <p>Please use the Username: mor_2314</p>
//       <p>Please use the Password: 83r5^</p>
//       {error && <p className="error">{error}</p>}
//       <form onSubmit={handleSubmit} className="login-form">
//         <label>
//           Username:
//           <input
//             type="text"
//             name="username"
//             value={formState.username}
//             onChange={handleChange}
//             className="input-field"
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={formState.password}
//             onChange={handleChange}
//             className="input-field"
//           />
//         </label>
//         <button type="submit" className="login-button">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default LoginForm;
function LoginForm({ onLogin }) {
  const initialFormState = {
    username: '',
    password: '',
  };
  const [formState, setFormState] = useState(initialFormState);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Added loading state
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic form validation
    if (!formState.username || !formState.password) {
      setError('Username and password are required');
      return;
    }

    setLoading(true);

    try {
      const data = await login(formState);
      onLogin(data.token);
      navigate('/');
    } catch (error) {
      setError(error.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <p>Please use the Username: mor_2314</p>
      <p>Please use the Password: 83r5^</p>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formState.username}
            onChange={handleChange}
            className="input-field"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
            className="input-field"
          />
        </label>
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;