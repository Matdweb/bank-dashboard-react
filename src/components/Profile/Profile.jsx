import React from 'react'
import ProfileCSS from'./Profile_styles.module.css'
import ChartTabs from './ChartsComponents/ChartTabs'
import images from '../../assets/exports/ContacList'
import { RiNotification2Fill } from 'react-icons/all'
import { BiMessageSquareDots } from 'react-icons/all'
import { CgMenuRightAlt } from 'react-icons/all'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Tooltip
} from '@chakra-ui/react'

function Profile() {

  const notifications = []

  return (
    <div className={ProfileCSS.father}>
        <div className={ProfileCSS.options}>
            <span className={ProfileCSS.notifications}>
            <Tooltip label={notifications.length + " notifications"} fontSize="20px">
              <span>
                <RiNotification2Fill style={{fontSize: "25px"}}/>
              </span>
            </Tooltip>
            </span>
            <label className={ProfileCSS.right_options}>
              <span className={ProfileCSS.notifications}>
                <BiMessageSquareDots style={{fontSize: "25px"}}/>
              </span>
              <Menu>
                <MenuButton>
                  <span className={ProfileCSS.notifications}>
                    <img src={images[0]} alt="" style={{width: "40px"}} />
                  </span>
                </MenuButton>
                <MenuList background='rgb(37, 37, 45)' overflow='hidden'>
                  <MenuGroup title='Profile'>
                    <MenuItem 
                      background='rgb(37, 37, 45)'>My Account
                    </MenuItem>
                    <MenuItem 
                      background='rgb(37, 37, 45)'>Payments 
                    </MenuItem>
                  </MenuGroup>
                  <MenuDivider opacity='.5' />
                  <MenuGroup title='Help'>
                    <MenuItem
                      background='rgb(37, 37, 45)'>Docs
                    </MenuItem>
                    <MenuItem
                      background='rgb(37, 37, 45)'>FAQ
                    </MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            </label>
        </div>
        <div className={ProfileCSS.statics_container}>
            <div className={ProfileCSS.balance_title}>
              <h5 style={{padding: "10px"}}>Balance</h5>
              <CgMenuRightAlt style={{padding: "10px", cursor: "pointer"}}/>
            </div>
            <div className="profile-statics-graph">
              <div className={ProfileCSS.background}>
                <div className={ProfileCSS.wheel}>
                  <div className={ProfileCSS.total}>
                    <span className={ProfileCSS.average}>
                    Average Income
                    <label className={ProfileCSS.money}>
                      $3,428
                    </label>
                    </span>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <ChartTabs />
    </div>
  )
}

export default Profile