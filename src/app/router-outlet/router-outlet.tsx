import { Component, h } from "preact";
import { Router } from "preact-router";
import { Translations } from "../../translations/translations";
import { AddMatch } from "../add-match/add-match";
import { Standing } from "../standing/standing";

export class RouterOutlet extends Component {
    render() {
        const routerOutlet = (
            <div class="router-outlet">
                <Router>
                    <AddMatch path={Translations.routes.addMatch.url} />
                    <Standing path={Translations.routes.standing.url} />
                </Router>
            </div>
        );

        return routerOutlet;
    }
}