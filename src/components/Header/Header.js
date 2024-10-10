import React, { useEffect } from "react";
import {Link, Navigate} from 'react-router-dom';
import logo from "../../utils/argentBankLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from "react-redux";
import { faUserCircle, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { setUser, logout, setLoading, setError, setToken } from "../../store/store";
import { useNavigate} from 'react-router-dom';
import { getUserProfile } from "../../authService";



function Header () {
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const user = useSelector((state) => state.firstName);
    const dispatch = useDispatch ();
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(setLoading(true));
        try{
            dispatch(logout());
            localStorage.removeItem("token");
            navigate("/")
              
        } catch(error){
            dispatch(setError(error.message));
        } finally {
            dispatch(setLoading(false));
        }
    }
    useEffect(() => {
        const fetchUser = async () => {
          if (token) {
              dispatch(setLoading(true));
              try {
                  const response = await getUserProfile(token);
                  dispatch (setUser(response.body));
                  dispatch(setToken(token));
              } catch(error) {
                  dispatch(setError(error.message));
              } finally {
                  (setLoading(false));
              }
          }
        }
        fetchUser();
      }, [token, dispatch])

    return (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img src={logo} alt="logo du site" className="main-nav-logo-image"/>
                <h1 className="sr-only">Argent Bank</h1>
            </Link>

            {isLoggedIn ? (
                <div>
                    <Link to="/profile" className="main-nav-item"> 
                        <FontAwesomeIcon icon={faUserCircle} />  {user}
                    </Link>
                    <Link to="/" className="main-nav-item" onClick={handleLogout}>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout
                    </Link>
                </div>
            ) : (
                <Link to="/signin" className="main-nav-item">
                    <FontAwesomeIcon icon={faUserCircle} />
                    Sign In
                </Link>
            )}
        </nav>
    )
}

export default Header;