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
      console.log('error')
      return {error: 'Problem getting data'}
    }
  }
}
