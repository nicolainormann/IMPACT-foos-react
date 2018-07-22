import { Component, h } from "preact";
import { Translations } from "../../translations/translations";
import { IAuthModel, IAuthProps } from "./auth.model";

export class AuthLogin extends Component<IAuthProps, any> {
    state: IAuthModel = {
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
                this.props.onAuthChange({
                    email: this.state.email,
                    password: this.state.password
                });
            }
        }
    }

    render() {
        const authLogin = (
            <div class="auth-login">
                <input class="auth__input input" onInput={this.onInput} type="email" name="email" placeholder={Translations.auth.email} required />
                <input class="auth__input input" onInput={this.onInput} type="password" name="password" placeholder={Translations.auth.password} required minLength={6} />
            </div>
        );

        return authLogin;
    }
}