import './index.css';
import { useState } from 'react';


const Color = ({ color, selectedColor, setSelectedColor }) => {
  return (
    <div
      className={`${color} ${selectedColor === color ? 'selected' : ''}`}
      onClick={() => setSelectedColor(color)}
    ></div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected:</div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="violet" selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <Color color="white" selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <Color color="yellow" selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default App;
