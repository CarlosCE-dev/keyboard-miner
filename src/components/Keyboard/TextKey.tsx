import { useMemo } from "react";
import { TextKeyAnimation } from "./TextKey.styled";

/**
 * Custom props for the {@link TextKey} component
 */
interface Props {
    /**
     * Name of the text key
     */
    name: string;
    /**
     * Current list of keys press
     */
    keysPress: string[];
}
/**
 * Text key element
 * @param props Custom props of the component
 */
export const TextKey = ({ name, keysPress }: Props) => {
    /**
     * Check if key is currently press
     */
    const isActive = useMemo(() => keysPress.includes(name.toLowerCase()), [keysPress]);

    return (
        <TextKeyAnimation $active={isActive}>
            {name}
        </TextKeyAnimation>
    )
}
