import React, { Component } from 'react'

class UserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name:"",
            number:"",
            email:"",
            address:"",
            
        };
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state.name);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name:this.state.name,
            number:this.state.number,
            email:this.state.email,
            address:this.state.address
        };
        this.props.addUser(newUser)
        this.setState({
            name:"",
            number:"",
            email:"",
            address:"",
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="user_form">
                <div className="form-control">
                    <label>Name</label>
                    <input type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.state.handleChange}
                     />
                </div>
                <div className="form-control">
                    <label>Number</label>
                    <input type="text"
                    name="number"
                    value={this.state.number}
                    onChange={this.state.handleChange}
                     />
                   </div>
                   <div className="form-control">
                    <label>Email</label>
                    <input type="text"
                    name="Email"
                    value={this.state.Email}
                    onChange={this.state.handleChange}
                     />
                     </div>

                     <div className="form-control">
                    <label>Address</label>
                    <input type="text"
                    name="address"
                    value={this.state.address}
                    onChange={this.state.handleChange}
                     />
                     </div>  

            </form>
            
        )
    }
}

export default UserForm