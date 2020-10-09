import React from 'react'
import { useHistory } from 'react-router-dom'
import './controls'

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import CompareArrowsIcon from '@material-ui/icons/CompareArrows'
import RepeatIcon from '@material-ui/icons/Repeat'
import RotateRightIcon from '@material-ui/icons/RotateRight'

export default function Algonav() {
    const history = useHistory()
    const [value, setValue] = React.useState(0)

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                history.push(`/${newValue}`)
                setValue(newValue)
            }}
            showLabels
            className="algonav"
        >
            <BottomNavigationAction
                value="BubbleSort"
                label="BubbleSort"
                className="menuItems"
                icon={<RepeatIcon />}
            />
            <BottomNavigationAction
                value="SelectionSort"
                label="SelectionSort"
                className="menuItems"
                icon={<CompareArrowsIcon />}
            />
            <BottomNavigationAction
                value="InsertionSort"
                label=" InsertionSort"
                className="menuItems"
                icon={<RotateRightIcon />}
            />
        </BottomNavigation>
    )
}
