import React from 'react'

export default ({ height, id, current, width }) => {
    return (
        <span
            style={{
                height: height,
                backgroundColor: '#3f51b5',
                width: width,
            }}
            className={current === true ? 'bar curBar' : 'bar'}
            id={`bar-${id}`}
        ></span>
    )
}
