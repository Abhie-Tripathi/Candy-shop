let addbtn = document.getElementById("addbtn")
var Exname = document.getElementById("name")
var price = document.getElementById("price")
var type = document.getElementById("type")
var quantity = document.getElementById("amount")
var ul = document.getElementById("ul")
addbtn.addEventListener("click", addtolist);
function addtolist() {
    // creating object 
    let object = { Name: Exname.value, Price: price.value, Type: type.value, Quantity: quantity.value }

    // adding to backend and showing on screen
    axios.post("https://crudcrud.com/api/8073d086d35b4ea7a70f007aa5353d6f/candy", object).then(()=>location.reload())
    showonscreen(object)
    
}

//On loading dom
window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/8073d086d35b4ea7a70f007aa5353d6f/candy")
        .then((data) => {
            for(i=0;i<data.data.length;i++){
                showonscreen(data.data[i])
            }
        }
        )
});

function showonscreen(obj) {
    // creating list Element
    let list = document.createElement("li")
    list.className = "list-group-item"
    list.appendChild(document.createTextNode(`Name : ${obj.Name}  , Price : ${obj.Price}  , Type : ${obj.Type}  , Quantity :   ${obj.Quantity}`));

    // creating and appending delete bt in list
    let buytwo = document.createElement("button");
    buytwo.className = "btn btn-warning col-sm-1 float-end"
    buytwo.appendChild(document.createTextNode("Buy 2"));
    list.appendChild(buytwo)

    // creating and appending edit bt in list
    let buyone = document.createElement("button");
    buyone.className = "btn btn-warning col-sm-1 float-end me-1"
    buyone.appendChild(document.createTextNode("Buy 1"));
    list.appendChild(buyone)

    // appending list in ul
    ul.appendChild(list)

    // buyone btn fuctionality
    buyone.addEventListener("click",decreasebyone);
    function decreasebyone(e){
        if(obj.Quantity-2<0) console.log("Quantity Low");
        else{
        axios.delete(`https://crudcrud.com/api/8073d086d35b4ea7a70f007aa5353d6f/candy/${obj._id}`)
        .then(axios.post("https://crudcrud.com/api/8073d086d35b4ea7a70f007aa5353d6f/candy",{ Name: obj.Name, Price: obj.Price, Type: obj.Type, Quantity: obj.Quantity-1 })).then(()=>location.reload())}
        
        

    }

    // edit btn fuctionality
    buytwo.addEventListener("click",decreasebytwo);
    function decreasebytwo(e){
        if(obj.Quantity-2<0) console.log("Quantity Low");
        else{axios.delete(`https://crudcrud.com/api/8073d086d35b4ea7a70f007aa5353d6f/candy/${obj._id}`)
        .then(axios.post("https://crudcrud.com/api/8073d086d35b4ea7a70f007aa5353d6f/candy",{ Name: obj.Name, Price: obj.Price, Type: obj.Type, Quantity: obj.Quantity-2 })).then(()=>location.reload())}


    }




}










