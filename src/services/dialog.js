export default function(question,seatNumber,callback,serverDetails){
  let urlSegment = '//'+serverDetails.server
  if(serverDetails.port.length != 0) urlSegment += ':'+serverDetails.port
  let postData = {
    "text": question,
    "seat":seatNumber
  }
  let post = (url,data) => {
    return new Promise(function(resolve,reject){
      let xhr = new XMLHttpRequest()
      //let params = data
      let params = ''
      for(let key in data) params += '&'+key+'='+data[key]
      xhr.open('POST',url)
      //xhr.setRequestHeader('Content-Type','application/json')
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200) resolve(xhr.response)
      }
      xhr.send(params)
    })
  }
  post(`${urlSegment}/conversation`,postData).then((response) => {
    callback(JSON.parse(response))
 }) 
  
  
  
  	
}
