import React  from 'react'

function Categories({items, }) {
    
    const [activeItem, setActiveItem] = React.useState(null)

    const onSelectItem=(value)=>{
        setActiveItem(value)
        
    }
    
    return (
        
        <div className="categories">
            
            <ul>
                <li onClick ={()=>onSelectItem(null)} className={activeItem===null?'active':''} >Все</li>
                
                {items && items.map((name,index)=> <li  onClick={()=>onSelectItem(index)} className={activeItem===index?'active':''}
                 key ={name}>{name}</li>)}

            </ul>
        </div>
    )
}

export default Categories
