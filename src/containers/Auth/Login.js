import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
//import { every } from 'lodash';
import { handleLoginAPI } from '../../services/userService'


class Login extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            username:'',
            password:'',
            IsShowPassword:false,
            errMessage:''

        }
    }
    handleOnChangeUsername = (event)=>{
        this.setState({
            username: event.target.value
        }
        )
    }
    handleOnChangePassword = (evert) =>{
        this.setState({
            password: evert.target.value
        })
    }
    handleLogin = async ()=>{
        // {this.setState} la mot phuong thuc trong react duoc ddung de thay doi trang thai cua mot Component(thanh phan)
        this.setState({
            errMessage:''
        })// xoa cau hien thi loi khi nhap thanh cong hay khong
        try {
            let data = await handleLoginAPI(this.state.username, this.state.password)
            if(data && data.errCode !== 0){
                this.setState({
                    errMessage : data.message
                })
            }
            if(data && data.errCode == 0){
                //todo
                this.props.userLoginSuccess(data.user) // tao ket noi toi  {userLoginSucces(data.user)} khi ket noi thanh cong
                console.log('ban da dang nhap thanh cong')
            }
        } catch (error) {
            if(error.response){
                if(error.response.data){
                    this.setState({
                        errMessage:error.response.data.message
                    })
                }
            } 
        }
        
    }

    handleShowHediPassWord = ()=>{
        this.setState({
            IsShowPassword : !this.state.IsShowPassword
        })
    }
    render() {
        //JSX
        return (
            <div className='login-background'>
                <div className='login-container row'>
                    <div className='login-content col-12'>
                        <div className='col-12 text-center'>Login</div>
                        <div className='col-12 from-group'>
                            <label className='text'>Username</label>
                            <input type='text' 
                            className='form-control' 
                            placeholder='name la name'
                            value={(this.state.username)}
                            onChange={(event)=>this.handleOnChangeUsername(event)}
                            ></input>
                        </div>
                        <div className='col-12 from-group'>
                            <label className='text'>Password</label>
                            <div className='custom-input-password'>
                            <input type={this.state.IsShowPassword? 'text':'password'} 
                            className='form-control' 
                            placeholder='password la password'
                            value={(this.state.password)}
                            onChange={(event)=>this.handleOnChangePassword(event)}
                            ></input>
                            <div className='eye-icon' onClick={()=>{this.handleShowHediPassWord()}}>
                            <i class={this.state.IsShowPassword?'fas fa-eye':'fas fa-eye-slash' }></i>
                            </div>
                            </div>
                        </div>
                        
                        <div className='col-12' style={{color: 'red'}}>
                                {this.state.errMessage}
                        </div>  
                        
                        
                        <div  className='col-12 btn-login'><button onClick={()=>{this.handleLogin()}}>Login</button></div>
                        
                        <div className='col-12 text'>Forgot you password?</div>
                        <div className='col-12 text-center'>
                            <span className='text-other-center'>Or login with</span>
                        </div>
                        <div className='col-12 social-login'>
                        <i class="fab fa-google-plus-g social google"></i>
                        <i class="fab fa-facebook-f social facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        // adminLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfor)=>dispatch(actions.userLoginSuccess(userInfor))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
