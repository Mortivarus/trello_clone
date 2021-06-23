import React from 'react'

function Card(props) {

    const dragStart = e => {
        const target = e.target;
    }

    return (
        <div
            id={props.id}
            className={props.className}

            onDragStart={dragStart}
            onDragOver={dragOver}
        >
            { props.children }
        </div>
    )
}

export default Card
