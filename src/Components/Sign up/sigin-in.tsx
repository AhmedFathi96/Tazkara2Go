import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Joi from "joi-browser";
import { loginRequested, loginSucceeded } from '../../React-Redux/Actions/login-action';
import { useSelect } from '../../helper';
const SignIn: React.FC = (props: any) => {
  const [loginData, setLoginData] = useState({ usermail: "", password: "",errors:{} });
  const dispatch = useDispatch();
  const history = useHistory();
  const {res}=useSelect(state=>state.loginReducer)
  const handleLoginData = (e: any) => {

    const { name, value } = e.target;
    setLoginData(prevState => ({
      ...prevState,
      [name]: value
    }));
   // console.log(loginData)
  };

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    const errors:any=validate();

    if (errors) return;
    else {
    
     dispatch(loginRequested({ usermail: loginData.usermail, password: loginData.password ,history}));
     

  }}
  
 const schema = {
  usermail: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  };
 const validate = () => {
    const errors:any={};
    const loginDat:any = { ...loginData };
   delete loginDat.errors;
    const res = Joi.validate(loginDat, schema, { abortEarly: false });
    if (res.error === null) {
      setLoginData(prevState => ({
        ...prevState,
        errors: {}
      }));
     
      return null;
    }

    for (const error of res.error.details) {
      errors[error.path] = error.message;
      //console.log(error )
    }
    setLoginData(
      prevState => ({
        ...prevState,
        errors: errors

      }))
     // console.log(errors )
    return errors;
  };

  return (<>
    <ToastContainer />
    <section
      className="account-section bg_img mt-5"

    >
      <div className="container">
        <div className="padding-top padding-bottom">
          <div className="account-area">
            <div className="section-header-3">
              <span className="cate">hello</span>
              <h2 className="title">welcome back</h2>
            </div>
            <form className="account-form">
              <div className="form-group">
                <label htmlFor="email2">
                  Email<span>*</span>
                </label>
                <input
                  type="email"
                  name="usermail"
                  placeholder="Enter Your Email"
                  value={loginData.usermail}
                  onChange={handleLoginData}
                  required
                />
                  {loginData.errors.usermail && (
                          <div className="alert alert-danger">
                            {loginData.errors.usermail}
                          </div>
                        )}
              </div>
              <div className="form-group">
                <label htmlFor="pass3">
                  Password<span>*</span>
                </label>
                <input type="password" value={loginData.password } placeholder="password" name="password" onChange={handleLoginData} required />
                {loginData.errors.password && (
                          <div className="alert alert-danger ">
                            {loginData.errors.password}
                          </div>
                        )}
              </div>
              <div className="form-group checkgroup">
                <input type="checkbox" id="bal2" required defaultChecked />
                <label htmlFor="bal2">remember password</label>
                <a href="#0" className="forget-pass">
                  Forget Password
                </a>
              </div>
              <div className="form-group text-center">
                <input type="submit" defaultValue="log in" onClick={handleSubmit} />
              </div>
            </form>
            <div className="option">
              Don't have an account? <Link to="/sign-up">sign up now</Link>
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

export default SignIn;