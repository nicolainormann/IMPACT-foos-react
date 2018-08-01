import { Component, h } from "preact";
import { Translations } from "../../translations/translations";
import { IAuthCreateUserState, IAuthProps } from "./auth.model";

export class AuthCreateUser extends Component<IAuthProps, IAuthCreateUserState> {
    state: IAuthCreateUserState = {
        email: "",
        password: "",
        confirmPassword: ""
    };

    onInput = (event: Event) => {
        const target = (event.target! as HTMLInputElement);
        if (target.checkValidity()) {
            const name = target.name;
            const value = target.value;
            this.setState(() => ({ [name]: value }));

            if (!!this.state.email && !!this.state.password && !!this.state.confirmPassword && this.state.password === this.state.confirmPassword) {
                this.props.onAuthChange({
                    email: this.state.email,
                    password: this.state.password
                });
            }
        }
    }

    render() {
        const authCreateUser = (
            <div class="auth-create-user">
                <input class="auth__input input" onInput={this.onInput} type="email" name="email" value={this.state.email} placeholder={Translations.auth.email} required />
                <input class="auth__input input" onInput={this.onInput} type="password" name="password" value={this.state.password} placeholder={Translations.auth.password} required minLength={6} />
                <input class="auth__input input" onInput={this.onInput} type="password" name="confirmPassword" value={this.state.confirmPassword} placeholder={Translations.auth.confirmPassword} required minLength={6} />
            </div>
        );

        return authCreateUser;
    }
}