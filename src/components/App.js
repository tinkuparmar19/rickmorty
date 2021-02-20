import React, { useEffect, useState } from 'react'
import Character from './Character';
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'

function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://rickandmortyapi.com/api/character/?name=rick&page=1'
    })
      .then(result => {
        setData(prevData => {
          return prevData.concat(result.data.results.map(item => item))
        })
      })
  }, [page])

  let searchData
  if (search.trim().length > 1 && data.length > 0) {
    searchData = (data.filter(item => {
      return item.name.toLowerCase().includes(search.trim().toLowerCase())
    }))
  } else {
    searchData = data
  }

  return (
    <div className="App">
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="container form-control mt-4"
        id='input-box'
        placeholder='search by character name'
      />

      <InfiniteScroll
        dataLength={data.length}
        next={() => setPage(page => page + 1)}
        hasMore={true}
      >
        {
          searchData.length > 0 && searchData.map(item => {
            return <Character key={item.id} item={item} />
          })
        }
      </InfiniteScroll>
    </div>
  );
}

export default App;
