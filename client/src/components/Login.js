import { Form, Input, Button,message } from 'antd';
import Validator from "../tools/Validator"
import "./style/login.css"
function Login (props) {
    const { isShow, halderClose,haldetFinish}= props
    const onFill = () => {
        halderClose()
    };
    const ValidatorFrom=(data)=>{
        let ValidatorFrom = new Validator()
        ValidatorFrom.add(data.username, [
            {strategy: 'isNotEmpty', errorMsg: '用户名不能为空'},
        ])
        ValidatorFrom.add(data.password, [
            {strategy: 'isNotEmpty', errorMsg: '密码不能为空'},
            {strategy: 'minLength:6', errorMsg: '密码长度不能小于6位'}
        ])
        let errorMsg = ValidatorFrom.start() // 获得效验结果
        return errorMsg
    }
    const onFinish=(data)=>{
        let errorMsg = ValidatorFrom(data)
        if(!errorMsg){
            haldetFinish(data)
        }else{
            message.warning(errorMsg);
        }
    }
    return (
        <>
            {
                isShow && (
                    <div className='login'>
                        <div className="login_content">
                            <Form className='form_list' onFinish={onFinish} >
                                <Form.Item
                                    name="username"
                                    label="用户"
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    label="密码"
                                >
                                    <Input  type='password'/>
                                </Form.Item>
                                <Form.Item >
                                    <Button className='login_btn' type="primary" htmlType="submit">
                                        登陆
                                    </Button>
                                    <Button className='close_btn' htmlType="button" onClick={onFill}>
                                        取消
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                )
            }
        </>

    )
}
export default Login;