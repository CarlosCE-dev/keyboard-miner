import IconButton from '@mui/material/IconButton';
import InfoButton from '@mui/icons-material/Info';
import { InventoryTypes } from 'types';
import { useAppDispatch } from 'hooks';
import { selectItem } from 'store/mainReducer';

/**
 * Custom props for the {@link InfoButtonContainer} component
 */
interface Props {
    /**
     * The inventory type
     */
    name: InventoryTypes;
}
/**
 * Circle info button
 * @param props The custom props of the component
 */
export const InfoButtonContainer = ({ name }: Props) => {
    const dispatch = useAppDispatch();
    /**
     * On button click event
     */
    const onInfoButtonClick = () => {
        dispatch(selectItem(name));
    }

    return (
        <IconButton className='keyboard__info' onClick={onInfoButtonClick}>
            <InfoButton fontSize="large" />
        </IconButton>
    )
}
