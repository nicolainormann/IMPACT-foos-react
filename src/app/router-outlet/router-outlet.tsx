import { Component, h } from "preact";
import { Router } from "preact-router";
import { Translations } from "../../translations/translations";
import { AuthProfile } from "../auth/auth-profile";
import { Match } from "../match/match";
import { Standing } from "../standing/standing";

export class RouterOutlet extends Component {
    render() {
        const routerOutlet = (
            <div class="router-outlet">
                <Router>
                    <Match path={Translations.routes.addMatch.url} />
                    <Standing path={Translations.routes.standing.url} />
                    <AuthProfile path={Translations.routes.profile.url} />
                </Router>
            </div>
        );

        return routerOutlet;
    }
}