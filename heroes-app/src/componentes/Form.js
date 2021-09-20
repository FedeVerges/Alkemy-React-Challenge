import React, {
    Component
} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: false,
            response: '',
        };
    }

    render() {
        return (
            <form class="email-form" method="post">
        <input type="email" name="email" title="Escribe un email valido como por ejemplo: hola@soyUnSuperheroe.com" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" placeholder="Escribe tu email" required/>        <input type="password" name="password" placeholder="Escribe tu password" minlength="8"
            title="Escribe password con mas de 8 caracteres" required/>
        <input type="submit" value="Enviar"/>
                <div class="email-form-response none"></div>
            </form>
            );
    }
}

export {Form};