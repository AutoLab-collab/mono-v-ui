export default function(args,callback,serverDetails){
  let urlSegment = '//'+serverDetails.server
  if(serverDetails.port.length != 0) urlSegment += ':'+serverDetails.port
  
  let postData = {
    lat: args[0],
    lng: args[1]
  }
  let post = (url,data) => {
    return new Promise(function(resolve,reject){
      let xhr = new XMLHttpRequest()
      let params = ''
      for(let key in data) params += '&'+key+'='+data[key]
      xhr.open('POST',url)
      xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')
      xhr.setRequestHeader('Accept','application/json')
      xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200) resolve(xhr.response)
      }
      xhr.send(params)
    })
  }
  post(`${urlSegment}/range`,postData).then((response) => {
    callback(JSON.parse(response))
  })
}
