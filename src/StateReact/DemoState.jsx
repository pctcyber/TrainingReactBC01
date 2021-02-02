import React, { Component } from "react";

export default class DemoState extends Component {
  userName = "siCyber";
  isLogin = false;

  state = {
    // this.state la 1 thuoc tinh dac biet (co san) cua react class component,
  };

  renderLoginTemple = () => {
    if (this.state.isLogin) {
      return <a className="nav-link">Helo {this.userName}</a>;
    }
    return (
      <button   className="nav-link" onClick={(e) => {
          // khi clic vao nut dang nhap=> goi ham handle login
          this.handleLogin();
        }}
      >
        dang nhap
      </button>
    );
  };

  handleLogin = () => {
    // this.state.isLogin = true;

    let newState = {
      isLogin: true,
    };

    // this.state la phuong thuc bat dong bo chua 2 tham so la state va callback (ham) thuc thi sau khi render lại
    this.setState(newState,()=>{
        console.log(this.state);
    }); // this.setState la phuong thuc co san cua react class component dung de set lai gia tri cua bien state va lam render lai giao dien
    // console.log(this.state);
    // this.render();

    // this.setState({

    // })

  };

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item">
                {/* {this.isLogin ? <a className = "nav-link">Hello {this.userName}</a>: <button>Dang nhap</button>} */}

                {this.renderLoginTemple()}
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
