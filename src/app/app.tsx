import { Component, h } from "preact";
import { AuthApi } from "./api/auth.api";
import { IAppStateModel } from "./app.model";
import { Auth } from "./auth/auth";
import { AuthCreatePlayer } from "./auth/auth-create-player";
import { Header } from "./header/header";
import { Navigation } from "./navigation/navigation";
import { RouterOutlet } from "./router-outlet/router-outlet";

export class App extends Component {
    state: IAppStateModel = {
        user: null
    };

    componentDidMount() {
        AuthApi.auth$(user => this.setState({ user }));
    }

    render() {
        let content: JSX.Element;
        if (this.state.user) {
            if (this.state.user.displayName) {
                content = (
                    <div class="app__container">
                        <Navigation />

                        <RouterOutlet />
                    </div>
                );
            }
            else {
                content = <AuthCreatePlayer />;
            }
        }
        else {
            content = <Auth />;
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