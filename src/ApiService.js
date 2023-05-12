import Connection from "./Connection";

function ApiService(path, formData, responseCallback, method="GET"){

    let connection = Connection();

    if(path.startsWith('https')){
        connection = path;
    }


    if(method === 'GET'){
        fetch(connection + path, {
            method: method,
            headers:{'Content-type':'application/json; charset=UTF-8','X-Api-Key':'bb32c96502a24cafb4fc9e33851be330'},
        })
        .then(response => response.json())
        .then(data => {
            responseCallback(data);
        })
        .catch((error) =>{
            console.log(error.message);
        });
    }else{
        fetch(connection + path, {
            method: method,
            body: JSON.stringify(formData),
            headers:{'Content-type':'application/json; charset=UTF-8',},
        })
        .then(response => response.json())
        .then(data => {
            responseCallback(data);
        })
        .catch((error) =>{
            console.log(error.message);
        });
    }
    

}

export default ApiService;