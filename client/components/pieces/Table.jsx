var Table = (props) => {
    
    return (
        <div>
            <table className={props.css}>
                {props.rows.map((row, idx) => {
                    return <tr>{row.map(data => {
                        if(idx === 0) {
                            return <th>{data}</th>
                        } else {
                            return <td>{data}</td>
                        }
                    })}</tr>
                })}
            </table>
        </div>
    )
}

export default Table;