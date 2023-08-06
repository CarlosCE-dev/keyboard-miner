import styled from "styled-components";

/**
 * Custom props for the {@link TextKeyAnimation} component
 */
interface Props {
	/**
	 * Indicates if the button is active
	 */
	$active?: boolean;
	/**
	 * 
	 */
	$disabled?: boolean;
}
/**
 * Styled component for text key
 */
export const TextKeyAnimation = styled.span<Props>`
	transform: ${({ $active }) => ($active ? 'scale(0.9)' : 'scale(1)')};
	color: ${({ $disabled }) => ($disabled ? 'gray' : '#71D4FE')};
	text-shadow: ${({ $disabled }) => ($disabled ? 'none !important' : '')};
`;