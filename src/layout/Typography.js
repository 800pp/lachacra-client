import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

export const Header = styled(motion.p)`
    font-family: 'Cairo', sans-serif;
    font-weight: 900;
    font-size: 4em;
    line-height: 100%;
`
export const SubHeader = styled(Header)`
    letter-spacing:3px;
    font-size: 2em;
`

export const StyledLink = styled(Link)`
    position: relative;
    overflow: hidden;
    font-family: 'Cairo', sans-serif;
    font-weight: 600;
    text-align: left;
    line-height: 120%;
    font-size: 2em;
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: black;
    }
`