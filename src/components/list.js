import React, {Component} from 'react';
import Item from './item';
import NavBtn from './nav-btn';
import config from '../config';
import Axios from 'axios';



class List extends Component {
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
            const resp = await Axios.get(`${config.API_URL}/todos${config.API_KEY}`);

            this.setState({
                        list: resp.data.todos
                    });
             }catch(err){
                 this.setState({
                     error:'Error retrieving list data'
                 })
             }
    }

    deleteItem = async id => {
        await Axios.delete(`${config.API_URL}/todos/${id + config.API_KEY}`);
        this.getListData();
    }

    render(){
        const{error, list} = this.state;
        const listElement = list.map((item, index)=>{
            return <Item key={item._id} item={item} delete={() => this.deleteItem(item._id)}/>
        });
        return (
                <div>
                    <h1 className="center">To do List</h1>
                    <NavBtn to="/add-item" color="purple darken-2" text="Add Item"/>
                    <p className="red-text text-darken-2">{error}</p>
                    <ul className = 'collection'>{listElement}</ul>
                </div>
        );
    }
}
export default List;