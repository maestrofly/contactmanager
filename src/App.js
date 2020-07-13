import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, deleteUser }from './store/UserAction';
import UserForm from "./components/UserForm";
import UserInfo from "./components/UserInfo";
import './App.css';


class App extends Component {
  
  AddNewUser = newUser => {
    this.props.addUser(newUser)
  };

  deleteUser = user_id => {
    this.props.deleteUser(user_id)
  }

  handleSubmit = e => {
    e.preventDefault();
    const newUser = {
        name:this.state.name,
        number:this.state.number,
        email:this.state.email,
        address:this.state.address
    };
    this.setState({
        users: [...this.state.users, newUser],
        name:"",
        number:"",
        email:"",
        address:"",
    });
};




  render(){
    return(
      <div className='parent'>
        <div className='sidenav'>
          <UserForm addUser={this.AddNewUser}/>
          <a><p className='conts'>CONTACTS</p></a><hr/>
          <a>FAVORITES</a><hr/>
          <a>FAMILY</a><hr/>
          <a>FRIENDS</a><hr/>

        </div>
      </div>
    )
  }











}



// const mapStateToProps = (state) => ({
//   users:state.users
// })

// const mapDispatchToProps = {
//   addUser : addUser,
//   deleteUser : deleteUser
// }


// export default connect( mapStateToProps, mapDispatchToProps)(App);

export default App;
