import 'materialize-css/dist/css/materialize.min.css'
import React, {Component} from 'react';
import List from './list';
import AddItem from './add-item'
import dummylistdata from '../dummy-data/list-data';

class App extends Component{

    state = {
        list: []
    }

    componentDidMount(){
        this.getListData();
    }

    getListData(){
        //call server to get data

        this.setState({
            list: dummylistdata
        })
    }

    addItem(item){
        item._id = new Date().getTime();

        this.setState({
            list: [item, ...this.state.list]
        })
    }

    render(){
        const {list} = this.state
        return (
            <div>
                <div className='container'>
                <h1 className="center">To Do App</h1>
                    <AddItem add={this.addItem.bind(this)}/>
                    <List data={list}/>
                </div>
            </div>
        );
    }
}
export default App;
