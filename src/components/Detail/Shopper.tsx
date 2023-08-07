import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useMemo, useState } from "react";
import { useAppSelector } from "hooks";
import { DetailContainer } from "./DetailContainer";
import { IInventory } from "interfaces";

/**
 * Basic accordion use to buy new items
 */
export const Shopper = () => {
    const itemSelected = useAppSelector(x => x.main.currentSelected);
    const inventory = useAppSelector(x => x.main.inventory);
    const [expanded, setExpanded] = useState(false);
    const divStyle = {
        width: '100%'
    }
    /**
     * Update accordion each item an item is selected
     */
    useEffect(() => {
        setExpanded(true);
    }, [itemSelected]);
    /**
     * On expanded button event
     */
    const onExpandedButtonClick = () => {
        setExpanded(!expanded);
    }
    /**
     * Memorize item inventory. Will update when state is change
     */
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
