import React from 'react'
import Bar from '../components/bar'
import controls from '../components/controls'
import './styling/algorithms.css'

let toggle
let curBar = 1
let curComp = 0

export default (params) => {
    const {
        visualize,
        setBarArr,
        barsArr,
        start,
        setstart,
        speed,
        width,
    } = controls()

    const calc = (x, y) => {
        return barsArr.map((c, index) => {
            let current = index === x || index === y ? true : false
            return (
                <Bar
                    key={index}
                    id={index}
                    height={c}
                    width={width}
                    current={current}
                />
            )
        })
    }

    function sort() {
        if (start) {
            toggle = setTimeout(insertion, speed)
        } else {
            stop()
        }
    }
    function stop() {
        clearTimeout(toggle)
        start && setstart(false)
    }

    const insertion = () => {
        const curBarVal = barsArr[curBar]
        for (
            curComp = curBar - 1;
            curComp >= 0 && barsArr[curComp] > curBarVal;
            curComp--
        ) {
            barsArr[curComp + 1] = barsArr[curComp]
        }
        barsArr[curComp + 1] = curBarVal
        setBarArr([...barsArr])
        curBar += 1
        if (curBar === barsArr.length) {
            stop()
            return true
        }
    }

    sort()

    return <div>{visualize(calc(curComp + 1, curBar))}</div>
}
