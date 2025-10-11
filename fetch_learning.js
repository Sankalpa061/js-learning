url = 'https://randomuser.me/api/'
fetch(url)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data.results[0].name.first);
})
.catch((error)=>{
    console.log('Error Occured ');
})