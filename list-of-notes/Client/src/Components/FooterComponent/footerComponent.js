import React from 'react'
import {FooterWrapper,
        DevInfoWrapper,
        DevLogo,
        DevInfo,
        Contact,
        DevName,
        FooterLabel
                        } from './footerDesign'
import {SiFacebook} from 'react-icons/si'
import {FaTelegram,FaViber} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import logo from '../../images/logo.png'
import {AiOutlineCopyright} from 'react-icons/ai'

const Footer = () => {
    return (
        <>
            <FooterWrapper color="#0E191D">
                <DevInfoWrapper>
                    <DevInfo>
                        <DevLogo src={logo} alt="Logo"/>
                        <DevName>
                            Glenn Cavita
                        </DevName>
                        <Contact>
                            <SiFacebook className="nobg" title="Facebook"/>
                            <FaTelegram className="nobg" title="Telegram"/>
                            <FaViber className="nobg" title="Viber"/>
                            <MdEmail className="nobg" title="Email"/>
                        </Contact>
                        <FooterLabel>
                            <AiOutlineCopyright className="label"/> Copyright 2021.
                        </FooterLabel>
                        <FooterLabel>
                            All Rights Reserved
                        </FooterLabel>
                    </DevInfo>

                </DevInfoWrapper>
            </FooterWrapper>
            
        </>
    )
}
export default Footer