import React, { useEffect, useState } from 'react';
import './InventoryItems.css'

const InventoryItems = ({ item }) => {
    const { name, descriptions, img, quantity, price, supplierName
    } = item

    return (
        <div className=''>
            <div className="col shadow p-3 mb-5 bg-body rounded">
                <div className="card">
                    <img src={img} className="card-img-top w-50" alt="..." />
                    <div classNameName="card-body">
                        <h5 className="card-title ps-3 my-0">{name}</h5>
                        <h3 className="card-title ps-3 my-0">{quantity}</h3>
                        <h3 className="card-title ps-3 mt-0">{supplierName}</h3>
                        <h4 className="card-title ps-3 mt-0">{price}</h4>
                        <p className="card-text ps-3 pb-3">{descriptions}</p>
                    </div>
                    <button className='btn update-btn'>Update</button>
                </div>
            </div>
        </div>
    );
};

export default InventoryItems;