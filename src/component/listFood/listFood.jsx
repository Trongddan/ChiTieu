import React from 'react'
import poster from "../../asset/image/poster.jpg"
import "./listFood.scss"
const ListFood = ({title}) => {
    return (
        <>
        <div className="title-content">{title}</div>
        <div className="listFood">
        <div className="itemFood">
            <img src={poster} alt="" className="image-food"/>
            <div className="title-food">Đậu om chuối</div>
        </div>
        <div className="itemFood">
            <img src={poster} alt="" className="image-food"/>
            <div className="title-food">Đậu om chuối</div>
        </div>
        <div className="itemFood">
            <img src={poster} alt="" className="image-food"/>
            <div className="title-food">Đậu om chuối</div>
        </div>
        <div className="itemFood">
            <img src={poster} alt="" className="image-food"/>
            <div className="title-food">Đậu om chuối</div>
        </div>
        <div className="itemFood">
            <img src={poster} alt="" className="image-food"/>
            <div className="title-food">Đậu om chuối</div>
        </div>
        <div className="itemFood">
            <img src={poster} alt="" className="image-food"/>
            <div className="title-food">Đậu om chuối</div>
        </div>
        <div className="itemFood">
            <img src={poster} alt="" className="image-food"/>
            <div className="title-food">Đậu om chuối</div>
        </div>
        <div className="itemFood">
            <img src={poster} alt="" className="image-food"/>
            <div className="title-food">Đậu om chuối</div>
        </div>
        <div className="itemFood">
            <img src={poster} alt="" className="image-food"/>
            <div className="title-food">Đậu om chuối</div>
        </div>
        <div className="itemFood">
            <img src={poster} alt="" className="image-food"/>
            <div className="title-food">Đậu om chuối</div>
        </div>
        </div>
        </>
    )
}

export default ListFood
