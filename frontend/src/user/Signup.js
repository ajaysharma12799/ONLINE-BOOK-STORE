import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import Base from './../core/Base';

const Signup = () => {

    const SignupForm = () => (
        <div className="mt-5">
            <form>
                <div>
                        <div className="form-group">
                            <input type="text" placeholder="FirstName" className="form-control w-50 mx-auto my-auto" />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="LastName" className="form-control w-50 mx-auto my-auto" />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Email" className="form-control w-50 mx-auto my-auto" />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Password" className="form-control w-50 mx-auto my-auto" />
                        </div>
                </div>
                <button className="btn btn-block btn-success w-50 mx-auto my-auto">Signup</button>
            </form>
        </div>
    )

    return (
        <Base title="SIGNUP PAGE" description="A PAGE FOR USER REGISTRATION">
            { SignupForm() }
        </Base>
    )
}

export default Signup
