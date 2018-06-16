import { Component, h } from "preact";
import { Link } from "preact-router";
import { Translations } from "../../translations/translations";

export class Navigation extends Component {
    render() {
        const navigation = (
            <nav class="navigation">
                <Link class="navigation__link" activeClassName="navigation__link_active" href={Translations.routes.submit.url}>{Translations.routes.submit.title}</Link>
                <Link class="navigation__link" activeClassName="navigation__link_active" href={Translations.routes.standing.url}>{Translations.routes.standing.title}</Link>
            </nav>
        );

        return navigation;
    }
}