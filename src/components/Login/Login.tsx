import './styles.css';
import { useNavigate } from 'react-router-dom';

export function Login() {
  let navigate = useNavigate();

  const moveToHome = () => {
    navigate("/home");
  }

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" required />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required />
          <label>Password</label>
        </div>
        <a href='#' onClick={moveToHome}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
        </a>
      </form>
    </div>
  );
}
