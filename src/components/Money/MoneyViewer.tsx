import { useAppSelector } from "hooks"
import TweenOne, { AnimObjectOrArray } from "rc-tween-one";
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';
import { CSSProperties, useEffect, useState } from "react";

TweenOne.plugins.push(Children);

/**
 * Money viewer component
 */
export const MoneyViewer = () => {
    const [animation, setAnimation] = useState<AnimObjectOrArray>();
    const money = useAppSelector(x => x.main.value);

    /**
     * Update money animation
     */
    useEffect(() => {
        onMoneyChanged();
    }, [money])
    /**
     * Call animation when money is change
     */
    const onMoneyChanged = () => {
        setAnimation({
            Children: {
                value: money,
                floatLength: 2,
            },
            duration: 500,
        });
    }
    /**
     * Div styles
     */
    const divStyle: CSSProperties = {
        display: "flex",
        justifyContent: "center"
    }

    return (
        <div style={divStyle}>
            <TweenOne
                    animation={animation}
                    style={{ fontSize: 50 }}
                >
                    0
                </TweenOne>
        </div>
    )
}
