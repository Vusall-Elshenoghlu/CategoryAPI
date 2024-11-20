//Requests

// import { baseUrl } from "../baseURL"

//GetAll
export async function getAllSuppliers(url){
    let suppliers
    let error

    await axios.get(url)
    .then(res=>suppliers = res.data)
    .catch(err=>error = err)
    return{
        suppliers,
        error
    }
}

//GetByID
export async function getSupplierByID(url,id){
    let supplier
    let error
    await axios.get(`${url}/${id}`)
    .then(res => supplier = res.data)
    .catch(err =>error = err)
    return{
        supplier,
        error
    }
}


