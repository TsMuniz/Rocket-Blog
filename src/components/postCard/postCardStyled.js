import styled from "styled-components";

export const Card = styled.div`

    height: ${ ({heigth}) => `${heigth}rem`};
    width: ${ ({width}) => `${width}rem`};
    
    h4 {
    font-family: "Roboto", sans-serif;
    font-size: 2.4rem;
    line-height: 3.6rem;
    color: var(--purple-bg);
    }

    p {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: var(--text);
    }
`;