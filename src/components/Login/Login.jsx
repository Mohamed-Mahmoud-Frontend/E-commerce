import "./Login.css";
import image from "../../assets/Login.svg";

const Login = () => {
  return (
    <>
      <section className="Sec_login">
        <div className="Login">
          <div className="Image_Login slideInRight">
            <img src={image} alt="Image" />
          </div>
          <div className="circle_anim"></div>
          <div className="Form_Login slide_left">
            <h3 className="title_form">Login to continue</h3>
            <div className="IconSocial">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-google"></i>
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-brands fa-github"></i>
            </div>
            <form>
              <div className="Input_form">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="" />
              </div>
              <div className="Input_form">
                <label htmlFor="email">password</label>
                <input type="password" placeholder="" />
              </div>
              <div className="check">
                <input type="checkbox" className="check_in" />
              </div>

              <button className="BTN_Login">Login</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
