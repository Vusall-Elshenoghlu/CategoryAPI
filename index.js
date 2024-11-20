import { getAllSuppliers,getSupplierByID } from "./API/Reguests/category.js";
import { baseUrl } from "./API/baseURL.js";


//Selectors
let listGroup = document.querySelector(".list-group")


function getData(){
    getAllSuppliers(baseUrl)
    .then(respo=>showCategory(respo.suppliers))

}
getData()

function showCategory(arr){
    listGroup.innerHTML = ""
    arr.forEach(element => {
        console.log(element.id);
        
        listGroup.innerHTML += `<li class="list-group-item">
                <div class="textss">
                    <div class="item">id: ${element.id} / Description: ${element.description}</div>
                    <div class="edit-delete">
                        <a href="details.html?id=${element.id}" class="btn btn-primary">Details</a>
                        <a href="#" class="btn btn-warning">Edit</a>
                        <a href="#" class="btn btn-danger">Delete</a>
                    </div>
                </div>
            </li>`
    });
}

// getSupplierByID(baseUrl,4)
// .then(res => console.log(res.supplier))
// .catch(err=>console.log(err.message)
// )
