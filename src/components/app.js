import 'materialize-css/dist/css/materialize.min.css'
import React, {Component} from 'react';
import List from './list';
import AddItem from './add-item'
import Dummylistdata from '../dummy-data/list-data';
import Axios from 'axios';


const BASE_URL = 'http://api.reactprototypes.com'
const API_KEY = '?key=dresden_harry'

class App extends Component{

    state = {
        list: [],
        error:''
    }

    componentDidMount(){
        this.getListData();
    }

    async getListData(){
        //OLD WAY
        // const resp = Axios.get(`${BASE_URL}/todos${API_KEY}`).then((resp)=>{
        //     this.setState({
        //         list: resp.data.todos
        //     })
        // }).catch((err)=>{
        //     console.log('get list error:', err.message);

        //     this.setState({
        //         error: 'Error retrieveing list data'
        //     })
        // })
        //NEW WAY

        try {
            const resp = await Axios.get(`${BASE_URL}/todos${API_KEY}`);

            this.setState({
                        list: resp.data.todos
                    });
             }catch(err){
                 this.setState({
                     erro:'Error retrieving list data'
                 })
             }
    }

    addItem =  async (item) => {
        await Axios.post(`${BASE_URL}/todos${API_KEY}`, item);

        this.getListData();
    }

    deleteItem = async id => {
        await Axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);
        this.getListData();
    }

    render(){
        const {list, error} = this.state
        return (
            <div>
                <div className='container'>
                <h1 className="center">To Do App</h1>
                    <AddItem add={this.addItem.bind(this)}/>
                    <p className="red-text">{error}</p>
                    <List data={list} delete={this.deleteItem.bind(this)}/>
                </div>
            </div>
        );
    }
}
export default App;
