import React from "react"
import "./Popular.css"
import { ShopContext } from "../../Context/ShopContext"
import Item from "../Item/Item"

const Popular = () => {
    const {all_product} = React.useContext(ShopContext);
    return (
        <div className="popular">
            <div className="popular-item">
                {all_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default Popular