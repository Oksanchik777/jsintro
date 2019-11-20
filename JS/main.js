var search = document.querySelector('.search')var search = document.querySelector('.search');
var go = document.querySelector('.go');

go.addEventListener('click', myFunction);

function myFunction(){
    var  result = search.value;
    var url = 'http://www.omdbapi.com/?apikey=f78df073&t=Batman';
    var req = new Request(url);
    fetch(req)
    .then((response) =>{
        return response.json();
    })
    .then((data) => {
        document.querySelector('h1').innerHTML = `${data.Title} ${data.Country} <br> Released: ${data.Released}`
        var poster = document.querySelector('.poster');
        poster.innerHTML=`<img src="${data.Poster}" alt="">`;
    })
}
