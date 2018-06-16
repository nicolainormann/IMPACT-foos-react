import { Component, h } from "preact";
import { Translations } from "../../translations/translations";

export class Header extends Component {
    render() {
        const header = (
            <header class="header">
                {Translations.global.name}
            </header>
        );

        return header;
    }
}