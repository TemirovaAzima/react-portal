import {useState} from 'react'

const Switcher = ()=>{
    const [sw, setSw] = useState(false)

    return(
        <div>
            Switcher
            {
                sw ? (
                    <span>Dark</span>
                ) : (
                    <span>Light</span>
                )
            }
            <br/>

            <input type={'text'} key={sw? 'Dark' : 'Light'}/>
            <button onClick={()=>setSw((prevSw)=>!prevSw)}>Switch</button>
        </div>
    )
}
export default Switcher