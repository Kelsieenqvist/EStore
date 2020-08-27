import React from 'react';
import './Collection.css';
import { Link } from "react-router-dom"

const Collection = () => {
    return (
        <div className="collection-container">
            <div className="column-row">
                <div className="column left">
                    <h2 className="header-content">Shop Leggings</h2>
                    <h4>Get down with the most trendy Leggings now</h4>
                    <Link to="/subcategory/Leggings"><button className="collbtn">SHOP NOW</button></Link>
                </div>
                <div className="column right">
                    {/* <img className="img-collection" id="img1"/> */}
                </div>
            </div>

            <div className="column-row">
                <div className="column2 right2">
                    {/* <img className="img-collection" id="img2"/> */}
                </div>
                <div className="column2 left2">
                    <h2 className="header-content">Shop Crop Tops</h2>
                    <h4>Explore the latest and most trendy Crop Tops</h4>
                    <Link to="/category/Crop Tops"><button className="collbtn">SHOP NOW</button></Link>
                </div>

            </div>
        </div>
    )
}

export default Collection;