import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import  {getAllUsers, createNewuserserver,DeletUserServer,EditUserServer} from '../../services/userService';
import './userManage.scss'
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';
import { isOptionalChain } from 'typescript';
import { dateFilter } from 'react-bootstrap-table2-filter';
import { emitter } from '../../utils/emitter';
class UserManage extends Component {

        constructor(props){
            super(props);
            this.state = {
                arruser:[],// luu mot gia tri Component,
                isOpenModalUser : false,
                isOpenModalEditUser :false,// modal de edit user
                userEdit : {},
            
            }
        }
    // muon khoi tao mot doi tuong can ham khoi tao
//goi API đoạn code dươi là gọi API
   async componentDidMount() {
        await this.getAllUserFromReact();
    }

    getAllUserFromReact =async() =>{
        let response = await getAllUsers('ALL');
        if(response && response.errCode === 0){
        this.setState({arruser : response.user},()=>{
        })

    }
    }//cập nhật tất cả thành phần sau khi sữa đôi hoặc thêm mới mà không cần load lại trang
    handleAddnewuser = () =>{
       this.setState({
        isOpenModalUser : true
       })
    }
    ToggleModalUser = ()=>{
        this.setState({
            isOpenModalUser : !this.state.isOpenModalUser,
        })
    }//togglemodaluser chuyển đổi trạng thái hiện tại của modal
    ToggleModalEditUser = () =>{
        this.setState({
            isOpenModalEditUser :!this.state.isOpenModalEditUser ,
        })
    }
    createNewuser = async(data)=>{
        try {
           let response = await createNewuserserver(data);
           if( response && response.errcode !== 0 ){
            alert(response.errmessage)
           }
           else{
            await this.getAllUserFromReact()
            this.setState({
                isOpenModalUser  : false
            })
            emitter.emit('EVENT_CLEAR_MODAL_DATA')//xoa cac thanh phan nhap vao noi chung sau khi luu thi mat het
           }
            
        } catch (e) {
            console.log(e)
        }
    }

    handleDeleteUser = async(user) =>{
        console.log('in ra user trog delete', user)
        try {
            let response = await DeletUserServer(user.id);
            if (response && response.errcode === 0){
                await this.getAllUserFromReact()
            } else {
                alert(response.errMessage)
            }
        } catch (e) {
            console.log(e)
        }
        
    }
    handleEditUser =  (user)=>{
       this.setState({
        isOpenModalEditUser:true,
        userEdit : user,
       })
       console.log('handleEditUser', user)
    }
    DoEditUser = async(user)=>{
        console.log('doedituser: ', user)
        try {
            let response = await EditUserServer(user);
            if (response && response.errcode === 0) {
                await this.getAllUserFromReact()// cập nhat trang thái ngay và luon
                this.setState({
                    isOpenModalEditUser  : false//tat trang modal -trang dang ký cap nhat mơi
                })
            }
        } catch (e) {
            console.log(e)
        }
      
    }
    render() {
        console.log('check',this.state)
        let arruser = this.state.arruser;
        
        return (
            <div className="user-container">
                <div className='title text-center'>Khanh Linh DENTAL Manage User</div>
                <ModalUser
                isOpen = {this.state.isOpenModalUser}// tắt mở form modal tư cha sang con ( tư usermânge => modalUser)
                toggleModalUser= {this.ToggleModalUser}//chuyển dổi trạng thái của modal( nôm na là tắt mở đó) nghĩa là đang tắt bấm vào thành mở
                createNewuser = {this.createNewuser}// thực hiện hành vi và lấy giử liệu từ người dùng đến máy chủ server
                
                >
                    
                </ModalUser>
                {/* modaluser form đăng ký mới thêm thành viên mới */}
                {this.state.isOpenModalEditUser &&
                 <ModalEditUser 
                 isOpen = {this.state.isOpenModalEditUser}
                 ToggleModalEditUser = {this.ToggleModalEditUser}
                 currentUser = {this.state.userEdit}
                 SaveEditUser = {this.DoEditUser}
                 >
                 </ModalEditUser>}
                 {/* modalEdituser câp nhật thành viên hay còn gọi la thay đổi thông tin thành viên */}
                
                <div className='mx-1'>
                    <button 
                    className='btn btn-primary px-3'
                    onClick={() => this.handleAddnewuser()}>
                    <i className ="fas fa-plus"></i>Add new user</button>
                </div>
                <div className='user-table mt-3 mx-2'>
                    <table>
                        <tbody>
                        <tr>
                            <th>Email</th>
                            <th>Fist Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                        </tbody>
                        
                        
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
                                        <button className='btn-edit' onClick={() =>{this.handleEditUser(item)}}><i className="fas fa-pencil-alt"></i></button> 
                                        <button className='btn-delete' onClick={()=>{ this.handleDeleteUser(item)}}><i className="fas fa-trash-alt"></i></button>
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
