import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
       background-color: ${(props) => props.theme.body};
       color: ${(props) => props.theme.fontColor};
    }

    h1, h2, h3, td, li{
        color: ${(props) => props.theme.fontColor};
    }

    .home-container, .container-header {
        background-color: ${(props) => props.theme.body};
    }
`;