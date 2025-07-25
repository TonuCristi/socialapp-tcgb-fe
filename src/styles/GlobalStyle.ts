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

    *::-webkit-scrollbar {
        width: 0.5rem;
    }
    
    *::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.colors.zinc800};
        border-radius: ${({ theme }) => theme.borderRadius.sm};
    }
    
    *::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.accent};
        border-radius: ${({ theme }) => theme.borderRadius.sm};
    }

    body {
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        font-size: ${({ theme }) => theme.fontSizes.sm};
        font-weight: ${({ theme }) => theme.fontWeights.normal};
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.primary};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    button,
    input,
    textarea,
    a {
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        color: inherit
    }

    a {
        text-decoration: none;
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
    }

    img,
    video {
        max-width: ${({ theme }) => theme.width.full};
        height: auto;
    }
`;
