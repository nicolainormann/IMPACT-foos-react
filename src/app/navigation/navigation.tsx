import { Component, h } from "preact";
import { Link } from "preact-router";
import { Translations } from "../../translations/translations";

export class Navigation extends Component {
    render() {
        const navigation = (
            <nav class="navigation">
                <Link class="navigation__link" activeClassName="navigation__link_active" href={Translations.routes.addMatch.url}>
                    <svg class="navigation__link-svg" viewBox="0 0 100 100">
                        <path d="M 50 5 C 25.182722 5 5 25.18269 5 50 C 5 74.8173 25.182722 95 50 95 C 74.817278 95 95 74.8173 95 50 C 95 25.18269 74.817278 5 50 5 z M 50 11 C 71.574639 11 89 28.42533 89 50 C 89 71.5746 71.574639 89 50 89 C 28.425362 89 11 71.5746 11 50 C 11 28.42533 28.425362 11 50 11 z M 49.96875 25.9375 A 3.0003 3.0003 0 0 0 47 29 L 47 47 L 29 47 A 3.0003 3.0003 0 0 0 28.6875 47 A 3.0040663 3.0040663 0 1 0 29 53 L 47 53 L 47 71 A 3.0003 3.0003 0 1 0 53 71 L 53 53 L 71 53 A 3.0003 3.0003 0 1 0 71 47 L 53 47 L 53 29 A 3.0003 3.0003 0 0 0 49.96875 25.9375 z" />
                    </svg>
                    <div class="navigation__link-text">
                        {Translations.routes.addMatch.title}
                    </div>
                </Link>

                <Link class="navigation__link" activeClassName="navigation__link_active" href={Translations.routes.standing.url}>
                    <svg class="navigation__link-svg" viewBox="0 0 100 100">
                        <path d="M 34.6875 17 A 3.0003 3.0003 0 0 0 32 20 L 32 39 L 5 39 A 3.0003 3.0003 0 0 0 4.6875 39 A 3.0003 3.0003 0 0 0 2 42 L 2 80 A 3.0003 3.0003 0 0 0 5 83 L 95 83 A 3.0003 3.0003 0 0 0 98 80 L 98 54 A 3.0003 3.0003 0 0 0 95 51 L 68 51 L 68 20 A 3.0003 3.0003 0 0 0 65 17 L 35 17 A 3.0003 3.0003 0 0 0 34.6875 17 z M 38 23 L 62 23 L 62 77 L 38 77 L 38 23 z M 8 45 L 32 45 L 32 77 L 8 77 L 8 45 z M 68 57 L 92 57 L 92 77 L 68 77 L 68 57 z" />
                    </svg>
                    <div class="navigation__link-text">
                        {Translations.routes.standing.title}
                    </div>
                </Link>
            </nav>
        );

        return navigation;
    }
}