import { Component, h } from "preact";
import { Translations } from "../../translations/translations";
import { ILoginCreateUserStateModel, ILoginProps } from "./login.model";

export class LoginCreateUserForm extends Component<ILoginProps, any> {
    state: ILoginCreateUserStateModel = {
        email: "",
        password: "",
        confirmPassword: ""
    };

    onInput = (event: Event) => {
        const target = (event.target! as HTMLInputElement);
        if (target.checkValidity()) {
            const name = target.name;
            const value = target.value;
            this.setState({ [name]: value });

            if (!!this.state.email && !!this.state.password && !!this.state.confirmPassword && this.state.password === this.state.confirmPassword) {
                this.props.onLoginChange({
                    email: this.state.email,
                    password: this.state.password
                });
            }
        }
    }

    render() {
        const loginCreateUserForm = (
            <div class="login-create-user-form">
                <input class="login__input input" onInput={this.onInput} type="email" name="email" placeholder={Translations.login.email} required />
                <input class="login__input input" onInput={this.onInput} type="password" name="password" placeholder={Translations.login.password} required minLength={6} />
                <input class="login__input input" onInput={this.onInput} type="password" name="confirmPassword" placeholder={Translations.login.confirmPassword} required minLength={6} />
            </div>
        );

        return loginCreateUserForm;
    }
}