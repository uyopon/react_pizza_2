import React from 'react'

const Categories = React.memo(
    function Categories({activeItem, items, onSelectCategory }) {

       



        return (

            <div className="categories">

                <ul>
                    <li onClick={() => onSelectCategory(null)} className={activeItem === null ? 'active' : ''} >Все</li>

                    {items && items.map((name, index) => <li onClick={() => onSelectCategory(index)} className={activeItem === index ? 'active' : ''}
                        key={name}>{name}</li>)}

                </ul>
            </div>
        )
    }
)

export default Categories
