import { useMemo } from "react";
import { TextKeyAnimation } from "./TextKey.styled";
import { IInventory } from "interfaces";

/**
 * Custom props for the {@link TextKey} component
 */
interface Props {
    /**
     * Name of the text key
     */
    item: IInventory;
    /**
     * Current list of keys press
     */
    keysPress: string[];
}
/**
 * Text key element
 * @param props Custom props of the component
 */
export const TextKey = ({ item, keysPress }: Props) => {
    /**
     * Check if key is currently press
     */
    const isActive = useMemo(() => keysPress.includes(item.type.toLowerCase()), [keysPress]);

    return (
        <TextKeyAnimation $active={isActive && !item.disabled} $disabled={item.disabled} className="keyboard__key">
            { item.type }
        </TextKeyAnimation>
    )
}
