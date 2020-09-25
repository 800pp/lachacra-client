import styled from 'styled-components'
import {motion} from 'framer-motion'

export const Flex = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: ${props => {
        switch (props.justify) {
            case "evenly":
                return "space-evenly";
            case "between":
                return "space-between";
            default:
                return "center";
        }
    }};
    flex-direction: ${props=> props.column ? "column" : "row"};
    padding: ${props => props.container? "3em 1.5em" : "0"};
    flex: ${props => props.flex || "initial"};
    flex-wrap: ${props => props.wrap ? "wrap" : "nowrap"}
    `
