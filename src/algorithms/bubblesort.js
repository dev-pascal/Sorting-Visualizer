import React from 'react'
import Bar from '../components/bar'
import controls from '../components/controls'
import './styling/algorithms.css'

let calcBar = 0
let swapped = []

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

    const calc = () => {
        return barsArr.map((c, index) => {
            let current =
                index === calcBar || index === calcBar + 1 ? true : false
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

    const swap = (left, right) => {
        let newArray = [...barsArr]
        if (barsArr[left] > barsArr[left + 1]) {
            let leftItem = barsArr[left]
            let rightItem = barsArr[left + 1]
            barsArr[left] = rightItem
            barsArr[right] = leftItem
            newArray = [...barsArr]
        }
        if (calcBar >= barsArr.length - swapped.length) {
            calcBar = 0
            swapped.push(right)
        } else {
            calcBar++
        }
        setBarArr(newArray)
        if (swapped.length === barsArr.length - 1) {
            calcBar = -2
            setstart(false)
            stop()
        }
    }

    const bubbleSort = () => {
        swap(calcBar, calcBar + 1)
    }

    function sort() {
        if (start) {
            setTimeout(bubbleSort, speed)
        }
    }

    function stop() {
        setstart(false)
    }

    sort()

    return <div>{visualize(calc())}</div>
}
