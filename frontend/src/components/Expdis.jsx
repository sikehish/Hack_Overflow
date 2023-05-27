function Expdis() {
    const exparray=[{expname:"abc",expcat:"xyz",expdate:"12/12/2020"},{expname:"abc",expcat:"xyz",expdate:"12/12/2020"},{expname:"abc",expcat:"xyz",expdate:"12/12/2020"}]


    const Tabledata=()=>{
        return exparray.map((data)=>{
            return (<div>
            <tr>
                <td>{data.expname}</td>
                <td>{data.expcat}</td>
                <td>{data.expdate}</td>
            </tr>
            </div>)
    })
}


    return <div>
        <table>
            <tr>
                <th>Expense</th>
                <th>Category</th>
                <th>Date</th>
            </tr>
            <Tabledata />
        </table>
    </div>
}

export default Expdis;