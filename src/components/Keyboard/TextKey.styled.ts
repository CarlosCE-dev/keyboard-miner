import styled from "styled-components";

/**
 * Custom props for the {@link TextKeyAnimation} component
 */
interface Props {
	/**
	 * Indicates if the button is active
	 */
	$active?: boolean;
}
/**
 * Styled component for text key
 */
export const TextKeyAnimation = styled.span<Props>`
	transform: ${({ $active }) => ($active ? 'scale(0.9)' : 'scale(1)')};
`;