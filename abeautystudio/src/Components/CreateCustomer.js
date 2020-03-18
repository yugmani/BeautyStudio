import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';


class CreateCustomer extends Component {
    constructor(props){
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeService = this.onChangeService.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        name:"",
        email:"",
        phone:0,
        service:"",
        date:new Date(),
        // services:[]
    }
}


componentDidMount(){
    axios.get("http://localhost:3000/services/")
        .then(response =>{
            if (response.data.length > 0){
                this.setState({
                    services : response.data.map(service=> service.service),
                    service : response.data[0].service
                   
                })
                console.log(response.data);
            }
        })
   
}

    onChangeName(e) {
        this.setState({
            name : e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email : e.target.value
        });
    }
    onChangePhone(e) {
        this.setState({
            phone : e.target.value
        });
    }

    onChangeService(e) {
        this.setState({
            service : e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date : date
        });
    }

    onSubmit(e){
        e.preventDefault();

        const customer = {
            name:this.state.name,
            email:this.state.email,
            phone:this.state.phone,
            service:this.state.service,
            date:this.state.date
        }

        console.log(customer);

        axios.post("http://localhost:3000/customers/create", customer)
            .then(res=> console.log(res.data));

        window.location = "/create";
    }

    render() {
        return (
            <div>
                <h1>Create New Customer</h1>
                <form onSubmit = {this.onSubmit}>
                    <div className = "form-group">
                        <label htmlFor=''>Name</label>
                        {/* htmlFor='sk-img-upload' */}
                        <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.name}
                        onChange= {this.onChangeName} />
                    </div>

                    <div className = "form-group">
                        <label>Email</label>
                        <input 
                        type="email" 
                        className="form-control" 
                        value={this.state.email} 
                        onChange= {this.onChangeEmail} />
                    </div>

                    <div className = "form-group">
                        <label>Phone</label>
                        <input 
                        type="number" 
                        className="form-control" 
                        value={this.state.phone}
                        onChange= {this.onChangePhone} />
                    </div>

                    <div className = "form-group">
                        <label>Service</label>
                        <input 
                        type="text" 
                        // ref="userInput" 
                        // required
                        className="form-control" 
                        value={this.state.service} 
                        onChange= {this.onChangeService} />
                        {/* {
                            this.state.services.map(function(service){
                                return <option 
                                    key = {service}
                                    value={service}>{service}
                                </option>
                            })
                        } */}

                    </div>

                    <div className = "form-group">
                        <label>Date</label>
                        <div>
                        <DatePicker 
                        selected = {this.state.date}
                        onChange= {this.onChangeDate} />
                        </div>
                    </div>

                    <div className="form-group">
                        <input 
                        type = "submit" 
                        value = "Check In" 
                        className = "btn btn-primary" />
                    </div>


                </form>
            </div>
        )
    }
}

export default CreateCustomer
