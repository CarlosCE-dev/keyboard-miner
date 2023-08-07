import IconButton from '@mui/material/IconButton';
import InfoButton from '@mui/icons-material/Info';
import { InventoryTypes } from 'types';
import { useAppDispatch } from 'hooks';
import { selectItem } from 'store/mainReducer';

/**
 * Custom props for the {@link name} component
 */
interface Props {
    name: InventoryTypes;
}

export const InfoButtonContainer = ({ name }: Props) => {
    const dispatch = useAppDispatch();
    const onInfoButtonClick = () => {
        dispatch(selectItem(name));
    }

    return (
        <IconButton className='keyboard__info' onClick={onInfoButtonClick}>
            <InfoButton fontSize="large" />
        </IconButton>
    )
}
