import { Component, h } from "preact";
import { Translations } from "../../translations/translations";
import { ILoginModel, ILoginProps } from "./login.model";

export class LoginForm extends Component<ILoginProps, any> {
    state: ILoginModel = {
        email: "",
        password: ""
    };

    onInput = (event: Event) => {
        const target = (event.target! as HTMLInputElement);
        if (target.checkValidity()) {
            const name = target.name;
            const value = target.value;
            this.setState({ [name]: value });

            if (!!this.state.email && !!this.state.password) {
                this.props.onLoginChange({
                    email: this.state.email,
                    password: this.state.password
                });
            }
        }
    }

    render() {
        const loginForm = (
            <div class="login-form">
                <input class="login__input input" onInput={this.onInput} type="email" name="email" placeholder={Translations.login.email} required />
                <input class="login__input input" onInput={this.onInput} type="password" name="password" placeholder={Translations.login.password} required minLength={6} />
            </div>
        );

        return loginForm;
    }
}