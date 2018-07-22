import { Component, h } from "preact";
import { Translations } from "../../translations/translations";
import { IAuthCreatePlayerStateModel } from "./auth.model";

export class AuthCreatePlayer extends Component {
    state: IAuthCreatePlayerStateModel = {
        photoURL: "",
        displayName: ""
    };

    onInput = (event: Event) => {
        const target = (event.target! as HTMLInputElement);
        if (target.checkValidity()) {
            const name = target.name;
            const value = target.value;
            this.setState({ [name]: value });
        }
    }

    render() {
        const authCreatePlayer = (
            <form class="auth-create-player">
                <input class="auth__input input" onInput={this.onInput} type="text" name="displayName" placeholder={Translations.auth.displayName} required />
                <input class="auth__button button" type="submit" value={Translations.auth.createPlayer} />
            </form>
        );

        return authCreatePlayer;
    }
}