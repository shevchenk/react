import React, {Component} from "react";

const Login = ()=>{
    let r =
        <div>
            <h3>Login</h3>
        </div>
    return r
}

const Logout = ()=>{
    let r =
        <div>
            <h3>Logout</h3>
        </div>
    return r
}


class RenderizadoCondicional extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sesion: true,
        };
    }

    render() {
      return (
        <div>
            <h2>Renderizado Condicional</h2>
            {this.state.sesion ? <Login></Login> : <Logout></Logout>}
        </div>
      );

    }
}


  export default RenderizadoCondicional