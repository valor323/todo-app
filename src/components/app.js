import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import List from './list';

const App = () => (
    <div>
        <div className='container'>
        <h1 className="center">To Do App</h1>
            <List/>
        </div>
    </div>
);

export default App;
