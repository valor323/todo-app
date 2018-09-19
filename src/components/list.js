import React, {Component} from 'react';
import dummylistdata from '../dummy-data/list-data';


class List extends Component{

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

    render(){
        const listElement = this.state.list.map((item, index)=>{
            return <li className= 'collection-item' key={item._id}>{item.title}</li>
        });
        return (
                <ul className = 'collection'>{listElement}</ul>
        )
    }
}

export default List;