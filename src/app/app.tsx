import { Component, h } from "preact";
import { AuthApi } from "./api/auth.api";
import { IAppStateModel } from "./app.model";
import { Auth } from "./auth/auth";
import { AuthProfile } from "./auth/auth-profile";
import { Header } from "./header/header";
import { Navigation } from "./navigation/navigation";
import { RouterOutlet } from "./router-outlet/router-outlet";

export class App extends Component {
    state: IAppStateModel = {
        user: null
    };

    componentDidMount() {
        AuthApi.auth$(user => this.updateUser(user));
    }

    updateUser = (user: firebase.User | null) => {
        this.setState({ user });
    }

    render() {
        let content: JSX.Element;
        if (this.state.user && this.state.user.displayName) {
            content = (
                <div class="app__container">
                    <Navigation user={this.state.user} />

                    <RouterOutlet />
                </div>
            );
        }
        else {
            content = (
                <div class="app__center">
                    <div class="app__center-container">
                        {this.state.user ? <AuthProfile onProfileUpdated={this.updateUser} /> : <Auth />}
                    </div>
                </div>
            );
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