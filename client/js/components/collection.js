let one_collection;


function createCollection(event){
    event.preventDefault()
    const top_id = top_images[top_currentIndex].id
    const bottom_id = bottom_images[bottom_currentIndex].id
    const shoe_id = shoe_images[shoe_currentIndex].id

    const url_collection = `/api/collection/create?top_id=${top_id}&btm_id=${bottom_id}&shoe_id=${shoe_id}&weather=${weather_type}`

    const form = event.target

    const data = Object.fromEntries(new FormData(form))



    fetch(url_collection,
        {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          }).then(res => res.json()).then(reloadPage())
}

//collection list displayed in html using forEach loop
function readCollection(event){

    const dropDown = document.querySelector('#drop-down')
    
    

     user_collection.forEach(function (type) {
      const user_collection_list = document.createElement('option')
      user_collection_list.value = type['id']
      user_collection_list.textContent = type['name']
      dropDown.appendChild(user_collection_list)
    })

}

// When user clicks on get collection (single collection) from dropdown
function getCollection(){
    const dropDown = document.querySelector('#drop-down')
    const collection_id = dropDown.value;

    const url = `/api/collection/read?id=${collection_id}`

    fetch(url)
  .then(res => res.json()).then(data => {

    one_collection = data[0];
    displayCollection(one_collection)
    }
  )
  
}

function displayCollection(data){
    document.querySelector('#page').innerHTML = `<div id="tops">
    <img id="top_image" src="${data.top_image_url}" alt="Image">
    </div>
    <div id="bottoms">
    <img id="btm_image" src="${data.bottom_image_url}" alt="Image">
    </div>
    <div id="shoes">
    <img id="btm_image" src="${data.shoe_image_url}" alt="Image">
    </div>
    <div class="controls">
      <div class="update-collection">
        <form action="" onSubmit="updateById(event, ${data.collection_id} )">
        <input class="text-box" type="text" name="collection_input" placeholder="update collection name..." value="${data.collection_name}">
          <button>Update Collection</button>
      </form>


      </div>

      <div class="delete-collection">
        <form action="" onSubmit=deleteCollection(${data.collection_id})>
        
          <button>Delete Collection</button>
      </form>


      </div>
    </div>`
}

function deleteCollection(id){
    const url = `/api/collection/delete?id=${id}`

    fetch(url,{
      method:'DELETE'
    }).then(reloadPage())
   


}

function updateById(event, id){


  event.preventDefault()
  const form = event.target
  
    // converts form data into an object
  const data = Object.fromEntries(new FormData(form))
  
    
    const url = `/api/collection/update?id=${id}`


    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(reloadPage())
}


