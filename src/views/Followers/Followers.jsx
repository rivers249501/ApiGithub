import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Header from '../../layout/Header'
import FollowersCards from '../../components/FollowersCard/FollowersCards'


const Followers = () => {

    const {name} = useParams()
    const [followersInfo, setFollowersInfo] = useState([])

    useEffect(()=>{

        const requestApi = async ()=>{
            const urlDir = `https://api.github.com/users/${name}/followers`
            const response = await fetch (urlDir)
            const result = await response.json()
            setFollowersInfo(result)
        }

        requestApi()

    }, [name])

    return (
        <div>
            <Header />

            {
                followersInfo?.map(info =>
                    <FollowersCards 
                        key={info?.id}
                        userName={info?.login}
                        image={info?.avatar_url}
                       
                    />
                )
            }

        </div>
    )
}

export default Followers
