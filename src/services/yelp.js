export default function(args,callback,serverDetails){
  let urlSegment = '//'+serverDetails.server
  if(serverDetails.port.length != 0) urlSegment += ':'+serverDetails.port
  //let bounds = `${args.bbox.yMin},${args.bbox.xMin}|${args.bbox.yMax},${args.bbox.xMax}`
  let GeoCoords= `${args.point[1]},${args.point[0]},${0.001}`
  let postData = {
    term: args.term,
    //bounds: bounds
    ll:GeoCoords
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
  post(`${urlSegment}/yelp`,postData).then((response) => {
    callback(JSON.parse(response))
  })
}
