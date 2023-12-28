import './App.css';

import Graph from './Components/Graph'
import Form from './Components/Form';


function App() {
  return (
    <div className='App'>
      
      <div className="container mx-auto  text-center drop-shadow-lg text-gray-800 max-w-6xl">
        <h1 className=" text-4xl py-8 mb-10 bg-slate-800 text-white rounded ">EXPENSE TRACKER</h1>

        {/* GRID COLUMNS */}
        <div className="grid md:grid-cols-2 gap-4">
        <Graph/>
        <Form/>
        </div>
        

      </div>  

      
      
    </div>
  );
}

export default App;
