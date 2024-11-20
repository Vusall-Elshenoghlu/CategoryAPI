import { baseUrl } from "./API/baseURL.js";
import {getSupplierByID } from "./API/Reguests/category.js";

let id = new URLSearchParams(window.location.search).get("id");
console.log(id);
// let objectt = getSupplierByID(baseUrl,id)
// .then(respo=>console.log(respo))


let listGroup = document.querySelector(".list-group")



function showCategory(obj){
    listGroup.innerHTML = `
            <li class="list-group-item">
                <div class="textss">
                    <div class="item">Item</div>
                    <div class="edit-delete">
                        <a href="#" class="btn btn-warning">Edit</a>
                        <a href="#" class="btn btn-danger">Delete</a>
                    </div>
                </div>
            </li>
        `
}


