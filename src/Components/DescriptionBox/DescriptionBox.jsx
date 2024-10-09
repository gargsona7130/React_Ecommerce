import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>

            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p> Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. 
                Soluta quibusdam optio 
                reiciendis officiis nihil, 
                harum totam eius adipisci 
                recusandae doloribus quisquam
                 fuga id ab eaque provident 
                 quia repellendus porro maxime?
                 </p>
                 <p> 
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. 
                Ab repudiandae voluptate veniam?
                Ea modi at debitis autem, nisi 
                minus, nostrum quis quos
                recusandae ratione beatae, in 
                consequatur odit voluptatibus 
                ipsum!
                 </p>
        </div>

    </div>
  )
}

export default DescriptionBox