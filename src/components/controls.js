import React, { useState } from 'react'

import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import SortIcon from '@material-ui/icons/Sort'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'

let uiWidth = window.innerWidth
let uiHeight = window.innerHeight
let curBars = 20

const getWidth = (uiWidth, curBars) => {
    let x = uiWidth / curBars
    if (x > 30) {
        return 20
    } else {
        return x - 10
    }
}

const getHeight = (uiHeight) => {
    let x = uiHeight * 0.5

    if (x > 400) {
        return 400
    } else {
        return x
    }
}

const randomArr = (max, min, n) => {
    let arr = Array(n).fill(0)
    arr.forEach((item, index) => {
        arr[index] = Math.floor(Math.random() * (max - min)) + min
    })
    return arr
}

export default (props) => {
    const [speed, deltaSpeed] = useState(500)
    const [numBars, setNumBars] = useState(curBars)
    let width = getWidth(uiWidth, numBars)
    let max = getHeight(uiHeight)
    const [barsArr, setBarArr] = useState(randomArr(max, 1, numBars))
    const [start, setstart] = useState(false)

    const getNewArray = () => {
        setBarArr(randomArr(max, 1, numBars))
    }

    const toggleSpeed = (s) => {
        if (s === '+') {
            if (speed > 10) {
                deltaSpeed(speed - 10)
            }
            if (speed > 100) {
                deltaSpeed(speed - 50)
            }
        }
        if (s === '-') {
            if (speed > -1) {
                deltaSpeed(speed + 50)
            }
        }
    }
    const handleBars = (n) => {
        if (!start) {
            if (numBars + n > 10 && numBars + n < 120) {
                setNumBars(numBars + n)
                getNewArray()
            }
        }
    }

    const controls = () => {
        return (
            <div className="menuBar">
                <ButtonGroup
                    orientation="horizontal"
                    color="primary"
                    variant="contained"
                    aria-label="contained primary button group"
                >
                    <Button
                        onClick={() => {
                            handleBars(10)
                        }}
                        disabled={start}
                    >
                        <AddIcon />
                        Add Bars
                    </Button>
                    <Button
                        onClick={() => {
                            handleBars(-10)
                        }}
                        disabled={start}
                    >
                        <RemoveIcon />
                        Remove Bars
                    </Button>
                    <Button
                        onClick={() => {
                            toggleSpeed('+')
                        }}
                        disabled={start}
                    >
                        <ArrowUpwardIcon />
                        Increase Speed
                    </Button>
                    <Button
                        onClick={() => {
                            toggleSpeed('-')
                        }}
                        disabled={start}
                    >
                        <ArrowDownwardIcon />
                        Decrease Speed
                    </Button>
                </ButtonGroup>
            </div>
        )
    }

    const visualize = (cols) => {
        return (
            <div>
                <div className="barContainer">{cols}</div>
                {controls()}
                <div className="controlBar">
                    <Fab
                        color="secondary"
                        variant="extended"
                        onClick={() => {
                            setstart(!start)
                        }}
                    >
                        <SortIcon />
                        {start ? <span> Stop!</span> : <span> Sort!</span>}
                    </Fab>
                </div>
            </div>
        )
    }

    return {
        visualize: visualize,
        setBarArr: setBarArr,
        barsArr: barsArr,
        start: start,
        setstart: setstart,
        speed: speed,
        width: width,
    }
}
