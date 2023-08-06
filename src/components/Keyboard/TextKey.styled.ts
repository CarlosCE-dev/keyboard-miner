import styled from "styled-components";

interface Props {
    $active?: boolean;
}

export const TextKeyAnimation = styled.span<Props>`
  transform: ${({ $active }) => ($active ? 'scale(0.9)' : 'scale(1)')};
`;