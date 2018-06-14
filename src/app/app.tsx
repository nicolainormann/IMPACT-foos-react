import { Component, h } from 'preact';
import { Header } from './header/header';

export class App extends Component {
    render() {
        const app = (
            <div class='app'>
                <Header />
            </div>
        );
        return app;
    }
}