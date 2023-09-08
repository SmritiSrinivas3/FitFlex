

export const exOptions =  {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ab6bb00cb9msh12c1784a16fb37bp1a6cf8jsn4477b74f8938',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ab6bb00cb9msh12c1784a16fb37bp1a6cf8jsn4477b74f8938',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  },
};


  


export const fetchData = async (url, options) =>{
    const response = await fetch(url, options)
    const data = response.json()
    return data
}