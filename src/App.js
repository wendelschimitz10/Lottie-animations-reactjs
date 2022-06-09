import { BlueAnimation } from "./components/LottieAnimation/BlueAnimation";
import { EnjoyingAnimation } from "./components/LottieAnimation/EnjoyingAnimation";
import { WalkAnimation } from "./components/LottieAnimation/WalkAnimation";

import './globalStyle.css'
function App() {
  return (
    <div className="container">
      <BlueAnimation />
      <EnjoyingAnimation />
      <WalkAnimation />
    </div>
  );
}

export default App;
