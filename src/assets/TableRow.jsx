import React from 'react'

export default function TableRow(props) {
    return (
        <>
            <tr>
                <td>{props.key}</td>
                <td>{props.value}</td>
            </tr>
        </>
    )
}
