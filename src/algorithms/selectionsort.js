import React from 'react'
import Bar from '../components/bar'
import controls from '../components/controls'
import './styling/algorithms.css'

let toggle
let curCol = 0
let curMin = 0

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

    const swap = (cur, min) => {
        let x = barsArr[cur]
        barsArr[cur] = barsArr[min]
        barsArr[min] = x
    }

    function sort() {
        if (start) {
            setTimeout(selection, speed)
        } else {
            stop()
        }
    }

    function stop() {
        clearTimeout(toggle)
        start && setstart(false)
    }

    const selection = () => {
        if (barsArr[curMin] > barsArr[curCol]) {
            swap(curMin, curCol)
        }
        curCol++
        if (curCol === barsArr.length) {
            curCol = curMin + 1
            curMin++
        }

        setBarArr([...barsArr])
        if (curMin === barsArr.length) {
            stop()
            return true
        }
    }

    sort()

    return <div>{visualize(calc(curMin, curCol))}</div>
}
