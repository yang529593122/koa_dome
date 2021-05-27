import "./style/header.css"
function Header() {
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
                    <span>登录 / </span>
                    <span>注册</span>
                </div>
            </div>
        </div>
    );
}
export default Header;