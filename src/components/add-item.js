import React, {Component} from 'react';
import Axios from 'axios';
import NavBtn from './nav-btn';
import config from '../config';


class AddItem extends Component {
    state = {
        title:'',
        details:''
    }

    async handleAddItem(e){
        e.preventDefault();

        await Axios.post(`${config.API_URL}/todos${config.API_KEY}`, this.state);

        this.props.history.push('/');
    }

    render(){
        const {title,details} = this.state;
        return (
           <div>
               <h1 className="center">Add To Do Item</h1>
                <NavBtn to="/" text="Back to List" color = 'green darken-2'/>
                <form onSubmit={this.handleAddItem.bind(this)}>
                <div className="row">
                    <div className="col s8 offset-s2">
                    <label>Title</label>
                        <input onChange={(e) => this.setState({title: e.target.value})} value = {title} type="text"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s8 offset-s2">
                        <label>Details</label>
                        <input onChange={(e) => this.setState({details: e.target.value})} value = {details} type="text"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s8 offset-s2 right-align">
                        <button className='btn cyan-accent-2'>Add Item</button>
                    </div>
                </div>
            </form>
           </div>
        )
    }
}

export default AddItem;
