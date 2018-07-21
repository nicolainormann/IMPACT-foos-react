import { Component, h } from "preact";
import { Translations } from "../../translations/translations";
import { auth } from "../firebase/firebase";
import { LoginCreateUserForm } from "./login-create-user-form";
import { LoginForm } from "./login-form";
import { ILoginModel, ILoginStateModel } from "./login.model";

export class Login extends Component {
    state: ILoginStateModel = {
        create: false,
        form: {
            email: "",
            password: ""
        }
    };

    toggleCreate = () => {
        this.setState({ create: !this.state.create });
    }

    onChange = (loginModel: ILoginModel) => {
        this.setState({ form: loginModel });
    }

    onSubmit = (event: Event) => {
        event.preventDefault();
        const promise = this.state.create ? auth.createUserWithEmailAndPassword(this.state.form.email, this.state.form.password) : auth.signInWithEmailAndPassword(this.state.form.email, this.state.form.password);
        promise
            .then(res => console.log(res))
            .catch(res => console.log(res));
    }

    render() {
        const login = (
            <form class="login" name="login" onSubmit={this.onSubmit}>
                <div class="login__container">
                    {this.state.create ? <LoginCreateUserForm onLoginChange={this.onChange} /> : <LoginForm onLoginChange={this.onChange} />}

                    <input class="login__button button" type="submit" value={this.state.create ? Translations.login.createUser : Translations.login.login} />

                    <button class="button" onClick={this.toggleCreate}>
                        {this.state.create ? Translations.login.login : Translations.login.createUser}
                    </button>
                </div>
            </form>
        );

        return login;
    }
}