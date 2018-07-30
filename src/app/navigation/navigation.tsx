import { Component, h } from "preact";
import { Link } from "preact-router/match";
import { Translations } from "../../translations/translations";
import { AuthApi } from "../api/auth.api";
import { AuthProfileImage } from "../auth/auth-profile-image";
import { INavigationProps } from "./navigation.model";

export class Navigation extends Component<INavigationProps, any> {
    logout = () => {
        AuthApi.logout();
    }

    render() {
        const navigation = (
            <nav class="navigation">
                <div class="navigation__top">
                    <Link class="navigation__link" activeClassName="navigation__link_active" href={Translations.routes.addMatch.url}>
                        <svg class="navigation__link-image" viewBox="0 0 100 100">
                            <path d="M 50 5 C 25.182722 5 5 25.18269 5 50 C 5 74.8173 25.182722 95 50 95 C 74.817278 95 95 74.8173 95 50 C 95 25.18269 74.817278 5 50 5 z M 50 11 C 71.574639 11 89 28.42533 89 50 C 89 71.5746 71.574639 89 50 89 C 28.425362 89 11 71.5746 11 50 C 11 28.42533 28.425362 11 50 11 z M 49.96875 25.9375 A 3.0003 3.0003 0 0 0 47 29 L 47 47 L 29 47 A 3.0003 3.0003 0 0 0 28.6875 47 A 3.0040663 3.0040663 0 1 0 29 53 L 47 53 L 47 71 A 3.0003 3.0003 0 1 0 53 71 L 53 53 L 71 53 A 3.0003 3.0003 0 1 0 71 47 L 53 47 L 53 29 A 3.0003 3.0003 0 0 0 49.96875 25.9375 z" />
                        </svg>
                        <div class="navigation__link-text">
                            {Translations.routes.addMatch.title}
                        </div>
                    </Link>

                    <Link class="navigation__link" activeClassName="navigation__link_active" href={Translations.routes.standing.url}>
                        <svg class="navigation__link-image" viewBox="0 0 100 100">
                            <path d="M 34.6875 17 A 3.0003 3.0003 0 0 0 32 20 L 32 39 L 5 39 A 3.0003 3.0003 0 0 0 4.6875 39 A 3.0003 3.0003 0 0 0 2 42 L 2 80 A 3.0003 3.0003 0 0 0 5 83 L 95 83 A 3.0003 3.0003 0 0 0 98 80 L 98 54 A 3.0003 3.0003 0 0 0 95 51 L 68 51 L 68 20 A 3.0003 3.0003 0 0 0 65 17 L 35 17 A 3.0003 3.0003 0 0 0 34.6875 17 z M 38 23 L 62 23 L 62 77 L 38 77 L 38 23 z M 8 45 L 32 45 L 32 77 L 8 77 L 8 45 z M 68 57 L 92 57 L 92 77 L 68 77 L 68 57 z" />
                        </svg>
                        <div class="navigation__link-text">
                            {Translations.routes.standing.title}
                        </div>
                    </Link>
                </div>

                <div class="navigation__bottom">
                    {this.props.user &&
                        <Link class="navigation__link" activeClassName="navigation__link_active" href={Translations.routes.profile.url}>
                            <div class="navigation__link-image">
                                <AuthProfileImage photoURL={this.props.user.photoURL} />
                            </div>

                            <div class="navigation__link-text">
                                {this.props.user.displayName}
                            </div>
                        </Link>
                    }

                    <button class="navigation__link navigation__link_bottom" onClick={this.logout}>
                        <svg class="navigation__link-image" viewBox="0 0 74 90">
                            <g transform="translate(0,-952.36218)">
                                <path d="M37,952.4c-14.4,0-26,11.7-26,26.1v7.9H3c-0.1,0-0.2,0-0.3,0c-1.5,0.2-2.7,1.5-2.7,3v50c0,1.7,1.3,3,3,3h68 c1.7,0,3-1.3,3-3v-50c0-1.7-1.3-3-3-3h-8v-7.9C63,964.1,51.4,952.4,37,952.4z M37,958.4c11.1,0,20,8.9,20,20.1v7.9H17v-7.9 C17,967.3,25.9,958.4,37,958.4z M6,992.4h62v44H6V992.4z M37,1000.4c-6,0-11,5-11,11c0,2.9,1.2,5.6,3,7.5l-2.7,5 c-0.8,1.5-0.3,3.3,1.2,4.1c0.4,0.2,1,0.4,1.5,0.4h16c1.7,0,3-1.3,3-3c0-0.5-0.1-1-0.4-1.5l-2.7-5c1.9-2,3-4.6,3-7.5 C48,1005.3,43,1000.4,37,1000.4z M37,1006.4c2.8,0,5,2.2,5,5c0,1.8-1,3.4-2.4,4.3c-1.4,0.8-1.8,2.6-1.1,4l1.5,2.8h-6l1.5-2.8 c0.7-1.4,0.3-3.1-1.1-4c-1.5-0.9-2.4-2.4-2.4-4.3C32,1008.6,34.2,1006.4,37,1006.4z" />
                            </g>
                        </svg>
                        <div class="navigation__link-text">
                            {Translations.routes.logout.title}
                        </div>
                    </button>
                </div>
            </nav>
        );

        return navigation;
    }
}