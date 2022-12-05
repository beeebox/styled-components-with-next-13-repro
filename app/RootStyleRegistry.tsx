'use client';

import React from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';


export default function RootStyleRegistry({ children }: { children: React.ReactNode }) {
    const [styledComponentsStyleSheet] = React.useState(() => new ServerStyleSheet());

    const styledComponentsFlushEffect = () => {
        const styles = styledComponentsStyleSheet.getStyleElement();

        // styledComponentsStyleSheet.instance.clearTag();
        return <>{styles}</>;
    }

    const StyledComponentsRegistry = ({ children }) => (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>
    )

    useServerInsertedHTML(() => {
        const styles = styledComponentsFlushEffect()
        return <>{styles}</>;
    });

    return (
        <StyledComponentsRegistry>
            <>{children}</>
        </StyledComponentsRegistry>
    );
}
