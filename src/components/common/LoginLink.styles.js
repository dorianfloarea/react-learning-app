import styled from 'styled-components';

export const Wrapper = styled.div`
    a {
        color: var(--white);
        text-decoration: none;
        
        :hover {
            text-decoration: underline;
        }
    }
    
    .loggedin {
        color: var(--white);
    }
`;
