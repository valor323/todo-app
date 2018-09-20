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

    deleteItem(index){
        const {list} = this.state;

        const listCopy = list.slice();

        listCopy.splice(index, 1);

        this.setState({
            list: listCopy
        });
    }

    render(){
        const {list} = this.state
        return (
            <div>
                <div className='container'>
                <h1 className="center">To Do App</h1>
                    <AddItem add={this.addItem.bind(this)}/>
                    <List data={list} delete={this.deleteItem.bind(this)}/>
                </div>
            </div>
        );
    }
}
export default App;
