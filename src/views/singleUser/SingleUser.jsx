import React, {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'
import Header from '../../layout/Header'
import Card from '../../components/Home/card/Card'

const SingleUser = () => {

    const{userName}= useParams()
    const [SelectedUser, setSelectedUser] = useState({})

    useEffect( () => {
        const requestApi = async() =>{
            const urlDir = `https://api.github.com/users/${userName}`
            const response = await  fetch(urlDir)
            const result = await response.json()
            setSelectedUser(result)
        }
        requestApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div>
            <Header/>
            {
                SelectedUser &&
                <Card
                key={SelectedUser?.id}
                        userName={SelectedUser?.login}
                        image={SelectedUser?.avatar_url}
                        followers={SelectedUser?.followers_url}
                        following ={SelectedUser?.following_url}
                        repositories={SelectedUser?.repos_url}
                        cantidadFollowers={SelectedUser?.followers}
                        cantidadFollowing={SelectedUser?.following}
                        cantidadRepos={SelectedUser?.public_repos}
                        bio={SelectedUser?.bio}
                        />
            }

        </div>
    )
}

export default SingleUser
