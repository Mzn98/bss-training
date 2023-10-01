import React from 'react';
import {
    AppProvider,
    Frame,
} from '@shopify/polaris';
import en from "@shopify/polaris/locales/en.json";
import AppTopBar from './TopBar';
import AppNavigation from './Navigation'
import { logo } from '../constants'

export default function AppLayout({ children }) {
    return (
        <AppProvider i18n={en}>
            <Frame
                logo={logo}
                topBar={<AppTopBar />}
                navigation={<AppNavigation />}
            >
                <React.Fragment>
                    {children}
                </React.Fragment>
            </Frame>
        </AppProvider>
    );
}