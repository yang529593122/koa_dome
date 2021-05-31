import "./style/header.css"
function Header(props) {
    const {hanlderLogin} = props
    const login=()=>{
        hanlderLogin()
    }
    const loginOut=()=>{
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div className="header">
            <div className="header-nav">
                <div className="header-nav-left">
                    <a href="">首页</a>
                    <a href="">论坛</a>
                    <a href="">留言</a>
                    <a href="">个人</a>
                </div>
                <div className="header-nav-right">
                    {
                        localStorage.getItem('token') ? (
                            <>
                                <span>欢迎 {localStorage.getItem('uname')} </span>
                                <span onClick={loginOut}>退出</span>
                            </>

                        ) : (
                            <>
                                <span onClick={login}>登录 / </span>
                                <span>注册</span>
                            </>
                        )
                    }

                </div>
            </div>
        </div>
    );
}
export default Header;