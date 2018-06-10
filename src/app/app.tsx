import * as React from 'react';
import { Header } from './header/header';

export class App extends React.Component {
    render() {
        const app = (
            <div className='app'>
                <Header />
            </div>
        );
        return app;
    }
}