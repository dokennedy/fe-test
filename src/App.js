import './App.css';
import { Button } from "react-bootstrap";
import { useState } from 'react';
import Card from './cardUI';



function App() {
  const [show,setShow] = useState(false);

  return (
    <div className="container">
      <h1>Related Articles</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

      <div className="card-container">
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <Card date="12 Sep, 2018" title="Love of learning, art keys to a great year for Gwen" backgroundColor="#F59926"/>
            </div>
            <div className="col-md-4">
              <Card date="28 Sep, 2018" title="Curious mind leads the way for carer Jill" backgroundColor="#4AADDE"/>
            </div>
            <div className="col-md-4">
              <Card date="12 Sep, 2018" title="Celebrating out volunteers" backgroundColor="#AB75AD"/>
            </div>
          </div>
        </div>
        
        {
          !show ? null : (
            <div className="container-fluid d-flex justify-content-center">
              <div className="row">
                <div className="col-md-4">
                  <Card date="12 Sep, 2018" title="Love of learning, art keys to a great year for Gwen" backgroundColor="#DE4A4A"/>
                </div>
                <div className="col-md-4">
                  <Card date="12 Sep, 2018" title="Love of learning, art keys to a great year for Gwen" backgroundColor="#4ACC44"/>
                </div>
                <div className="col-md-4">
                  <Card date="12 Sep, 2018" title="Love of learning, art keys to a great year for Gwen" backgroundColor="#F59926"/>
                </div>
              </div>
            </div>
          )
        }
      </div>

      
      <div className="text-center">
        <Button variant="outline-danger" onClick={() => setShow(!show)}>{show ? "Show Less" : "Read More"}</Button>
      </div>
      
    </div>
    

  );
}

export default App;
