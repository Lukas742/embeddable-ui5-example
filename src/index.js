import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {ThemeProvider} from "@ui5/webcomponents-react";

import './page/PageElement';
import '@ui5/webcomponents-react/dist/Assets.js';
import '@ui5/webcomponents-icons/AllIcons.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
);