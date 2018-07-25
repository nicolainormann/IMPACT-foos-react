import { Component, h } from "preact";
import { Translations } from "../../translations/translations";
import { IAuthProfileImagePropsModel } from "./auth.model";

export class AuthProfileImage extends Component<IAuthProfileImagePropsModel, any> {
    render() {
        let image: JSX.Element;
        if (this.props.photoURL) {
            image = <div class="auth-profile-image__image" style={"background-image: url(" + this.props.photoURL + ");"} title={Translations.auth.profileImage} />;
        }
        else {
            image = (
                <svg class="auth-profile-image__image" viewBox="0 0 96 96">
                    <g transform="translate(0,-952.36218)">
                        <path d="M48,952.4c-26.5,0-48,21.5-48,48s21.5,48,48,48s48-21.5,48-48S74.5,952.4,48,952.4z M48,958.4c23.2,0,42,18.8,42,42 c0,10.2-3.6,19.5-9.7,26.8c-2.5-11.7-11.8-21.1-23.3-24.4c4.8-3,7.9-8.3,7.9-14.3c0-9.4-7.6-17-17-17s-17,7.6-17,17 c0,6,3.2,11.3,7.9,14.3c-11.5,3.4-20.8,12.8-23.3,24.4c-6-7.3-9.7-16.6-9.7-26.8C6,977.1,24.8,958.4,48,958.4z M48,977.4 c6.1,0,11,4.9,11,11s-4.9,11-11,11s-11-4.9-11-11S41.9,977.4,48,977.4z M48,1007.4c13.8,0,26.5,11.6,27,25.2 c-7.3,6.1-16.7,9.8-27,9.8s-19.7-3.7-27-9.8C21.5,1019,34.2,1007.4,48,1007.4z" />
                    </g>
                </svg>
            );
        }

        const authProfileImage = (
            <div class="auth-profile-image">
                {image}
            </div>
        );

        return authProfileImage;
    }
}