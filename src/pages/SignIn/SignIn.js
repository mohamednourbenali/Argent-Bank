import React, { useState } from "react";
import Formulaire from "../../components/Formulaire/Formulaire"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


function SignIn () {
    
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faUserCircle} />
                <h1>Sign In</h1>
                <Formulaire/>
            </section>
        </main>
    )
}

export default SignIn;