import React from 'react'
import Base from './../core/Base';

const Signin = () => {

    const SigninForm = () => (
        <div className="mt-5">
            <form>
                <div className="form-group">
                    <input type="text" placeholder="Email" className="form-control w-50 mx-auto my-auto" />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Password" className="form-control w-50 mx-auto my-auto" />
                </div>
                <button className="btn btn-block btn-success w-50 mx-auto my-auto">Signin</button>
            </form>
        </div>
    )

    return (
        <Base title="SIGNIN PAGE" description="A PAGE FOR USER LOGIN"> 
            { SigninForm() }
        </Base>
    )
}

export default Signin
