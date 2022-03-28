import './App.css';
import DataTable from './components/dataTable';
import CustomFooter from './components/footer';
import CustomHeader from './components/header';

function App() {
  return (
    <div className="App">
      <CustomHeader />
      <DataTable />
      <CustomFooter />
    </div >
  );
}

export default App;
