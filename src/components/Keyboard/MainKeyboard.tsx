// Styles
import 'styles/keyboard.css';

import { firstRowTextKeys, secondRowTextKeys, thirdRowTextKeys } from 'data/keyboardText';
import { TextKey } from './TextKey';
import { useKeyPressHandler } from 'hooks/useKeyPressHandler';

/**
 * Keyboard component
 */
export const MainKeyboard = () => {
    const { keysPress } = useKeyPressHandler();

    return (
        <div className="base">
            <div className="line1">
                {
                    firstRowTextKeys.map((x, index) => {
                        return <TextKey name={x} keysPress={keysPress} key={index} />
                    })
                }
            </div>
            <div className="line2">
                {
                    secondRowTextKeys.map((x, index) => {
                        return <TextKey keysPress={keysPress} name={x} key={index} />
                    })
                }
            </div>
            <div className="line3">
                <span>
                    <svg enableBackground="new 0 0 500 500" id="arrow" version="1.1" viewBox="0 0 500 500" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path clipRule="evenodd" d="M433.704,237.465c4.456,6.086,7.092,13.539,7.092,21.622  c0,20.079-16.266,36.341-36.344,36.341h-36.341c-9.991,0-18.173,8.18-18.173,18.172v109.025c0,20.079-16.262,36.341-36.341,36.341  H186.4c-20.079,0-36.34-16.262-36.34-36.341V313.6c0-9.992-8.181-18.172-18.172-18.172H95.547  c-20.079,0-36.342-16.262-36.342-36.341c0-8.083,2.635-15.536,7.08-21.622L217.747,54.388c17.807-17.808,46.695-17.808,64.505,0  L433.704,237.465z" /></svg>
                </span>
                {
                    thirdRowTextKeys.map((x, index) => {
                        return <TextKey keysPress={keysPress} name={x} key={index} />
                    })
                }
                <span><svg baseProfile="tiny" id="backspace" version="1.2" viewBox="0 0 24 24" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M19.5,5h-10C8.234,5,6.666,5.807,5.93,6.837L3.32,10.49c-0.642,0.898-1.182,1.654-1.199,1.679  C2,12.344,1.999,12.661,2.124,12.833c0.023,0.033,0.555,0.777,1.188,1.664l2.619,3.667C6.666,19.193,8.233,20,9.5,20h10  c1.379,0,2.5-1.122,2.5-2.5v-10C22,6.122,20.879,5,19.5,5z M17.207,14.793c0.391,0.391,0.391,1.023,0,1.414  C17.012,16.402,16.756,16.5,16.5,16.5s-0.512-0.098-0.707-0.293L13.5,13.914l-2.293,2.293C11.012,16.402,10.756,16.5,10.5,16.5  s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l2.293-2.293l-2.293-2.293c-0.391-0.391-0.391-1.023,0-1.414  s1.023-0.391,1.414,0l2.293,2.293l2.293-2.293c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L14.914,12.5L17.207,14.793z" /></svg></span>
            </div>
            <div className="line4">
                <span>Ctrl</span>
                <span><svg viewBox="0 0 48 48" id="smile" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48h-48z" fill="none" /><path d="M23.99 4c-11.05 0-19.99 8.95-19.99 20s8.94 20 19.99 20c11.05 0 20.01-8.95 20.01-20s-8.96-20-20.01-20zm.01 36c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm7-18c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-14 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm7 13c4.66 0 8.61-2.91 10.21-7h-20.42c1.6 4.09 5.55 7 10.21 7z" /></svg></span>
                <span>Alt</span>
                <span>Space</span>
                <span>FN</span>
            </div>
        </div>
    )
}
