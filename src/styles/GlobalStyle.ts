import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    ::after,
    ::before,
    ::backdrop,
    ::file-selector-button {
        margin: 0;
        padding: 0;
    }

    *,
    ::after,
    ::before,
    ::backdrop,
    ::file-selector-button {
        box-sizing: border-box;
        border: 0 solid;
    }

    body {
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        font-size: ${({ theme }) => theme.fontSizes.sm};
        font-weight: ${({ theme }) => theme.fontWeights.normal};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    button {
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
    }
    
    ol,
    ul,
    menu {
        list-style: none;
    }

    img,
    svg,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object {
        display: block;
        vertical-align: middle;
    }

    img,
    video {
        max-width: 100%;
        height: auto;
    }
`;
