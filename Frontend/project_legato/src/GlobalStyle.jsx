import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    .perfil-pessoal img, .element-li img{
        filter: ${(props) => props.theme.filter};
    }

    body{
       background-color: ${(props) => props.theme.body};
       color: ${(props) => props.theme.fontColor};
    }

    h1, h2, h3, td, .menu li a, .table, .bio{
        color: ${(props) => props.theme.fontColor};
    }

    .border-bottom{
        border-bottom: 1px solid ${(props) => props.theme.fontColor};
    }

    .home-container, .container-header, .barra-pesquisa {
        background-color: ${(props) => props.theme.body};
    }

   
`;