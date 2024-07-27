import React from "react";
import './PreLoader.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

export const PreLoader = () => {
    
    return (
        <div className="preloader" >
            <div className="container">
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
            </div>
            <div className="text-container" >
                <span>Hello! , Welcome here ;)</span>
            </div>
            <div className="container">
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
            </div>
        </div>
    )
}