import React from 'react'

const RepoCard = ({repoName, owner, repoPrivate}) => {
    const repoLink =`https://github.com/${owner}/${repoName}`
    return (

        <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 flex justify-center ">
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">

                <div class="w-full md:w-2/5 h-80">
                    <img class="object-center object-cover w-full h-full" src="https://www.gaceta.unam.mx/wp-content/uploads/2020/10/201019-Com6-des-f1-repositorio-institucional.jpg" alt="photo"/>
                </div>

                <div class="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                    <p class="text-xl text-gray-700 font-bold">name: {owner}</p>
                    <p class="text-base text-gray-400 font-normal">{repoName}</p>
                   
                    <div class="flex justify-start space-x-2">
                    <h4>Private: {repoPrivate?"Private": "Public"}</h4>
                    <a href={repoLink} target="_blank">see more about this repo</a>
                        
                       
                    </div>
                </div>
            </div>
        </div>   
                 
       
    </section>
    
    )
}

export default RepoCard



