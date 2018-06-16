import { Component, h } from "preact";
import { Router } from "preact-router";
import { Translations } from "../../translations/translations";

export class RouterOutlet extends Component {
    render() {
        const routerOutlet = (
            <Router>
                <div path={Translations.routes.submit.url}>Default</div>
            </Router>
        );

        return routerOutlet;
    }
}