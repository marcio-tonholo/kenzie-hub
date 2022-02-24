import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
    font-family:'Inter', sans-serif;
}

:root{
    --color-primary: #FF577F;
    --color-primary-focus:#FF427F;
    --color-primary-Disable:#59323F;
    --grey-0:#F8F9FA;
    --grey-1:#868E96;
    --grey-2: #343B41;
    --grey-3: #212529;
    --grey-4:#121214;
}
body{
    background-color: #000000;
}

h1,h2,h3{
    font-weight: bold;
    font-size:16px;
    color:#F8F9FA;
}
button{
    cursor: pointer;
}

a{
    text-decoration: none;
}

p{
    font-size: 12px;
    color: #868E96;
}
`;
