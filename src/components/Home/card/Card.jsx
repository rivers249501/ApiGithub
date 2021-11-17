/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import {Link} from 'react-router-dom'
import './Card.styles.css'

const Card = (props) => {
    const {userName, image, cantidadFollowers, cantidadFollowing, cantidadRepos, bio}= props
    console.log(image)
    return (
        
        <div className="rounded-lg bg-blueligth border-black border-2 w-4/5 flex-col text-center mx-auto">
           <h2>{userName}</h2> 
            <h3>{bio}</h3>
            <img className=" w-full object-center" src={image} alt={`image of ${userName}`} />
           

           <ul className="flex justify-between">
                <Link to={`/users/${userName}/followers`}> <p>Followers  <span class="font-semibold">{cantidadFollowers}</span></p> </Link>
                <Link to={`/users/${userName}/following`}> <p>Following  <span class="font-semibold">{cantidadFollowing}</span></p> </Link>
                <Link to={`/users/${userName}/repos`}> <p>Repositories   <span class="font-semibold">{cantidadRepos}</span></p> </Link>
                
           </ul>
        </div>
    )
}

export default Card
