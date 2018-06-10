import * as React from "react";
import * as ReactDOM from "react-dom";

import './styles/_app.scss';

import { App } from "./components/app";

ReactDOM.render(
    <App compiler="TypeScript" framework="React" />,
    document.querySelector(".app")
);