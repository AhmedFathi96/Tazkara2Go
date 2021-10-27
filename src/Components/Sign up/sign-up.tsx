import React, { useEffect, useState } from 'react';
import { Link ,useHistory} from 'react-router-dom';
import Joi from "joi-browser";
import { useDispatch } from 'react-redux';
import { registerRequested } from '../../React-Redux/Actions/register-action';
import { useSelect } from '../../helper';
const SignUp: React.FC = (props:any) => {
    const [registerData, setRegisterData] = useState({ UserName:'',UserEmail:'',UserPhone:'', UserPassword:'',ConfirmPassword:'', errors:{} });
  const dispatch = useDispatch();
  const history = useHistory();
const {res}=useSelect(state=>state.registerReducer)
  const handleRegisterData = (e: any) => {

    const { name, value } = e.target;
    setRegisterData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errors:any=validate();

    if (errors) return;
    else {
        
  
      dispatch(registerRequested({ UserName:registerData.UserName,UserEmail: registerData.UserEmail, UserPhone:registerData.UserPhone,UserPassword:registerData.UserPassword }
      ));
     

    history.goBack()
  // window.location.reload()

  }}
 const schema = {
   UserName:Joi.string().regex(/^([\w]{3,})+\s+([\w\s]{3,})+$/i).required(),
    UserEmail: Joi.string().email().required(),
    UserPhone:Joi.string().length(11).regex(/^[0-9]+$/).required(),
    UserPassword:Joi.string().min(6).required().label("UserPassword"),
    ConfirmPassword: Joi.any().valid(Joi.ref("UserPassword")).required(),
  };
 const validate = () => {
    const errors:any={};
    const registerDat:any = { ...registerData };
   delete registerDat.errors;
    const res = Joi.validate(registerDat, schema, { abortEarly: false });
    if (res.error === null) {
      setRegisterData(prevState => ({
        ...prevState,
        errors: {}
      }));
     
      return null;
    }

    for (const error of res.error.details) {
      errors[error.path] = error.message;
      //console.log(error )
    }
    setRegisterData(
      prevState => ({
        ...prevState,
        errors: errors

      }))
      console.log(errors )
    return errors;
  };

    return(

        <>
            <section
                className="account-section bg_img mt-5"
             
            >
                <div className="container">
                    <div className="padding-top padding-bottom">
                        <div className="account-area">
                            <div className="section-header-3">
                                <span className="cate">welcome</span>
                                <h2 className="title">to Tazkarza2Go </h2>
                            </div>
                            <form className="account-form">
                            <div className="form-group">
                                    <label htmlFor="Full Name">
                                        Full Name<span>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Full Name"
                                        id="Full Name"
                                        name="UserName"
                                        value={registerData.UserName}
                                        onChange={handleRegisterData}
                                        required
                                    />
                                    {registerData.errors.UserName && (
                                        <div className="alert alert-danger ">
                                            {registerData.errors.UserName}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">
                                        Email<span>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter Your Email"
                                        id="email"
                                        name="UserEmail"
                                        value={registerData.UserEmail}
                                        onChange={handleRegisterData}
                                        required
                                    />
                                      {registerData.errors.UserEmail && (
                                        <div className="alert alert-danger ">
                                            {registerData.errors.UserEmail}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">
                                        Phone Number<span>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Phone Number"
                                        id="phone"
                                        name="UserPhone"
                                        value={registerData.UserPhone}
                                        onChange={handleRegisterData}
                                        required
                                    />
                                     {registerData.errors.UserPhone && (
                                        <div className="alert alert-danger ">
                                            {registerData.errors.UserPhone}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass1">
                                        Password<span>*</span>
                                    </label>
                                    <input
                                     type="password"
                                     placeholder="Password"
                                      id="pass1"
                                      name="UserPassword"
                                      value={registerData.UserPassword}
                                      onChange={handleRegisterData}
                                       required 
                                       />
                                       {registerData.errors.UserPassword && (
                                        <div className="alert alert-danger ">
                                            {registerData.errors.UserPassword}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass2">
                                        Confirm Password<span>*</span>
                                    </label>
                                    <input type="password"
                                     placeholder="Password" 
                                     id="pass2" 
                                     name="ConfirmPassword"
                                     value={registerData.ConfirmPassword}
                                     onChange={handleRegisterData}
                                     required 
                                     />
                                    {registerData.errors.ConfirmPassword && (
                                        <div className="alert alert-danger ">
                                            {registerData.errors.ConfirmPassword}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group checkgroup">
                                    <input type="checkbox" id="bal" required defaultChecked />
                                    <label htmlFor="bal">
                                        I agree to the <a href="#0">Terms, Privacy Policy</a> and{" "}
                                        <a href="#0">Fees</a>
                                    </label>
                                </div>
                                <div className="form-group text-center">
                                    <input type="submit" defaultValue="Sign Up"  onClick={handleSubmit}/>
                                </div>
                            </form>
                            <div className="option">
                                Already have an account? <Link to="/sign-in">Login</Link>
                            </div>
                            <div className="or">
                                <span>Or</span>
                            </div>
                            <ul className="social-icons">
                                <li>
                                    <a href="#0">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#0" className="active">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#0">
                                        <i className="fab fa-google" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )

}
export default SignUp;