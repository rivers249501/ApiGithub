import React from 'react'
import {Link} from 'react-router-dom'

const FollowersCards = ({userName, image}) => {
   
    return (
        <div class ="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex-col text-center items-center space-x-4">
            <img src={image} alt= {`image of ${userName}`} />
            <h4>{userName}</h4>
            <Link to={`/users/${userName}`}><button className="border-2 border-pink px-4 rounded-lg hover:border-red hover:bg-gray">ver mas</button></Link>
        </div>
    )
}

export default FollowersCards
