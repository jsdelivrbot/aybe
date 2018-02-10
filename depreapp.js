function review_ticket(){

  /*Global Var for this scope*/
tutorialMessage("Please, click on the following fields with background color <span style='background: rgba(214, 208, 208, 0.3);font-size:bold;'>GREY</span> in this Sparc Ticket");
(function() {//I do this to avoid unwanted variable violation. Psychotic programming sociopat would kill me for this, but ... you know, life is hard!
 'use strict';
 /*On call this parent function, we will call javascript list of items*/
 const append_to_main_window = document.getElementById("window_content");
 const count_if_sparc_items = document.createElement("div");
 count_if_sparc_items.setAttribute("id","numberOfSparcItems");
 const array_of_items = ["Country <br><a class='wiki_aybe' target='_blank' href='https://wiki.vip.corp.ebay.com/display/COEDM/9.+Campaigns'>Wiki</a>","Admin Campaign <br> <a class='wiki_aybe' target='_blank' href='https://wiki.vip.corp.ebay.com/display/COEDM/Campaign+Types'>Wiki</a>","Requested type <br><a class='wiki_aybe' target='_blank' href='https://wiki.vip.corp.ebay.com/display/COEDM/9.+Campaigns'>Wiki</a>","Correct Complexity <br><a href='https://wiki.vip.corp.ebay.com/pages/viewpage.action?pageId=352537594' target='_blank' class='wiki_aybe'>Wiki</a>","Department","Campaign Type <br> <a class='wiki_aybe' target='_blank' href='https://wiki.vip.corp.ebay.com/display/COEDM/Campaign+Types'>Wiki</a>","Number of Email Contents","MC Contents <br> <a class='wiki_aybe' href='https://wiki.vip.corp.ebay.com/display/COEDM/Campaign+Building+in+MC' target='_blank'>Wiki</a>","If Recurring (check recurrence frequency)","Dynamic Contents <br><a class='wiki_aybe' target='_blank' href='https://wiki.vip.corp.ebay.com/display/COEDM/Dynamic+Fields'>Wiki</a>","Subject Line Options <br> <a class='wiki_aybe' target='_blank' href='https://wiki.vip.corp.ebay.com/pages/viewpage.action?pageId=368165102'>Wiki</a>","Litmus Tracking <br><a class='wiki_aybe' target='_blank' href='https://wiki.vip.corp.ebay.com/display/COEDM/Litmus+Testing'>Wiki</a>","Coupon <br> <a class='wiki_aybe' target='_blank' href='https://wiki.vip.corp.ebay.com/display/COEDM/Coupons#e9790545f13f47c6b854bb1d5b732f08'>Wiki</a>","Subjet Lines <br> <a target='_blank' href='https://wiki.vip.corp.ebay.com/pages/viewpage.action?pageId=417917662' class='wiki_aybe'>Wiki</a>","Description","Personalized Fields","Attachments"];
 const create_ul = document.createElement("ul");
 create_ul.setAttribute("id","sparc_list")
 let final_string = "";
 let k = 0;
 for (k = 0;k<array_of_items.length;k++){
   let li = document.createElement("li");
   li.setAttribute("class","sparcList")
   create_ul.appendChild(li);
   li.innerHTML = array_of_items[k];
 }
 count_if_sparc_items.innerHTML = array_of_items.length;
 append_to_main_window.appendChild(count_if_sparc_items);
 append_to_main_window.appendChild(create_ul);
}());
/*This iife will select correct items*/
(function() {
 'use strict';
 let sparc_body_classes = document.getElementsByClassName("value inactive");
 console.log("These are all the elements within value inactive class")
 console.log(sparc_body_classes);
 sparc_body_classes[4].style.background = "rgba(214, 208, 208, 0.3)";//Country
 sparc_body_classes[4].style.fontWeight = "bold";
 sparc_body_classes[11].style.background = "rgba(214, 208, 208, 0.3)";//Admin campaign
 sparc_body_classes[11].style.fontWeight = "bold";
 sparc_body_classes[22].style.background = "rgba(214, 208, 208, 0.3)";//Request type
 sparc_body_classes[22].style.fontWeight = "bold";
 sparc_body_classes[24].style.background = "rgba(214, 208, 208, 0.3)";//Complexity (there will be a function which will check if complexity is ok)
 sparc_body_classes[24].style.fontWeight = "bold";
 sparc_body_classes[26].style.background = "rgba(214, 208, 208, 0.3)";//Department
 sparc_body_classes[26].style.fontWeight = "bold";
 sparc_body_classes[27].style.background = "rgba(214, 208, 208, 0.3)";//Campaign Type
 sparc_body_classes[27].style.fontWeight = "bold";
 sparc_body_classes[28].style.background = "rgba(214, 208, 208, 0.3)";//Email Contents
 sparc_body_classes[28].style.fontWeight = "bold";
 sparc_body_classes[29].style.background = "rgba(214, 208, 208, 0.3)";//COUPON!!!!
 sparc_body_classes[29].style.fontWeight = "bold";
 sparc_body_classes[30].style.background = "rgba(214, 208, 208, 0.3)";//MC Contents
 sparc_body_classes[30].style.fontWeight = "bold";
 sparc_body_classes[31].style.background = "rgba(214, 208, 208, 0.3)";//Litmus requested (easy function to check, if EM specialist used litmus for tracking)
 sparc_body_classes[31].style.fontWeight = "bold";
 sparc_body_classes[32].style.background = "rgba(214, 208, 208, 0.3)";//Recurrence Yes/No
 sparc_body_classes[32].style.fontWeight = "bold";
 sparc_body_classes[34].style.background = "rgba(214, 208, 208, 0.3)";//Dynamic Content (I have to look at this one)
 sparc_body_classes[34].style.fontWeight = "bold";
 sparc_body_classes[36].style.background = "rgba(214, 208, 208, 0.3)";//SL Options (space for logic also)
 sparc_body_classes[36].style.fontWeight = "bold";
 sparc_body_classes[38].style.background = "rgba(214, 208, 208, 0.3)";//Subject Lines (Here can be also a function to make sure emarsys has an correct function)
 sparc_body_classes[38].style.fontWeight = "bold";
 changeItemOnHover()
}());


(function() {
 'use strict';
 let sparc_body_classes = document.getElementsByClassName("mod-content");
 console.log("This is the HTML collection for MOD content (I could not reach them via value inactive)");
 console.log(sparc_body_classes);
 sparc_body_classes[8].style.background = "rgba(214, 208, 208, 0.3)";//description
 sparc_body_classes[8].style.fontWeight = "bold";
 sparc_body_classes[9].style.background = "rgba(214, 208, 208, 0.3)";//attachments
 sparc_body_classes[9].style.fontWeight = "bold";
 sparc_body_classes[11].style.background = "rgba(214, 208, 208, 0.3)";//personalized fields
 sparc_body_classes[11].style.fontWeight = "bold";
 changeItemOnHover2()
}());
}
function changeItemOnHover2(){
  let main_message = [];
  let set_of_classes = document.getElementsByClassName("mod-content"); // Loads all the classes
  //funciton which makes specific item clickable
 Array.from(set_of_classes).forEach(function(element) {
    element.addEventListener('click', classColorChanger);
  });
  function classColorChanger(){
this.style.background = "white";//change specific item's background color
let index;
for(var i=0;i<set_of_classes.length;i++){
   if(set_of_classes[i]===this){
        index=i;
        break;
   }
}
const main_classes = document.getElementsByClassName("sparcList");
console.log(index);
/*Description*/
if(index === 8){
main_classes[14].style.background = "rgba(11, 165, 11, 0.3)";
main_classes[14].innerHTML = "Description &#10004;"
let subject_line_disappear = setTimeout(function () {
 main_classes[14].style.display = "none";
deleteSparcCount();
}, 2000);
this.removeEventListener("click",classColorChanger);
}
/*Personalized fields*/
else if (index === 11) {
  main_classes[15].style.background = "rgba(11, 165, 11, 0.3)";
  main_classes[15].innerHTML = "Personalized Fields &#10004;"
  let subject_line_disappear = setTimeout(function () {
   main_classes[15].style.display = "none";
  deleteSparcCount();
  }, 2000);
  this.removeEventListener("click",classColorChanger);
}

/*
Attachments
*/
else if (index === 9) {
main_classes[16].style.background = "rgba(11, 165, 11, 0.3)";
  main_classes[16].innerHTML = "Attachments Fields &#10004;"
  let subject_line_disappear = setTimeout(function () {
   main_classes[16].style.display = "none";
  deleteSparcCount();
  }, 2000);
  this.removeEventListener("click",classColorChanger);
}
}
}





function changeItemOnHover(){
  let main_message = [];
  let set_of_classes = document.getElementsByClassName("value inactive"); // Loads all the classes
  //funciton which makes specific item clickable
 Array.from(set_of_classes).forEach(function(element) {
    element.addEventListener('click', classColorChanger);
  });
  function classColorChanger(){
this.style.background = "rgba(11, 165, 11, 0.3)";//change specific item's background color
let index;
for(var i=0;i<set_of_classes.length;i++){
   if(set_of_classes[i]===this){
        index=i;
        break;
   }
}
console.log(index);
/*
Here comes the core logic if tgus crazy Review Ticket Function.
*/
const main_classes = document.getElementsByClassName("sparcList");

/*SUBJECT LINE OPTIONS*/
if(index === 36){
main_classes[10].style.background = "rgba(11, 165, 11, 0.3)";
main_classes[10].innerHTML = "Subject Line Options &#10004;"
let subject_line_disappear = setTimeout(function () {
 main_classes[10].style.display = "none";
deleteSparcCount();
}, 2000);
this.removeEventListener("click",classColorChanger);
}
/*Country
Get country and recommend test list
*/
else if (index === 4) {
 const sparc_classes = document.getElementsByClassName('value inactive');
 main_classes[0].style.background = "rgba(11, 165, 11, 0.3)";
 main_classes[0].innerHTML = "Country &#10004;";
 main_message.push("001.You are working on <strong>" + sparc_classes[4].innerText + "</strong>.");
 console.log(main_message);
 let subject_line_disappear = setTimeout(function () {
   main_classes[0].style.display = "none";
 deleteSparcCount();
 }, 2000);
 this.removeEventListener("click",classColorChanger);
}
/*ADMIN CAMPAIGN
IF admin campaign, please note that no marketing content can be sent in an admin campaign.
*/
else if (index === 11) {

const sparc_classes = document.getElementsByClassName('value inactive');
const admin_checked = document.getElementsByClassName("checkbox")[0].checked;
 main_classes[1].style.background = "rgba(11, 165, 11, 0.3)";
 if(admin_checked === true){
   main_classes[1].innerHTML = "Careful! This is Admin Campaign &#10004; <br> <a target='_blank' href='https://wiki.vip.corp.ebay.com/display/COEDM/Campaign+Types'>Wiki</a>";
   main_message.push("002.Be aware of this campaign. It's admin campaign, it means Auto Filter  needs to be unthicked and also make sure you are using coorect foote.");
    console.log(main_message);
 }else{
   main_classes[1].innerHTML = "This is NOT Admin Campaign &#10004;";
   main_message.push("002. This campaign is not Admin one. Auto filter recipients needs to be thicked");
    console.log(main_message);
 }
 let subject_line_disappear = setTimeout(function () {
   main_classes[1].style.display = "none";
 deleteSparcCount();
 }, 2000);
 this.removeEventListener("click",classColorChanger);
}
/*REQUEST TYPE
Can be Adhoc or Recurring.
*/
else if(index === 22){
 main_classes[2].style.background = "rgba(11, 165, 11, 0.3)";
 main_classes[2].innerHTML = "Requested Type &#10004;";
 let subject_line_disappear = setTimeout(function () {
   main_classes[2].style.display = "none";
 deleteSparcCount();
 }, 2000);
 this.removeEventListener("click",classColorChanger);
}

/*
Correct Complexity
*/
else if (index === 24) {

  main_classes[3].style.background = "rgba(11, 165, 11, 0.3)";
  main_classes[3].innerHTML = "Correct Complexity &#10004;";

//Here comes the logic for Complexity

  let subject_line_disappear = setTimeout(function () {
    main_classes[3].style.display = "none";
  deleteSparcCount();
  }, 2000);
  this.removeEventListener("click",classColorChanger);
}
/*
Department
*/
else if (index === 26) {

  main_classes[4].style.background = "rgba(11, 165, 11, 0.3)";
  main_classes[4].innerHTML = "Department &#10004;";
  let subject_line_disappear = setTimeout(function () {
  main_classes[4].style.display = "none";
  deleteSparcCount();
  }, 2000);
  this.removeEventListener("click",classColorChanger);
}
/*
Campaign Type
*/
else if (index === 27) {

  main_classes[5].style.background = "rgba(11, 165, 11, 0.3)";
  main_classes[5].innerHTML = "Campaign Type &#10004;";
  let subject_line_disappear = setTimeout(function () {
  main_classes[5].style.display = "none";
  deleteSparcCount();
  }, 2000);
  this.removeEventListener("click",classColorChanger);
}

/*
Email Contents - number
*/
else if (index === 28) {

  main_classes[6].style.background = "rgba(11, 165, 11, 0.3)";
  main_classes[6].innerHTML = "Number of Email Contents &#10004;";
  let subject_line_disappear = setTimeout(function () {
  main_classes[6].style.display = "none";
  deleteSparcCount();
  }, 2000);
this.removeEventListener("click",classColorChanger);
}


/*
MC Contents - number
*/
else if (index === 30) {

  main_classes[7].style.background = "rgba(11, 165, 11, 0.3)";
  main_classes[7].innerHTML = "Number of MC contents &#10004;";
  let subject_line_disappear = setTimeout(function () {
  main_classes[7].style.display = "none";
  deleteSparcCount();
  }, 2000);
  this.removeEventListener("click",classColorChanger);
}


/*
If recurring
*/
else if (index === 32) {

  main_classes[8].style.background = "rgba(11, 165, 11, 0.3)";
  main_classes[8].innerHTML = "Recurring Check &#10004;";
  let subject_line_disappear = setTimeout(function () {
  main_classes[8].style.display = "none";
  deleteSparcCount();
  }, 2000);
  this.removeEventListener("click",classColorChanger);
}

/*
Dynamic Contents
*/
else if (index === 34) {

  main_classes[9].style.background = "rgba(11, 165, 11, 0.3)";
  main_classes[9].innerHTML = "Dynamic Contents &#10004;";
  let subject_line_disappear = setTimeout(function () {
  main_classes[9].style.display = "none";
  deleteSparcCount();
  }, 2000);
  this.removeEventListener("click",classColorChanger);
}
/*
Litmus
*/
else if (index === 29) {

  main_classes[11].style.background = "rgba(11, 165, 11, 0.3)";
  main_classes[11].innerHTML = "Litmus Tracking &#10004;";
  let subject_line_disappear = setTimeout(function () {
  main_classes[11].style.display = "none";
  deleteSparcCount();
  }, 2000);
  this.removeEventListener("click",classColorChanger);
}

/*
Coupon
*/
else if (index === 31) {

  main_classes[12].style.background = "rgba(11, 165, 11, 0.3)";
  main_classes[12].innerHTML = "Coupon &#10004;";
  let subject_line_disappear = setTimeout(function () {
  main_classes[12].style.display = "none";
  deleteSparcCount();
  }, 2000);
  this.removeEventListener("click",classColorChanger);
}

/*
Subject Lines
*/
else if (index === 38) {

  main_classes[13].style.background = "rgba(11, 165, 11, 0.3)";
  main_classes[13].innerHTML = "Subject Lines &#10004;";
  let subject_line_disappear = setTimeout(function () {
  main_classes[13].style.display = "none";
  deleteSparcCount();
  }, 2000);
  this.removeEventListener("click",classColorChanger);
}

/*End Of Blocks*/

  }
  getComplexityData();//call complexity function
  isCoupon();
}

/*THIS FUNTION controls count of items above sparc items*/
function deleteSparcCount() {
 const minus_final_cound = document.getElementById('numberOfSparcItems');
 minus_final_cound.innerHTML = minus_final_cound.innerText - 1;

   if (minus_final_cound.innerText >= 15) {
     minus_final_cound.style.color = "red";
   }else if (minus_final_cound.innerText >= 10) {
     minus_final_cound.style.color = "orange";
   }else if (minus_final_cound.innerText >= 5) {
     minus_final_cound.style.color = "gold";
   }else if (minus_final_cound.innerText >= 1) {
     minus_final_cound.style.color = "green";
   }else if (minus_final_cound.innerText < 1) {
     minus_final_cound.style.color = "purple";
     //let display_name = document.getElementsByTagName("a")[28].getAttribute("data-displayname");
   minus_final_cound.innerHTML = "If you have all the information from Campaign Manager - <strong>download and open HTML creative</strong>. I will help you to check it also!";

   let say_good_bye = setTimeout(function () {
     minus_final_cound.style.display = "none";
     let aybe_options = document.getElementById("aybe_select_options").selectedIndex = "0";
     clearThemAll()
     /*Here will be full cleaning of whole UL and review ticket will be non-selected*/
   }, 7000);
   }

}

/*Check, if correct complexity was chosen*/
function getComplexityData(){
  //Look for coupon first_div
  is_this_coupon = document.getElementsByClassName("checkbox")[3].checked;
  let complexity_results  = 0;
  Number(complexity_results);
  console.log("I do check if complexity is correct");
  let email_contents_count = document.getElementsByClassName("value inactive ")[28].innerText;
  Number(email_contents_count);
  console.log(email_contents_count);
  if(email_contents_count === ""){
    console.log("this value is empty");
  }else{
    complexity_results = complexity_results + parseInt(email_contents_count);
  }
  let mc_contents_count = document.getElementsByClassName("value inactive ")[30].innerText;
  Number(mc_contents_count);
  console.log(mc_contents_count);
  if(mc_contents_count === ""){
    console.log("MC value is empty");
  }else{
    complexity_results = complexity_results + parseInt(mc_contents_count);
  }

  console.log("Value of complexity after Email Content check: " + complexity_results);
  const create_paragraph = document.createElement("div");
  create_paragraph.setAttribute("id","complexity_paragraph");
  create_paragraph.style.color = "rgba(83, 84, 36, 0.6)";
  create_paragraph.style.fontSize = 10 + "px"
  const get_complexity_item = document.getElementsByClassName("sparcList")[3];
  if (is_this_coupon) {
    console.log("This is at least medium");
    create_paragraph.innerHTML = "(Should be at least Medium or higher)";
    get_complexity_item.appendChild(create_paragraph);
  }
else if(complexity_results === 0){
  console.log("this is Extra Small Campaign");
  create_paragraph.innerHTML = "(Should be Extra Small or higher)";
  get_complexity_item.appendChild(create_paragraph);
}else if (complexity_results <= 2) {
  console.log("this is Small Campaign");
  create_paragraph.innerHTML = "(Should be Small or higher)";
  get_complexity_item.appendChild(create_paragraph);
}else if (complexity_results <= 5) {
    console.log("this is Medium Campaign");
    create_paragraph.innerHTML = "(Should be Medium or higher)";
    get_complexity_item.appendChild(create_paragraph);
}
else if (complexity_results > 5) {
  console.log("This campaign is Large or Extra Large");
  create_paragraph.innerHTML = "(Should be Large or Extra Large or higher)";
  get_complexity_item.appendChild(create_paragraph);
}


/*Do not forget to write time dotation*/
}

function isCoupon() {
  const get_coupon_info = document.getElementsByClassName('checkbox ')[3].checked;
  //12

  const create_paragraph = document.createElement("div");
  create_paragraph.setAttribute("id","coupon_id");
  create_paragraph.style.color = "rgba(83, 84, 36, 0.6)";
  create_paragraph.style.fontSize = 10 + "px"
  const get_complexity_item = document.getElementsByClassName("sparcList")[12];
  if(get_coupon_info === true){
    create_paragraph.innerHTML = "(Careful, this is COUPON!)";
    get_complexity_item.appendChild(create_paragraph);
  }else{
    create_paragraph.innerHTML = "(This is not a coupon!)";
    get_complexity_item.appendChild(create_paragraph);
  }
}
