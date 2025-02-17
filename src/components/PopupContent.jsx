import {createPortal} from 'react-dom'
const PopupContent = ({copied})=>{

    return createPortal (
        <div>
            {copied && (
                <div style={{position : 'absolute', top: '100px'}}>
                    Copied to clipboard
                </div>
                )}
        </div>,
        document.querySelector('#popup-content')
    )
}

export default PopupContent