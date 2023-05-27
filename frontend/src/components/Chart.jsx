import { Chart } from "react-google-charts";

function Charte() {
    return (
        <Chart
            chartType="PieChart"
            data={[["Task", "Hours per Day"],
            ["Work", 11],
            ["Eat", 2],
            ["Commute", 2],
            ["Watch TV", 2],
            ["Sleep", 7],]}
            width="100%"
            height="400px"
            legendToggle
        />
    )
}

export default Charte;