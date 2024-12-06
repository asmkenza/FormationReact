import React, { useEffect, useState } from 'react'

function Effect() {

    const [data, setData] = useState([]);

    useEffect(() => {

        // Code à exécuter
         fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((data) => setData(data))
       
      }, []);


  return (
    <>
      <div>
        <h1>Post</h1>
        <ul>
            {
            data.map((post) => (
            <li key={post.id}>{post.title}</li>
            )
            )
          }
          
        </ul>
      </div>
    </>
  )
}

export default Effect
