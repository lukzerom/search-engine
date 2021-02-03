import { css } from "@emotion/css";
import "./App.css";
import Frontstage from "./pages/Frontstage";

function App() {
  return (
    <div
      className={css`
        max-width: 500px;
        margin: 20vh auto 30vh auto;
      `}
    >
      <Frontstage />
    </div>
  );
}

export default App;
