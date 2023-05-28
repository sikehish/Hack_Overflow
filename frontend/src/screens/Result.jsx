
export default function Result(props) {
  return (
    <>
        <div style={{"displat":"flex","justifyContent":"space-between"}}>
            <img src="images/bot.svg" alt="" />
            <div><p>{props.msg}</p></div>
        </div>
    </>
  )
}
