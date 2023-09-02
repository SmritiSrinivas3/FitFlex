


export const exOptions =  {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4985fe7433mshb47ed5cb09d2335p15614djsn3b5d182a56c5',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4985fe7433mshb47ed5cb09d2335p15614djsn3b5d182a56c5',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    },
  };
  


export const fetchData = async (url, options) =>{
    const response = await fetch(url, options)
    const data = response.json()
    return data
}