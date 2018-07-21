import { Component, h } from "preact";
import { auth } from "./firebase/firebase";
import { Header } from "./header/header";
import { Login } from "./login/login";
import { Navigation } from "./navigation/navigation";
import { RouterOutlet } from "./router-outlet/router-outlet";

export class App extends Component {
    state = {
        loggedIn: false
    };

    componentDidMount() {
        auth.onAuthStateChanged(user => this.setState({ loggedIn: !!user }));
    }

    render() {
        let content: JSX.Element;
        if (this.state.loggedIn) {
            content = (
                <div class="app__container">
                    <Navigation />

                    <RouterOutlet />
                </div>
            );
        }
        else {
            content = <Login />;
        }

        const app = (
            <div class="app">
                <Header />
                {content}
            </div>
        );

        return app;
    }
}