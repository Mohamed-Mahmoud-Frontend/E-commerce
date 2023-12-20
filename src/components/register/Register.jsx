import "../Login/Login.css";
import image from "../../assets/Login.svg";

import "animate.css";

const Register = () => {
  return (
    <>
      <section className='Sec_login "'>
        <div className="Login ">
          <div className="Image_Login slideInRight">
            <img src={image} alt="Image" />
            <h1>Free Palestine</h1>
            <h4>ארור על ישראל</h4>

          </div>
          <div className="circle_anim"></div>
          <div className="Form_Login slide_left">
            <h3 className="title_form ">Create Account</h3>

            <div className="IconSocial ">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-google"></i>
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-brands fa-github"></i>
            </div>
            <form className=" ANIM_LEFT">
              <div className="Input_form">
                <label htmlFor="email">userName</label>
                <input type="text" placeholder="" required />
              </div>

              <div className="Input_form">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="" required />
              </div>
              <div className="Input_form">
                <label htmlFor="email">password</label>
                <input type="password" placeholder="" required />
              </div>
              <div className="Input_form">
                <label htmlFor="email">confirm password</label>
                <input type="password" placeholder="" required />
              </div>
              <button className="BTN_Login">Register</button>

              <div></div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
