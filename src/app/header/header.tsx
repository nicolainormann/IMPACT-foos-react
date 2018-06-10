import * as React from 'react';
import { Translations } from '../../translations/translations';

export class Header extends React.Component {
    render() {
        const header = (
            <header className='header'>
                {Translations.global.name}
            </header>
        );
        return header;
    }
}