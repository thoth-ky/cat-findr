import config from './config'
import { stringifyParams} from './helpers'

const updateState = (dispatch, action) => {
  dispatch(action)
}

const getFromApi = (path, dispatch, actionData, params) => {

  const url = `${config.apiUrl}${path}?${stringifyParams(params)}`

  fetch(url, {
    method: 'GET',
    headers: {
      'x-api-key': config.apiKey,
    },
  }
  )
  .then((response) => { 
    return response.json();
  })
  .then((payload)=>{
    const action = {
      ...actionData,
      payload
    }
    updateState(dispatch, action)
  })
  .catch((error)=> console.log({error}))
}

export {
  getFromApi,
}