import "./App.css";
import {motion} from "framer-motion"

function App() {
  function template({ rotate, x }) {
    return `rotate(${rotate}) translateX(${x})`
  }
  return (
    <div className="App">
      <motion.form initial = {{x: "150%"}} animate ={{x:"15%"}} >
        <h1>Create An Account</h1>
        <label>
          Email:
          <input name="email" type="email" required />
        </label>
        <label>
          Password:
          <input name="password" type="password" required />
        </label>
        <button>Sign Up!</button>
      </motion.form>
    </div>
  );
}

export default App;
