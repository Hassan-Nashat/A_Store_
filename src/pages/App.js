import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Routes from './../routes/routes'
import { Provider } from 'react-redux';
import Store from '../routes/store/Store';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={Store}>
        <Navbar />
        <Routes />

      </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
