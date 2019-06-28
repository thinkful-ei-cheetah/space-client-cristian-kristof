import config from '../config'
import TokenService from './token-service'


export default {
  async getData(){
    try{
      const data = await fetch(`${config.API_ENDPOINT}/language`, {
        headers:{
          "content-type":"application/json",
          "Authorization": `bearer ${TokenService.getAuthToken()}`
        }
      })
      if (!data.ok){
        const errorJson = await data.json()
        return errorJson
      }
      const jsonData = await data.json();
     
      return jsonData;
    } catch (e){
      return {error: 'Problem getting data'}
    }
  },

  async getWord(){
    try{
      const data = await fetch(`${config.API_ENDPOINT}/language/head`, {
        headers:{
          "content-type":"application/json",
          "Authorization": `bearer ${TokenService.getAuthToken()}`
        }
      })
      if (!data.ok){
        const errorJson = await data.json()
        return errorJson
      }
      const jsonWordData = await data.json();
      return jsonWordData;
    } catch (e){
      return {error: 'Problem getting data'}
    }
  },

  async postGuess(guessWord){
    try{
      const data = await fetch(`${config.API_ENDPOINT}/language/guess`, {
        method: 'POST',
        body: JSON.stringify(guessWord),
        headers:{
          "content-type":"application/json",
          "Authorization": `bearer ${TokenService.getAuthToken()}`
        }
      })
      if (!data.ok){
        const errorJson = await data.json()
        return errorJson
      }
      const jsonWordData = await data.json();
     
      return jsonWordData;
    } catch (e){
      return {error: 'Problem getting data'}
    }
  },
}

