import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import  {getAllUsers} from '../../services/userService';
import './userManage.scss'
class UserManage extends Component {

        constructor(props){
            super(props);
            this.state = {
                arruser:[]// luu mot gia tri Component
            }
        }
    // muon khoi tao mot doi tuong can ham khoi tao
//goi API đoạn code dươi là gọi API
   async componentDidMount() {
    let response = await getAllUsers('ALL');
    if(response && response.errCode === 0){
        this.setState({arruser : response.user},()=>{

        })

    }
    }


    render() {
        console.log('check',this.state)
        let arruser = this.state.arruser;
        
        return (
            <div className="user-container">
                <div className='title text-center'>Khanh Linh DENTAL Manage User</div>
                <div className='user-table mt-3 mx-2'>
                    <table>
                        <tr>
                            <th>Email</th>
                            <th>Fist Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                        
                        {
                            arruser && arruser.map((item,index)=>{
                                return(
                                    console.log('xuat ra item',item,'index',index),
                                    <tr key = {index}>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        {/* dung https://fontawesome.com/ phiên bản 5.15.4 */}
                                        <button className='btn-edit'><i class="fas fa-pencil-alt"></i></button> 
                                        <button className='btn-delete'><i class="fas fa-trash-alt"></i></button>
                                    </td>
                                    </tr>
                                )
                            }) 
                        }
                            
                        
                    </table>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
