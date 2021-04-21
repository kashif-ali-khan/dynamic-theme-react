import React from 'react';

/**
 * The theme components only imports it's theme CSS-file. These components are lazy
 * loaded, to enable "code splitting" (in order to avoid the themes being bundled together)
 */
const Theme1 = React.lazy(() => import('./Theme1'));
const Theme2 = React.lazy(() => import('./Theme2'));
const Theme3 = React.lazy(() => import('./Theme3'));

const ThemeSelector = ({ children }) => {
    const shouldRenderTheme1 = false;
    const shouldRenderTheme2 = true;
    const shouldRenderTheme3 = false;
    
    document.body.classList.add("b");
    return (
        <>
            {/* Conditionally render theme, based on the current client context */}
            < React.Suspense fallback={() => null}>
                {shouldRenderTheme1 && <Theme1 />}
                {shouldRenderTheme2 && <Theme2 />}
                {shouldRenderTheme3 && <Theme3 />}
            </React.Suspense >
            {/* Render children immediately! */}
            { children}
        </>
    )
}


export default ThemeSelector;