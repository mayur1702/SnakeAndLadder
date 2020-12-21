import logo from './logo.svg';
import './App.scss';
import Board from './Components/Board';

function App() {
    return (
        <div className="main-container">
        <div className="board"><Board /></div>
        <div className="dice-container"></div>
        </div>
    );
}  
export default App;