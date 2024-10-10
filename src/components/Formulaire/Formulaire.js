import React, { useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setToken,setError,setLoading} from "../../store/store";
import { signin } from "../../authService";
import { useNavigate} from 'react-router-dom';


function Formulaire () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const  error = useSelector((state )=> state.error);
    const loading = useSelector((state) => state.loading);
    
    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(setLoading(true));
        try{
            const response = await signin({email,password});
            dispatch(setToken(response.token));
            if (rememberMe) {
                localStorage.setItem("token", response.token);
            }
            navigate("/profile");
        } catch (error) {
            dispatch(setError(error.message));
        } finally {
            dispatch(setLoading(false));
        }
    }

    return (
        <form onSubmit={handleLogin}>
            <div className="input-wrapper">
                <label for="username">Username</label>
                <input 
                    type="text" 
                    id="username" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="input-wrapper">
                <label for="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" onChange={(e) => setRememberMe(true)}/>
                <label htmlfor="remember-me">Remember me</label>
            </div>
            {loading && <p>Chargement...</p>}
            {error && <p className="error">{error}</p>} 
            <button type="submit" className="sign-in-button">Sign In</button>            
        </form>
    )
}

export default Formulaire;