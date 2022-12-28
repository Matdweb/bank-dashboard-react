import React from 'react'
import NavBarCSS from './NavBar_styles.module.css'
import { FaHouseUser } from 'react-icons/fa'
import { FaWallet } from 'react-icons/fa'
import { TfiLoop } from 'react-icons/all'
import { FaDochub } from 'react-icons/fa'
import { FaBriefcase } from 'react-icons/fa'
import { AiFillSetting } from 'react-icons/all'
import { MdPowerSettingsNew } from 'react-icons/all'
import { FiLogOut } from 'react-icons/all'
import { Link } from "react-router-dom"

const optionsMenu = [
    {
        href: "/Home",
        icon: <FaHouseUser />,
        content: "Home"
    },{
        href: "/Wallet",
        icon: <FaWallet />,
        content: "Wallet"
    },{
        href: "/ReCredit",
        icon: <TfiLoop />,
        content: "Re-Credit"
    },{
        href: "/Documentation",
        icon: <FaDochub />,
        content: "Documentation"
    },{
        href: "/Charts",
        icon: <FaBriefcase />,
        content: "Work Charts"
    },{
        href: "/Settings",
        icon: <AiFillSetting />,
        content: "Settings"
    },{
        href: "/Power",
        icon: <MdPowerSettingsNew />,
        content: "Power"
    }
    
]

function NavBar() {
  return (
    <div className={NavBarCSS.father}>
        <div className={NavBarCSS.navbar_container}>
            <div className={NavBarCSS.menu_container}>
                <div className={NavBarCSS.navbar_logo}>
                    <img src="" alt="" />
                </div>
                <div className={NavBarCSS.navbar_options}>
                    <label className={NavBarCSS.container_option}>
                        {optionsMenu.map((option,i)=>{
                            return(
                            <Link to={option.href} className={NavBarCSS.option} key={i}>
                                <span className={NavBarCSS.option_content}>
                                    {option.icon}
                                    {screen.width <= 1200 ? " " : <p style={{marginLeft: "12px"}}>{option.content}</p>}
                                </span>
                            </Link>
                            )
                        })}
                    </label>
                </div>
            </div>
            <div className={NavBarCSS.log_out}>
                    <FiLogOut />
            </div>
        </div>
    </div>
  )
}

export default NavBar