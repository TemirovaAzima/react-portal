
const PopupContent = ({copied})=>{

    return (
        <div>
            {copied &&
                (<div style={{position : 'absolute', top: '100px'}}> Copied to clipboard</div>)
            }
        </div>
    )
}

export default PopupContent