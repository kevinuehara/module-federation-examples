import './App.css';
import { Header } from 'remote1/Header';
import { Button } from 'remote2/Button';
const App = () => {
  return (
    <div className="content">
      <Header />
      <Button text="Button MF2" />
    </div>
  );
};

export default App;
