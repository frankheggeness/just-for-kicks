// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.

var details = document.getElementById('details');
var shipDetails = document.getElementById('shipping')
function clickingDetails(){
    // var alert = document.createElement('div');
    // alert.id = 'alert';

    // alert.innerHTML = 'Not Available in Hawaii (sorry)';
    // shipDetails.appendChild(alert);
    window.alert('Not Available in Hawaii')
}
details.addEventListener('click', clickingDetails);

//2. Add an event to the div element with the id of 'name1' that will show/hide the description ('descrip1') after hovering over Air Jordan II.

var name1 = document.getElementById('name1');
function hideDeets(){
   
    var descrip1 = document.getElementById('descrip1');
    if(descrip1.style.display === 'block'){
    descrip1.style.display = 'none'
    } else{
        descrip1.style.display = 'block'
    }
}
name1.addEventListener('mouseover', hideDeets);

//3. Add an event to the div element with the id of 'name2' that will show/hide the following description after clicking on the element.
//'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.'

var name2 = document.getElementById('name2');

function hide2(){
    var descrip2 = document.createElement('div');
    var name2 = document.getElementById('name2')
    descrip2.id = 'descrip2';
    descrip2.innerHTML = "The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.";
    name2.appendChild(descrip2);

}


//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2' 

//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.
var daThumbs = document.getElementsByClassName('far fa-thumbs-up');
for (var i=0;i<daThumbs.length;i++){
    var count = document.createElement('div');
    count.className = 'daCount';
    count.innerHTML = 0;
    daThumbs[i].appendChild(count)

    daThumbs[i].addEventListener('click', addThumbs);
}
function addThumbs(){
    var newCount = this.querySelector('.daCount');
    newCount.innerHTML ++;
}
//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.
var priceEm = document.getElementById('price4');
priceEm.childNodes[1].addEventListener('click', addIt);
function addIt(){
    priceEm.childNodes[0].nodeValue ++;
}
// var priceChild = document.price4.childNodes;
// // priceChild[0].nodeValue = 30
// console.log(priceChild);

//6. Add an event to the minus icon that will decrement the price of the Air Jordan VI shoe each time the icon is clicked on.

var price5 = document.getElementById('price5');
price5.childNodes[1].addEventListener('click', lessEm);
function lessEm(){
    price5.childNodes[0].nodeValue --;
}
//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 
var jordanImg = document.getElementsByTagName('img')
console.log(jordanImg)
jordanImg[6].addEventListener('onmouseover', changeColor);

function changeColor(){
    jordanImg[6].src = 'https://www.flightclub.com/media/catalog/product/cache/1/small_image/360x257/9df78eab33525d08d6e5fb8d27136e95/8/0/805882_2.jpg'
}

//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.

//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.

//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.
