import { Component, h } from "preact";
import { Router } from "preact-router";
import { Translations } from "../../translations/translations";

export class RouterOutlet extends Component {
    render() {
        const routerOutlet = (
            <div class="router-outlet">
                <Router>
                    <div path={Translations.routes.addMatch.url}>{Translations.routes.addMatch.title}</div>
                    <div path={Translations.routes.standing.url}>{Translations.routes.standing.title}</div>
                </Router>
            </div>
        );

        return routerOutlet;
    }
}