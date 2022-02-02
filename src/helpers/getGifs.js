

export const getGifs = async (category) => {


    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}l&limit=10&api_key=xjbR2ZYLV6883JRh3qnNn7mTXd7vnydu`
        const resp = await fetch(url)
        const {data} = await resp.json()

    const gifs = data.map( img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
  
    return gifs

}
