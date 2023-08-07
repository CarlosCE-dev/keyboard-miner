import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useMemo, useState } from "react";
import { useAppSelector } from "hooks";
import { DetailContainer } from "./DetailContainer";
import { IInventory } from "interfaces";

export const Shopper = () => {
    const itemSelected = useAppSelector(x => x.main.currentSelected);
    const inventory = useAppSelector(x => x.main.inventory);
    const [expanded, setExpanded] = useState(false);
    const divStyle = {
        width: '100%'
    }

    useEffect(() => {
        setExpanded(true);
    }, [itemSelected]);
    
    const onExpandedButtonClick = () => {
        setExpanded(!expanded);
    }

    const itemInventory = useMemo(() => inventory.find(x => x.type === itemSelected) as IInventory, [inventory, itemSelected]);

    return (
        <div style={divStyle}>
            <Accordion expanded={expanded} onChange={onExpandedButtonClick}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{itemSelected}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <DetailContainer item={itemInventory} />
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
