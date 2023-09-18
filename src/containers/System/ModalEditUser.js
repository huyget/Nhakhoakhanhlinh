import { every, spread } from 'lodash';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap';
import _ from 'lodash';//để sử dụng hàm if(user && !_.isEmpty(user)){ hàm kiem tra
class ModalEditUser extends Component {

    constructor(props){
        super(props);
        this.state= {
          email:'',
          password:'',
          firstName:'',
          lastName:'',
          address:'',
          id:''
            
        }
    }


    componentDidMount() {
        let user = this.props.currentUser// gan gia tri curretuser tu cha cho con
        //xet xem gia tri có rỗng không nếu rổng thì không thực thi và sử dụng thu thư viện import _ from 'lodash';
        //!_.ísEmpty(user) ham kiem tra ham co rong hay khong
        console.log('kiem tra componentDitMount: ', user)
        if(user && !_.isEmpty(user)){
            this.setState({
                email:user.email,
                password:'11111',
                firstName:user.firstName,
                lastName:user.lastName,
                address:user.address,
                id : user.id,
            })
        }
        
    }

    toggle = () =>{
        this.props.ToggleModalEditUser();
    }
    // this.state.email <=> this.state['email']
    //...this.state nghia: trong do dau "..." nghia la dau copy ra cac emai password ...
    handleOnchageInput = function (event, id) {
      //  this.state[id] = event.target.value;//cap nhat gia tri cua trang thai
      //  this.setState({
      //   ...this.state
      //  },()=>{
      //   console.log('check', this.state)
      //  })

       let copystate = {...this.state}
       copystate[id] = event.target.value
       this.setState({
        ...copystate
       }, ()=>{
          console.log('check code', this.state)
       })
       console.log('copystate', copystate)
      //console.log(event.target.value)
    }


    // checkvalideInput la kiem tra xem da nhap du chua hoac nhap duung khong
    checkValidateInput =() =>{
        let isValid =true;
        let arrinput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < arrinput.length; i++) {
            console.log('arrinput la gi', this.state[arrinput[i]]);
            if (!this.state[arrinput[i]]) {
                isValid = false;
                alert('misssing parameter: '+ arrinput[i])
                break;
            }
        }
        return isValid;
    }

    handleSaveEditUser = ()=>{
       let isValid = this.checkValidateInput();
       if(isValid === true){
        this.props.SaveEditUser(this.state)
       }
        
    }

    render() { // gia tri cua isOpen mow haoc dong

        console.log('check currentUser : ', this.props.currentUser)
        return (
        <Modal isOpen={this.props.isOpen}
            toggle={() => { this.toggle() }} 
            className={'Modal-user-container'} 
            size='lg'>
        <ModalHeader classname ='modal-header' 
            toggle={() => { this.toggle() }} 
             >
        <div classname='modalheaderName'>Edit user</div></ModalHeader>
        <ModalBody>
          <div className='Modal-container'>
              <div className='input-container'>
                  <label>Email</label>
                  <input type='text' 
                  onChange={(event)=>{this.handleOnchageInput(event, 'email')}}
                  value={this.state.email}
                  disabled  //có chức năng không cho người dung chinh sữa
                  ></input>
              </div> 
              <div className='input-container'>
                  <label>Password</label>
                  <input type='Password' onChange={(event)=>{this.handleOnchageInput(event, 'password')}}
                  value={this.state.password}
                  disabled
                  ></input>
              </div> 
          </div>
          <div className='Modal-container'>
              <div className='input-container'>
                  <label>Fist Name</label>
                  <input type='text' onChange={(event)=>{this.handleOnchageInput(event, 'firstName')}}
                  value={this.state.firstName}
                  ></input>
              </div> 
              <div className='input-container'>
                  <label>Last Name</label>
                  <input type='text' onChange={(event)=>{this.handleOnchageInput(event, 'lastName')}}
                  value={this.state.lastName}
                  ></input>
              </div> 
          </div>
          <div className='Modal-container'>
              <div className='input-container'>
                  <label>Address</label>
                  <input type='text' onChange={(event)=>{this.handleOnchageInput(event, 'address')}}
                  value={this.state.address}
                  ></input>
              </div> 
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => { this.handleSaveEditUser() }} className='px-3'>
            Save
          </Button>{' '}
          <Button color="secondary" onClick={() => { this.toggle() }} className='px-3'>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
