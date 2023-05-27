import Expdis from "../components/Expdis"
import Expense from "../components/Expense"
import DrawerAppBar from "../components/Navbar"
function Table() {
    return (
        <>
            <DrawerAppBar />
            <h1 style={{"margin":"0"}}>Add Expenses</h1>
            <div style={{ "Display": "flex" }}>
                <Expense />
                <Expdis />
            </div>
        </>
    )
}

export default Table