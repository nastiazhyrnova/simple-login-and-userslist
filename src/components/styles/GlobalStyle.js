import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    transition: 0.2s all ease-out;
}
:root {
    --main-bg-color: #f3f3f3;
    --main-black-color: #333333;
    --main-white-color: #ffffff;
    --accent-color: #FA8334;
    --light-grey-color: #fafafa;
    --mid-grey-color: #cecece;
    --dark-grey-color: #919191;
    --navbar-height: 80px;
}
html {
    font-size: 16px;
    color: var(---main-black-color);
    
}
body {
    background-color: var(--main-bg-color);
}
#root {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between
}
a {
    text-decoration: none;
    color: var(---main-black-color);
}
`;
