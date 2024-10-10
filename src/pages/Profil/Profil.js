import React, {useEffect} from "react";
import Account from "../../components/Account/Account";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setLoading, setError, setToken } from "../../store/store";
import { getUserProfile } from "../../authService";
import EditName from "../../components/EditName/EditName";
import { useNavigate } from "react-router-dom";


function Profil () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);
    const firstName = useSelector((state) => state.firstName);
    const lastName = useSelector((state) => state.lastName);
    
    useEffect(() => {
        const fetchUser = async () => {
            if (token) {
                dispatch(setLoading(true));
                try {
                    const response = await getUserProfile(token);
                    dispatch (setUser(response.body));
                    dispatch (setToken(token));
                } catch(error) {
                    dispatch(setError(error.message));
                    navigate("/");
                } finally {
                    (setLoading(false));
                }
            }
        }
        fetchUser();
    }, [token, dispatch])
    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{firstName} {lastName}!</h1>
                <EditName/>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available balance" />
            <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available balance" />
            <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current balance" />
        </main>
    )
}

export default Profil;