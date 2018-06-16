import { Component, h } from "preact";
import { Header } from "./header/header";
import { Navigation } from "./navigation/navigation";
import { RouterOutlet } from "./router-outlet/router-outlet";

export class App extends Component {
    render() {
        const app = (
            <div class="app">
                <Header />
                <Navigation />

                <RouterOutlet />
            </div>
        );

        return app;
    }
}