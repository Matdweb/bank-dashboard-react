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

const optionsMenu = [[<FaHouseUser />,"Home"], [<FaWallet />,"Wallet"], [<TfiLoop />,"Reaccredit"], [<FaDochub />,"Documentation"], [<FaBriefcase />,"Work graphics"], [<AiFillSetting />,"Settings"], [<MdPowerSettingsNew />,"Power"]]

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
                            <div className={NavBarCSS.option} key={i}>
                                <span className={NavBarCSS.option_content}>
                                    {option[0]}
                                    {screen.width <= 1200 ? " " : <p style={{marginLeft: "12px"}}>{option[1]}</p>}
                                </span>
                            </div>
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