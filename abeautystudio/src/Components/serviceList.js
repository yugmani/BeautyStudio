import React, { Component } from 'react'
// import axios from 'axios';


class serviceList extends Component {

    state = {
      
        services: [
                {id:101, service: "hair cutting", price: 45},
                {id:102, service: "shampoo", price: 35}
        ]
    
 }
    

    render() {

        const { services } = this.state;
        return (
            <div className = "wrapper">
                <button onClick = {() =>{
                    const service = prompt('Enter service');
                    if(service){
                        this.setState(state =>({
                            services: [...state.services, {id:this.id, service, price:this.price}]
                        }));
                    }
                }}
                >Add Service</button>
            </div>
        )
    }
}

export default serviceList
