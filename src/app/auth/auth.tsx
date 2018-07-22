import { Component, h } from "preact";
import { Translations } from "../../translations/translations";
import { AuthApi } from "../api/auth.api";
import { AuthCreateUser } from "./auth-create-user";
import { AuthLogin } from "./auth-login";
import { IAuthModel, IAuthStateModel } from "./Auth.model";

export class Auth extends Component {
    state: IAuthStateModel = {
        create: false,
        form: {
            email: "",
            password: ""
        }
    };

    toggleCreate = () => {
        this.setState({ create: !this.state.create });
    }

    onChange = (AuthModel: IAuthModel) => {
        this.setState({ form: AuthModel });
    }

    onSubmit = (event: Event) => {
        event.preventDefault();
        this.state.create ? AuthApi.createUser(this.state.form.email, this.state.form.password) : AuthApi.login(this.state.form.email, this.state.form.password);
    }

    render() {
        const auth = (
            <form class="auth" onSubmit={this.onSubmit}>
                <div class="auth__container">
                    {this.state.create ? <AuthCreateUser onAuthChange={this.onChange} /> : <AuthLogin onAuthChange={this.onChange} />}

                    <input class="auth__button button" type="submit" value={this.state.create ? Translations.auth.createUser : Translations.auth.login} />

                    <button type="button" class="button button_link" onClick={this.toggleCreate}>
                        {this.state.create ? Translations.auth.login : Translations.auth.createUser}
                    </button>
                </div>
            </form>
        );

        return auth;
    }
}