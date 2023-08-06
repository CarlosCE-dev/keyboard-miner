import { useMemo } from "react";
import { TextKeyAnimation } from "./TextKey.styled";

interface Props {
    name: string;
    keysPress: string[];
}

export const TextKey = ({ name, keysPress }: Props) => {
    const isActive = useMemo(() => keysPress.includes(name.toLowerCase()), [keysPress]);
    return (
        <TextKeyAnimation $active={isActive}>
            {name}
        </TextKeyAnimation>
    )
}
