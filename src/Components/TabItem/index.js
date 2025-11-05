import './index.css'


const TabItem=(props)=>{
    const {item,isActive,onClickTab}=props
    const {displayText,tabId}=item
    const activestyle= isActive? "styled":''
    return (
        
               <div>

                <h2>{isActive}</h2>
                <buton className= {`tab-container ${activestyle}`} onClick={()=>onClickTab(tabId)}>
                     <li className='tab-list'>{displayText}</li>
                 
                  
                </buton>
                 </div>
                
               

    )

}

export default TabItem