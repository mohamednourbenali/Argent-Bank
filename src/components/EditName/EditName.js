import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {setUser,setError, setLoading} from "../../store/store"
import { updateUserProfile } from "../../authService";
import "./EditName.css"

function EditName() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);

    const [show, setShow] = useState(false);
    const [newFirstName, setNewFirstName] = useState("");
    const [newLastName,setNewLastName] = useState("");
    

   const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try{
        if ((newFirstName.length > 0)&&(newLastName.length > 0)){
            const response = await updateUserProfile(token,{
                firstName: newFirstName,
                lastName: newLastName,
            });
            dispatch(setUser(response.body));
            showForm();
        } else {
            dispatch(setError("Both first name and last name must be provided."));
        }
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
   }
   const handleCancel = () =>{
        showForm();
        setNewFirstName("");
        setNewLastName("");
   }
    
    const showForm = () => {
        show? setShow(false) : setShow(true);
    }

    return (
        <div>
            {!show ?
                <button className="edit-button" onClick={showForm}>Edit Name</button>
            :
                <form className="edit-name-form" onSubmit={handleSubmit}>
                    <div className="inputs">
                        <div className="input-container">
                            <label className="hidden"> first Name</label>
                            <input 
                                type="text" 
                                id="firstName" 
                                onChange={(e) => setNewFirstName(e.target.value)} 
                                value={newFirstName} 
                                placeholder="new first name"
                                />
                        </div>
                        <div className="input-container">
                            <label className="hidden"> last Name</label>
                            <input 
                                type="text" 
                                id="lastName" 
                                onChange={(e) => setNewLastName(e.target.value)} 
                                value={newLastName} 
                                placeholder="new last name"
                                />
                        </div>
                    </div>
                    <div className="button-container">
                        <button className="edit-button" type="submit" >Save</button>
                        <button className="edit-button" onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            }
        </div>
    )
}

export default EditName;