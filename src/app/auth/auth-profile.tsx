import { Component, h } from "preact";
import { Translations } from "../../translations/translations";
import { AuthApi } from "../api/auth.api";
import { AuthProfileImage } from "./auth-profile-image";
import { IAuthProfilePropsModel, IAuthProfileStateModel } from "./auth.model";

export class AuthProfile extends Component<IAuthProfilePropsModel, any> {
    state: IAuthProfileStateModel = {
        photoURL: "",
        displayName: ""
    };

    onInput = (event: Event) => {
        const target = (event.target! as HTMLInputElement);
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    }

    checkImage = (event: Event) => {
        const target = (event.target! as HTMLInputElement);
        const hasImgExtention = target.value.match(/\.(jpeg|jpg|gif|png)$/) !== null;
        if (hasImgExtention) {
            const img = new Image();
            img.src = target.value;
            img.onload = () => {
                this.onInput(event);
            };
            img.onerror = () => {
                this.setState({ photoURL: "" });
            };
        }
        else if (this.state.photoURL) {
            this.setState({ photoURL: "" });
        }
    }

    onSubmit = (event: Event) => {
        event.preventDefault();
        AuthApi.updateCurrentProfile({ displayName: this.state.displayName, photoURL: this.state.photoURL }).then(() => this.props.onProfileUpdated(AuthApi.getCurrentUser()));
    }

    render() {
        const authProfile = (
            <form class="auth-profile" onSubmit={this.onSubmit}>
                <div class="auth-profile__avatar">
                    {this.state.displayName &&
                        <div class="auth-profile__display-name">
                            {this.state.displayName}
                        </div>

                    }
                    <AuthProfileImage photoURL={this.state.photoURL} />
                </div>
                <input class="auth__input input" onInput={this.onInput} type="text" name="displayName" placeholder={Translations.auth.displayName} required />
                <input class="auth__input input" onInput={this.checkImage} type="text" name="photoURL" placeholder={Translations.auth.photoURL} />
                <input class="auth__button button" type="submit" value={Translations.auth.createPlayer} />
            </form>
        );

        return authProfile;
    }
}