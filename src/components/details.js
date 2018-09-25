import React, {Component} from 'react';
import Axios from 'axios';
import config from '../config';
import NavBtn from './nav-btn';


class Details extends Component{
    state = {
        item: null
    }

    componentDidMount(){
        this.getToDoItem();
    }

    async getToDoItem(){
        const {itemId} = this.props.match.params;

        try {
            const response = await Axios.get(`${config.API_URL}/todos/${itemId + config.API_KEY}`)


            console.log('response:', response);
    
    
            this.setState({
                item: response.data.todo
            });
        }catch(err){
            this.setState({
                item:{}
            });
        }
       
    }
    render(){
        const {item} = this.state;

        if(!item){
            return <h1 className='center'>Loading...</h1>
        }
        if(!item.title){
            return (
                <div>
                    <h1 className="center">Item Details</h1>
                    <NavBtn to="/" color="pink darke-2" text="Back To List"/>
                    <h2 className="center">No Item To Display</h2>
                </div>
            )
        }
        return(
            <div>
                <h1 className='center'>Item Details</h1>
                <NavBtn to="/" color="pink darke-2" text="Back To List"/>
                <h2 className="center">{item.title}</h2>
            </div>
        )
    }
}


export default Details