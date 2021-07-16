import { Avatar } from '@material-ui/core'
import './Header.css'


const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <a to="/">Godswill Blog App</a>
            </div>

            <div className="header__right">
             <div className="header__icons">
                 <a to="/">
                     <i className="fas fa-home"></i>
                 </a>
                 <a to="#search">
                     <i className="fas fa-search"></i>
                 </a>
                 <a to="#notifications">
                     <i className="fas fa-bell"></i>
                 </a>
                 <a to="/">
                     <i className="fas fa-power-off" alt="Sign out"></i>
                 </a>
                 <Avatar className="header__avatar"></Avatar>
             </div>
            </div>
        </div>
    )
}

export default Header
