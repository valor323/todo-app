import 'materialize-css/dist/css/materialize.min.css'
import {Route, Switch} from 'react-router-dom';
import React, {Component} from 'react';
import List from './list';
import AddItem from './add-item'
import Details from './details';
import NotFound from './notFound';



class App extends Component{
    render(){
        return (
            <div>
                <div className='container'>
                <Switch>
                    <Route path ="/" exact component={List}/>

                    <Route path="/add-item" component={AddItem}/>
                    <Route path='/item/:itemId' component={Details}/>
                    <Route component={NotFound}/>
                </Switch>
                </div>
            </div>
        );
    }
}
export default App;
