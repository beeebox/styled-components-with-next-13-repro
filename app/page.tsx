'use client'
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledHello = styled.div<{ clicked: string }>`
    color: white;
    cursor: pointer;
    background-color: black;
    padding: 10px;

    ${({ clicked }) => {
       const extra = clicked === 'true' && `background-color: red;`
       return extra
    }}
`;

export default function Homepage() {
    const [clicked, setClicked] = useState<boolean>(false);

    return (
        <StyledHello
            clicked={clicked.toString()}
            onClick={() => setClicked(!clicked)}
        >
            hello
        </StyledHello>
    );
}