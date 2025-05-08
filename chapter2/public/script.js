function addData(){
    const name = document.getElementById('nameInput').value || 'default name'

    fetch('/api/data', {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({name})
    }).then(()=> location.reload())
}

function deleteData(){
    fetch('/api/data',{
        method:'DELETE',
    }).then(()=> location.reload())
}