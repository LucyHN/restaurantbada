import styled from 'styled-components';
import { motion, useAnimation, useScroll, AnimatePresence } from 'framer-motion';
import {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const Nav = styled(motion.nav)`
    width: 100%;
    height: 50px;
    position: fixed;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;
`;

const ColLeft = styled.div`
    margin-left: 30px;
    font-size: 20px;
    font-weight: 800;
    color: rgba(255, 255, 255, 1);
    &:hover {
        color: rgba(254, 131, 1, 100%);
    }
`;

const ColRight = styled.div`
    margin-right: 30px;
`;

const Bars = styled.svg`
    fill: rgba(255, 255, 255, 1);
    width: 20px;
    &:hover {
        fill: rgba(254, 131, 1, 100%);
    }
`;

const StyledLink = styled(Link)`
    color: ;
    text-decoration: none;
    &:hover {
        color: ;
    }
    `;

const Overlay = styled(motion.div)`
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(0,0,0,0.6);
    position: fixed;
`;

const DirectoryBox = styled(motion.div)`
    display: flex;
    justify-content: center;
    width: 250px;
    height: 300px;
    top: 50px;
    right: 0;
    background-color: #faf8f2;
    position: absolute;
    border-radius: 7px 0 0 7px;
    box-shadow: 0 1px 9px rgba(0, 0, 0, 0.2), 0 3px 15px rgba(0, 0, 0, 0.2);
`;

const DirectoryUl = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const DirectoryLi = styled.li`
    font-size: 20px;
    font-weight: 700;
    list-style-type: none;
    margin: 25px;
    color: ;
    &:hover {
        color: ;
    }
`;

const DirectoryLink = styled(Link)`
    text-decoration: none;
    color: ;
    &:hover {
        color: ;
    }
`;

const DirectoryA =styled.a`
    text-decoration: none;
    color: ;
    &:hover {
        color: ;
    }
`;

const DirectoryIcon = styled.svg`
    width: 23px;
    fill: ;
    &:hover {
        fill: ;
    }
`;


const overlayVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {duration: 0.6},
    },
    exit: {
        opacity: 0,
        transition: {duration: 0.5},
    },
}

const directoryVariants = {
    hidden: {
        opacity: 0,
        x: 250,
    },
    visible: {
        opacity: 1,
        x: 0,
        type: "tween",
        transition: {duration: 0.6},
    },
    exit: {
        opacity: 0,
        x: 250,
        type: "tween",
        transition: {duration: 0.5},
    },
}


function Header() {
    const navAnimation = useAnimation();
    const { scrollY } = useScroll();
    const [clicked, setClicked] = useState(false);
    const toggle = () => setClicked(prev => !prev);
    useEffect(() => {
        scrollY.onChange(() => {
            if(scrollY.get() > 80) {
                navAnimation.start({
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                })
            } else {
                navAnimation.start({
                    backgroundColor: "rgba(0, 0, 0, 0)",
                })
            }
        })
    }, []);

    return (
        <Nav  animate={navAnimation}>
            <ColLeft>bada</ColLeft>
            <ColRight>
                <Bars 
                    onClick={toggle}
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                </Bars>
            </ColRight>
            <AnimatePresence>
                {clicked? 
                    <>
                    <Overlay 
                        onClick={toggle}
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    /> 
                    <DirectoryBox
                            variants={directoryVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                    >
                        <DirectoryUl>
                            <DirectoryLi><DirectoryA href="mailto:lucy.h.nam@gmail.com" style={{color: "rgba(107, 70, 59, 1)"}}>e-mail</DirectoryA></DirectoryLi>
                            <DirectoryLi>
                                    <DirectoryA href="https://www.linkedin.com/in/lucy-hwajoung-nam-360231139/" target="_blank">
                                    <DirectoryIcon style={{fill: "rgba(254, 131, 1, 100%)"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                                    </DirectoryIcon>
                                </DirectoryA>
                            </DirectoryLi>
                            <DirectoryLi>
                                    <DirectoryA href="https://github.com/LucyHN" target="_blank">
                                        <DirectoryIcon style={{fill: "rgba(254, 131, 1, 100%)"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                                        </DirectoryIcon>
                                    </DirectoryA>
                            </DirectoryLi>
                        </DirectoryUl>
                    </DirectoryBox>          
                    </>
                : null}
            </AnimatePresence>
        </Nav>
    );
}

export default Header;