export default function(callback,serverDetails) {
  let urlSegment = '//'+serverDetails.server
  if(serverDetails.port.length != 0) urlSegment += ':'+serverDetails.port
  let get = (url) => {
    return new Promise(function(resolve,reject){
      let xhr = new XMLHttpRequest()
      xhr.open('GET',url)
      xhr.setRequestHeader('Accept','application/json')
      xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200) resolve(xhr.response)
      }
      xhr.send()
    })
  }
  get(`${urlSegment}/distance`).then((response) => {
    callback(response)
  })
}
