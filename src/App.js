import { useState } from "react";
import Form from "./Components/Form";
import { DataContext } from "./Components/DataContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Information from "./Components/Information";

function App() {

  const [formData, setFormData] = useState(null);
  

  return (
    <DataContext.Provider value={{formData, setFormData}}>
    <Router>
    <div className="App">
      
        <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/information" element={<Information/>}/>
      </Routes>
   
    </div>
    </Router>
    </DataContext.Provider>
  );
}

export default App;
