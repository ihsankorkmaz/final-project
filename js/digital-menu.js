





   // takes category name and creates category divs


function addCategory(id,categoryName){


    var category = document.createElement("div");
    category.classList.add("category","invisible");
    category.id = id+"_cat"
    var catTitle =  document.createElement("h1");
    catTitle.className = "cat-title"
    catTitle.innerHTML = categoryName;
    category.appendChild(catTitle);
    document.getElementsByClassName("border")[0].appendChild(category);

}



 //  takes the items array and create divs
function writeItems(itemList,categoryID){


    for (var i = 0; i < itemList.length; i++) {
        var item = document.createElement("div"); 
        item.className = "item"; 
        item.id = i;
        var plus = document.createElement("div");
        plus.classList.add("plus","add");
        plus.id = i; 
        var plusImage = document.createElement("img");
        plusImage.className = "plus-img";
        plusImage.src = "img/plus-logo.png";
        plus.appendChild(plusImage);
        item.appendChild(plus);
        var itemImg = document.createElement("img"); 
        itemImg.className = "item-img";
        itemImg.src = itemList[i].image;
        var itemTitle = document.createElement("p"); 
        var itemPrice = document.createElement("span");
        itemTitle.className = "item-title";
        itemTitle.innerHTML =  itemList[i].name;
        itemPrice.innerHTML = "$"+itemList[i].price;
        item.appendChild(itemImg);      
        itemTitle.appendChild(itemPrice);
        item.appendChild(itemTitle);
      

        document.getElementById(categoryID).appendChild(item);


    }


}




// menu item class
function MenuItem(name,description,image,price){

    this.name = name;
    this.description = description;
    this.image = image;
    this.price = price;

}


var dummyData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent erat est, eleifend eu elit vitae, finibus faucibus velit. Aenean suscipit diam mollis velit vestibulum tempor. Maecenas risus nunc, tempor non pulvinar ac, faucibus id nisl. Praesent tortor diam, tristique quis lorem ac, ullamcorper commodo lacus. Nullam rhoncus aliquet augue id feugiat. Vestibulum eu accumsan erat.";

//drinks
var CocaCola = new MenuItem("Coca Cola",dummyData,"img/coke.jpg",3);
var OrangeJuice = new MenuItem("Orange Juice",dummyData,"img/orange.jpg",5);
var Sprite = new MenuItem("Sprite",dummyData,"img/sprite.jpg",3);
var Milshake = new MenuItem("Milk Shake",dummyData,"img/milkshake.jpg",5);
var Coffee = new MenuItem("Coffee",dummyData,"img/coffee.jpg",7);

//Main Dishes
var Fish = new MenuItem("Salmon Fish",dummyData,"img/fish.jpg",25);
var BeefSteak = new MenuItem("Beef Steak",dummyData,"img/beef.jpg",22);
var Pasta = new MenuItem("Italian Pasta",dummyData,"img/pasta.jpg",33);
var GrilledChicken = new MenuItem("Grilled Chicken",dummyData,"img/chicken.jpg",35);
var Pizza = new MenuItem("Pizza",dummyData,"img/pizza.jpg",45);
var Soup = new MenuItem("Soup",dummyData,"img/soup.jpg",12);
var Shawarma = new MenuItem("Shawarma",dummyData,"img/shawarma.jpg",25);

//Desserts
var Cake = new MenuItem("Cake",dummyData,"img/cake.jpg",11);
var Waffle = new MenuItem("Waffle",dummyData,"img/waffle.jpg",15);
var IceCream = new MenuItem("Ice Cream",dummyData,"img/icecream.jpg",6);



var drinks = [CocaCola,OrangeJuice,Sprite,Milshake,Coffee];
var MainDishes = [Fish,BeefSteak,Pasta,Pizza,GrilledChicken,Soup,Shawarma];
var desserts = [Cake,Waffle,IceCream];


addCategory("drinks","Drinks");
writeItems(drinks,"drinks_cat");

addCategory("mainDishes","Main Dishes");
writeItems(MainDishes,"mainDishes_cat");

addCategory("desserts","Desserts");
writeItems(desserts,"desserts_cat");






var showingArray = "#mainDishes_cat";

function getShowingArray(){

    if(showingArray == "#drinks_cat"){

        return drinks;
    }
    else if(showingArray == "#mainDishes_cat"){
    
        return MainDishes;

    
    }
      else if(showingArray == "#desserts_cat"){
    
        return desserts;

    
    }

}

//default starting of page  settings


$(showingArray).addClass('visible');
$(showingArray).removeClass('invisible');
$("#mainDishes_cat").parent().addClass('clicked-menu');







//---------------------------click functions-----------------------------




//header menu actions

$(document).on("click",".menuPage", function () {
    var clicked = $(this).attr('id');
    showingArray = "#"+clicked+"_cat";
    
    $('.menu ul li').removeClass('clicked-menu');
    $(this).parent().addClass('clicked-menu');

    $(".category").removeClass('visible');
    $(".category").addClass('invisible');
    $(showingArray).removeClass('invisible');
    $(showingArray).addClass('visible');

});






// menu items popup open




$(document).on("click",".item", function () {
    var clickedItemNo = $(this).attr('id');
    document.getElementById('item-show').style.display='block';
    document.getElementById('fade').style.display='block';
    document.getElementById('item-show').innerHTML =
        
        //popup html
        "<div class='popupItem'>"+
            "<i class='closePopup fa fa-times fa-3x'></i>"+

            "<img id='popupItem-img' src='"+getShowingArray()[clickedItemNo].image+"'/>"+
            "<div class='order-title'><h1>"+getShowingArray()[clickedItemNo].name+"</h1>"+
            "<p class='price'>$"+getShowingArray()[clickedItemNo].price+"</p></div>"+
            "<p class='desc'>"+getShowingArray()[clickedItemNo].description+"</p>"+ 
            "<div class='plus add' id='"+clickedItemNo+"'><img class='plus-img' src='img/plus-logo.png'></div>"+
        "</div>"
        ;
    

});

    
// Order popup open


$(document).on("click","#orderBtn", function () {
    var clickedItem = $(this).attr('id');
    document.getElementById('light').style.display='block';
    document.getElementById('fade').style.display='block';
    
    insertItems();
     


});





//closing popup



$(document).on("click",".closePopup", function () {
//    var clickedItem = $(this).attr('id');
    document.getElementById('light').style.display='none';
    document.getElementById('fade').style.display='none';
    document.getElementById('item-show').style.display='none';

});





 


//adding items in order list


var orderListArray = [];
document.getElementById('counter').innerHTML = orderListArray.length;

 $(document).on("click",".add", function (e) {
        var clickedItem = $(this).attr('id');
        e.stopPropagation();
        orderListArray.push(getShowingArray()[clickedItem]);
        document.getElementById('counter').innerHTML = orderListArray.length;
        

     

});






// insert items to order popup and order popup HTML
    

function insertItems(){
    
  var  orderItemsHTML = "";
  var  total = 0;
    
    
    for (var i = 0; i < orderListArray.length; i++) {

             
        orderItemsHTML = orderItemsHTML + "<li id='li"+i+"'><i id='"+i+"' class='deleteItemBtn fa  fa-minus-square fa-1x'>               </i>    "+orderListArray[i].name+" <span>$ "+orderListArray[i].price+"</span></li>";
        total = total + parseInt(orderListArray[i].price);
             
        

     }
    document.getElementById('light').innerHTML =

    //popup html
    "<i class='closePopup fa fa-times fa-3x'></i>"+
    "<h1>Your Order List </h1>"+
    "<div id='orderItemList'><ul id='orderItemUL'>"+orderItemsHTML+
    "</ul></div>"+
    "<p class='total'> Total: $<span>"+total+"</span></p>" 
    ;
}





//delete item from the array



function deleteByID(id){

 
    orderListArray.splice(id, 1);
    document.getElementById('counter').innerHTML = orderListArray.length;



}

// menu items popup
$(document).on("click",".deleteItemBtn", function () {
   
    var id = $(this).attr('id');
    
    deleteByID(id);
    
    
    
    //re-fill the list
    insertItems(); 


});

    






