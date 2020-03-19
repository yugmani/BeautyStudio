import React, { Component } from 'react';

import axios from 'axios';


class CreateService extends Component {
        constructor(props){
        super(props)

        this.onChangeService = this.onChangeService.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            service: "",
            price: ""
        
        }
        }

        
    onChangeService(e) {
        this.setState({
            service : e.target.value
        });
    }

    onChangePrice(e) {
        this.setState({
            price : e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

        const service = {
            service: this.state.service,
            price: this.state.price
        }

        console.log(service);

        axios.post("http://localhost:5000/services/create", service)
            .then(res=> console.log(res.data));
         
        this.setState({
            service: "",
            price:""
        })
           
    }

render() {
    return (
        <div>
            <h2>Create New Service</h2>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    Service:<br />
                    <input type="text"
                    required
                    className="form-control"
                    value={this.state.service}
                    onChange={this.onChangeService} />

                </div>
                <div className="form-group">
                    Price:<br />
                    <input type="Number"
                    required
                    className="form-control"
                    value={this.state.service}
                    onChange={this.onChangeService} />

                </div>
                <div className="form-group">
                    <input type="submit"
                    value="Create Service"
                    className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}

}

export default CreateService;
