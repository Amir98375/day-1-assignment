export const List = (props)=>{
    const arr = props.name;
    return(
        <>

            <h1>{props.head}</h1>
            <ul>
              
                {arr.map((e)=>
                    <li style={{'backgroundColor':'red'}}>{e}</li>
                )}
                
            </ul>
        </>
    )
}
