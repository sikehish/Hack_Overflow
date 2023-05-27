import Expdis from "../components/Expdis"
import Expense from "../components/Expense"
import DrawerAppBar from "../components/Navbar"
function Table() {
    return (
        <>
            <DrawerAppBar />
            <div style={{ "Display": "flex" }}>
                <Expense />
                <Expdis />
            </div>
        </>
    )
}

export default Table