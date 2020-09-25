import React, { useState } from 'react'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { useHistory, Switch, Route, useLocation } from 'react-router-dom'
import { Flex } from '../layout/Flex'
import { Header, SubHeader, StyledLink } from '../layout/Typography'

const logoVariants = {
    "initial":{
        y: -50,
        opacity: 0
    },
    "animate": {
        y: 0,
        opacity: 1,
        transition: {
            easing: "easeInOut",
            duration: .75
        }
    }
}

const linkContainerVariants = {
    "initial":{
        opacity: 0,
    },
    "animate":{
        opacity: 1,
        x: 0,
        transition: {
            easing: "easeOut",
            delay: .5,
            staggerChildren: 0.2,
            duration: .5
        }
    }
}

const linkVariants = {
    "initial":{
        opacity: 0,
        x: -60
    },
    "animate":{
        opacity: 1,
        x: 0,
        transition: {
            easing: "backInOut",
            duration: 1
        }
    }
}

const hightlightVariants={
    "initial":{
        x: "-100%",
    },
    "animate":{
        x: 0,
        transition:{
            easing: "easeInOut"
        }
    }
}

const routeVariants = {
    "left":{
        x: -60,
        opacity: 0,
        transition:{
            easing: "easeOut",
            duration: .5
        }
    },
    "in":{
        x:0,
        opacity: 1
    },
    "right":{
        x: 60,
        opacity: 0,
        transition:{
            easing: "easeIn",
            duration: .5
        }
    }
}

/*HIGHTLIGHT LINK START*/
const Highlight = ({keyd}) => (<motion.div variants={hightlightVariants} initial="initial" animate="animate" style={{position: "absolute",top: "50%",bottom:"40%",left:0,right:0,backgroundColor:"black"}}></motion.div>)
/*HIGHTLIGHT LINK FINISH*/

const Navigator = () => {
    let history = useHistory()
   // let path = useLocation().pathname

    const [hovered, setHovered] = useState(0);

    return(
        <Flex initial="initial" animate="animate" flex={.3} justify={"evenly"} style={{height:600}} column>
            <Flex variants={logoVariants}  style={{cursor: "pointer"}} onClick={() => history.push("/")} column>
                <Header>LACHACRA</Header>
                <SubHeader>RESTAURANTE</SubHeader>
            </Flex>
            <Flex variants={linkContainerVariants} style={{alignItems:"start"}} onMouseLeave={() => setHovered(0)} column>
                <AnimateSharedLayout>
                    <motion.div style={{overflow: "hidden"}} variants={linkVariants}>
                    <StyledLink  key={"link1"} onMouseEnter={() => setHovered(1)} to="/menu">{hovered === 1 ? <Highlight key={"some1"}/> : "" }MENU</StyledLink>
                    </motion.div>
                    <motion.div style={{overflow: "hidden"}} variants={linkVariants}>
                    <StyledLink  key={"link2"} onMouseEnter={() => setHovered(2)} to="/reserva">{hovered === 2 ? <Highlight key={"some2"}/> : "" }RESERVA</StyledLink>
                    </motion.div>
                    <motion.div style={{overflow: "hidden"}} variants={linkVariants}>
                    <StyledLink  key={"link3"} onMouseEnter={() => setHovered(3)} to="/login">{hovered === 3 ? <Highlight key={"some3"}/> : "" }LOGIN</StyledLink>
                    </motion.div>
                </AnimateSharedLayout>
            </Flex>
        </Flex>
    )
}

/*PLACEHOLDER COMPONENTS FOR CONTENT START */

const Home = () => (<Header variants={routeVariants} initial="left" animate="in" exit="right">HOME CONTENT GOES HERE</Header>)
const Menu = () => (<Header variants={routeVariants} initial="left" animate="in" exit="right">MENU CONTENT GOES HERE</Header>)
const Reserva = () => (<Header variants={routeVariants} initial="left" animate="in" exit="right">RESERVA CONTENT GOES HERE</Header>)
const Login = () => (<Header variants={routeVariants} initial="left" animate="in" exit="right">LOGIN CONTENT GOES HERE</Header>)

/*PLACEHOLDER COMPONENTS FOR CONTENT FINISH */


const Content = () => {
    let location = useLocation()
    return(
        <Flex flex={.7}>
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/menu"><Menu /></Route>
                    <Route exact path="/reserva"><Reserva /></Route>
                    <Route exact path="/login"><Login /></Route>
                </Switch>
            </AnimatePresence>
        </Flex>
    )
}



function LaChacra() {
    return (
        <Flex style={{height: "100vh"}}>
            {/*NAVIGATOR*/}
            <Navigator />
            {/*CONTENT*/}
            <Content />
        </Flex>
    )
}

export default LaChacra
