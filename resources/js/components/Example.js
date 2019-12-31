import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Example() {
  const [count, setCount] = useState(10);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Example Component</div>

            <div className="card-body">
              <div className="row">
                <div className="col-sm">
                  <button type="button" className="btn btn-primary" onClick={() => setCount(prevState => prevState + 1)}>Up</button>
                </div>
                <div className="col-sm">
                  <p>Conta: {count}</p>
                </div>
                <div className="col-sm">
                  <button type="button" className="btn btn-primary" onClick={() => setCount(prevState => prevState - 1)}>Down</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Example;

if (document.getElementById('example')) {
  ReactDOM.render(<Example/>, document.getElementById('example'));
}
