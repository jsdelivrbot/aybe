/*Init function*/
(function() {
 'use strict';
 /*
============*SPARC*==============
 Functions related to SPARC Only
============*SPARC*==============
 */
//preventAnyClicks();//Disallow any unwanted clicks
loadStyles(); //load Styles first
createWindow(); // Load window after
sparcInputsController() // This function controlls all inputs

/*
============*SPARC*==============
Functions related to SPARC Only
============*SPARC*==============
*/
}());
/*
Protects DEV agains anwanted clicks
*/
function preventAnyClicks(){
 console.log("This document is click-prevented");
 let prevent = document;
prevent.addEventListener("click",function(e){
 e.preventDefault();
 console.log("prevented clicks");
});
}
/*
============================
============================
=====SPARC CONTROLLERS======
============================
============================
*/
/*
Controller of inputs
*/
function sparcInputsController(){
 'use strict';
 const aybe_select = document.getElementById('aybe_select_options');
 aybe_select.oninput = function(){
   let results = aybe_select.options[aybe_select.options.selectedIndex].value;
   console.log(results);
   if (results === "get_localstorage_data"){
   loadDataAndSave();
   mainDebugger()
   }else if(results === "read_file"){
     readData();
     doubleDivPolice();
     mainDebugger()
   }else if(results === "review_ticket"){
review_ticket();
mainDebugger()
   }else if (results === "do_nothing") {
     clearThemAll();
     mainDebugger()
   }else if (results === "check_assets") {
     checkAssets();
   }
 }
}

/*
Loads all the data and save them into local storage
This feature works only on input change.
This function is no longer usable
*/
function dataLoader(){
 const domValues = document.querySelectorAll("span.value.inactive");
 let arr = [];
 storage = window.localStorage;
 for(let i = 0;i<domValues.length;i++){
   //const set_item = localStorage.setItem(i,(domValues[i].innerText).replace(/[\n\t\r]/g,'').trim());
const set_item = localStorage.setItem(i + (domValues[i].parentElement.parentElement.parentElement.childNodes[1].textContent).replace(":","").trim(),(domValues[i].innerText).replace(/[\n\t\r]/g,'').trim());
 }
}

function loadDataAndSave(){
 const ticket_name = document.getElementById("project-name-val").textContent;
 const ticket_url = window.location.href;
 const domValues = document.querySelectorAll("span.value.inactive");
 let arr = [];
 for (let i = 0;i<domValues.length;i++){
   arr.push((domValues[i].innerText).replace(/[\n\t\r]/g,'').trim());
 }
 arr.push(ticket_name);
 arr.push(ticket_url);
let data  = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(arr));

     let a       = document.createElement('a');
     a.href      = 'data:' + data;
     a.download  = ticket_name + '.txt';
     a.innerHTML = '<strong id="download_field" style="text-align:center;display:block;text-decoration:underline">Download</strong>';
     document.getElementById('window_content').appendChild(a);
}

function readData() {
 const input = '<input type="file" id="emarsys_files" class="shit_controllor" />';
 const createDiv = document.createElement("div");
 createDiv.setAttribute("id","upload_div");
 createDiv.innerHTML = input;
 document.getElementById('window_content').appendChild(createDiv);
 handleFiles();
}

function handleFiles(){
 var fileInput = document.getElementById('emarsys_files');
         var fileDisplayArea = document.getElementById('window_content');

         fileInput.addEventListener('change', function(e) {
             var file = fileInput.files[0];
             var textType = /text.*/;

             if (file.type.match(textType)) {
                 var reader = new FileReader();

                 reader.onload = function(e) {

                     let cokoliv = reader.result;
                     let final_string = cokoliv.replace(/\"/g, "");
                     let arr_of_text = final_string.split(",");
                     console.log(arr_of_text);
                     for(let i = 0;i<arr_of_text.length;i++){
                       const local_storage = localStorage.setItem(i,arr_of_text[i]);
                     }
                     const kill_loader = document.getElementById("emarsys_files");
                     kill_loader.style.display = "none";
                     const confirm_load = document.getElementById("dialog_space");
                     confirm_load.innerHTML = "<strong style='color:green'>Load Went successfully</strong>"
                 }

                 reader.readAsText(file);
             } else {
               const confirm_load = document.getElementById("dialog_space");
               confirm_load.innerHTML = "<strong style='color:red'>MEH! Something went wrong. Contact Jaroslav!</strong>"
             }
         });
}

function doubleDivPolice(){
 const shit_controllor = document.getElementsByClassName("shit_controllor");
 while (shit_controllor.length > 1) {
   const kill_div = document.getElementById("upload_div").remove();
 }
}




/*
Triggers event if "review ticket" is selected.
This funciton reflects full process from EM team
We check Country, Admin Campaign, Request Type, Correct Complexity, Department, Campaign Type, Number of Email Contents, Mc Contents,
If Recurring, Dynamic contents, Subject Line Options, Litmus Tracking, Coupon, Subject Lines, Description, Perso Fiels, Attachments, Zip File,
Do I have all the info I need from Campaign manager?
*/
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


/*
============================
============================
====ASSET CHECKER MODULE====
============================
============================
*/
function checkAssets(){
  console.log("Checking Assets");
  tutorialMessage("Please, look at highlighted links in HTML file. <br> <span style='color:green'>Green color</span> = good<br> <span style='color:orange'>Orange</span> color = warning<br><span style='color:red'>Red</span> color - Almost 100% problem");
  checkAllTheLinks();
}
/*This function checks forget
1. links, which does end with .***
2. links, which does not end with "/" in case there is no .com, .eu etc which was the first rule.
*/
function checkAllTheLinks() {
  const all_links = document.getElementsByTagName('a');
  const arr_links = [];
  const valid_links = [];
  const invalid_links = [];
  const empty_links = [];
  for (var i = 0; i < all_links.length; i++) {
  arr_links.push(all_links[i].href);
  //this condition catches all the domain extensions, which are valid.
  //d
  if(((arr_links.toString()).endsWith(".com"))
|| (arr_links.toString().endsWith('/'))
|| (arr_links.toString().endsWith('.html'))
|| (arr_links.toString().endsWith('.com.au'))
|| (arr_links.toString().endsWith('.be'))
|| (arr_links.toString().endsWith('.ca'))
|| (arr_links.toString().endsWith('.fr'))
|| (arr_links.toString().endsWith('.com.hk'))
|| (arr_links.toString().endsWith('.in'))
|| (arr_links.toString().endsWith('.com.m'))
|| (arr_links.toString().endsWith('.nl'))
|| (arr_links.toString().endsWith('.ph'))
|| (arr_links.toString().endsWith('.pl'))
|| (arr_links.toString().endsWith('.com.sg'))
|| (arr_links.toString().endsWith('.es'))
|| (arr_links.toString().endsWith('.vn'))
|| (arr_links.toString().endsWith('.co.uk'))
|| (arr_links.toString().endsWith('.com'))
|| (arr_links.toString().endsWith('.com.tw'))
|| (arr_links.toString().endsWith('.com.sea'))
|| (arr_links.toString().endsWith('.it'))
|| (arr_links.toString().endsWith('.co.jp'))
|| (arr_links.toString().endsWith('.co.th'))
|| (arr_links.toString().endsWith('.co.id'))
|| (arr_links.toString().endsWith('.cn'))
|| (arr_links.toString().endsWith('.de'))
|| (arr_links.toString().endsWith('.co.il'))
|| (arr_links.toString().endsWith('.hk'))
|| (arr_links.toString().endsWith('.ch'))
|| (arr_links.toString().endsWith('.at'))
|| (arr_links.toString().endsWith('.ie'))
)
  {
    valid_links.push(arr_links[i]);
    all_links[i].style.border = "2px dashed green";

  }else if (! (arr_links.toString().endsWith('.html')) && !(arr_links.toString().endsWith('#'))) {
    invalid_links.push(arr_links[i]);
    all_links[i].style.border = "2px dashed orange";
  }else if(arr_links.toString().endsWith("#")){
    empty_links.push(arr_links[i]);
    all_links[i].style.border = "2px dashed red";
    all_links[i].style.background = "red";
  }
  }
  console.log("Valid Links");
  console.log(valid_links);
  logMessage("<span style='color:green'>I found " + valid_links.length + " links, which are OK!</span>");
  console.log("Invalid Links");
  console.log(invalid_links);
  logMessage("<span style='color:orange'>I found " + invalid_links.length + " links, which might have problem with backslash!</span>");
  console.log("Empty Links");
  console.log(empty_links);
  logMessage("<span style='color:red'>I found " + empty_links.length + " links, which are empty!</span>");
  console.log("Full Array");
  console.log(arr_links);
}
/*
============================
============================
=====WINDOW CONTROLLERS=====
============================
============================
*/
/*
Appends aYbe window to the first div in DOM.
*/
function createWindow(){
const first_div = document.getElementsByTagName("div")[0];
const create_div = document.createElement("div");
create_div.setAttribute("class","ahojky");
create_div.setAttribute("id","window_content");
first_div.appendChild(create_div);
aybe();


// const open_close_window = document.createElement("div");
// open_close_window.setAttribute("id","open_close");
// open_close_window.innerHTML = "<span class='open_close_class'>&#8645;</span>";
// first_div.appendChild(open_close_window);
}
/*Setting up the aYbe*/
function aybe(){

 const option_do_noting = "<option value='do_nothing'>--</option>";
 const option_review_ticket = "<option value='review_ticket' id='review_ticket_data'>Review Ticket</option>";
 const option_get_sparc_data = "<option value='get_localstorage_data' id='download_ticket_data'>Download Ticket Data</option>";
 const option_delete_sparc_data = "<option value='delete_sparc_data'>DELETE This Data</option>";
 const option_load_read_file = "<option value='read_file' id='load_to_sparc'>Load Sparc To Emarsys</option>";
 const option_check_assets = "<option value='check_assets' id='asset_checker'>Check This HTML</option>";
 const option_space = document.createElement("div");
 option_space.setAttribute("class","options_of_aybe");
 option_space.setAttribute("id", "id_of_options")
 option_space.innerHTML = "<select id='aybe_select_options'>" + option_do_noting + option_review_ticket + option_get_sparc_data + option_load_read_file+ option_check_assets+"</select>";
 const window_content = document.getElementById("window_content");
 window_content.appendChild(option_space);
 optionController();
 aybeSwitcher();
}
/*
Displays options from aybe() function according domain name
*/
function optionController(){
 const domain_path = window.location.href;
 /*IF EMARSYS*/
 if(domain_path.match(/broadcast/g)){
   const hide_download_ticket_option = document.getElementById("download_ticket_data").remove();
   const hide_review_ticket_data = document.getElementById("review_ticket_data").remove();
   const hide_check_assets = document.getElementById("asset_checker").remove();
   displayMessages();
   /*IF SPARC*/
 }else if (domain_path.match(/helpdesk/g) || domain_path.match(/127/g)) {
   const read_file = document.getElementById("load_to_sparc").remove();
   const hide_check_assets = document.getElementById("asset_checker").remove();
 }
/*IF email assets*/
 else if (domain_path.match(/file/g)) {
   const read_file = document.getElementById("load_to_sparc").remove();
   const hide_download_ticket_option = document.getElementById("download_ticket_data").remove();
   const hide_review_ticket_data = document.getElementById("review_ticket_data").remove();
 }
}

function displayMessages() {
 const main_window = document.getElementById("window_content");
 let dialog_div = document.createElement("div");
 dialog_div.setAttribute("id","dialog_space");
 main_window.appendChild(dialog_div);
 if (localStorage.getItem("44") === null){
   dialog_div.innerHTML = "No ticket connected!";
 }else{
   dialog_div.innerHTML = "<a target='_blank' href='"+localStorage.getItem("45").replace(/]/g,"")+"'>Loaded ticket: "+ localStorage.getItem("44")+"</a>";
 }


}
function aybeSwitcher(){
let select_window = document.getElementById('window_content');
select_window.style.right = -215+"px"
const toggle_div = document.createElement("div");
toggle_div.setAttribute("id","jump_window");
toggle_div.innerHTML = "&Lang;";
select_window.appendChild(toggle_div);
toggle_div.addEventListener("click",window_switcher);
let counter = 0;
function window_switcher(){
  counter += 1;
  console.log(counter);
  if (counter === 1) {
    toggle_div.innerHTML = "&Rang;";
    select_window.style.right = 0 + "px";
select_window.style.background = "white";
  }else if(counter === 2){
    toggle_div.innerHTML = "&Lang;";
    select_window.style.right = -215 + "px";
    select_window.style.background = "rgba(0, 0, 0, 0.2)";
      counter = 0;
  }
}
}

function clearThemAll() {
  console.log("clearing everything");
  let get_info = document.getElementById('window_content').childNodes;
  console.log(get_info);
  //remove all the children without first two children
let length_of_get_info = get_info.length;
  for (let i = length_of_get_info -1 ;i>=2;i--){
     get_info[i].remove();
    console.log(i);
  }
let white_everything = document.getElementsByClassName('value inactive');
  for (let f = 0;f<white_everything.length;f++){
    white_everything[f].style.background = "white";
    white_everything[f].style.fontWeight = "normal";
  }
  let white_everything2 = document.getElementsByClassName('mod-content');
    for (let k = 0;k<white_everything2.length;k++){
      white_everything2[k].style.background = "white";
      white_everything2[k].style.fontWeight = "normal";
    }
}
/*Here are full styles of aYbe, nowhere else can be styles written*/
function loadStyles(){

 const style_app = document.createElement("style");
   console.log(style_app);
 let first_div = document.getElementsByTagName("div")[0];
 const option_styles = "#id_of_options select{display:block;margin: 0 auto;}";
 const select_styles = "#aybe_select_options{padding: 4px;border-radius: 6px;color: #545454 !important;font-weight: bold;border: 2px solid #0bb1f1;}";
 const open_close = "#open_close {right: 0px;width: 200px;position: fixed;text-align: center;padding: 20px;top: 65px;color: red;font-size: 20px;font-weight: bold;}.open_close_class{border: 2px solid black;padding: 6px;border-radius: 50%;color: red;border-color: #ff0303;cursor: pointer;z-index: 9999;}"
 const dialog_window = "#dialog_space{font-size:11px;color:green;display:block;text-align:center;font-weight:bold}";
 const ul_li = "#sparc_list li{text-align: center;font-weight: 900;font-size: 11px;padding: 4px;margin-bottom: 3px; border-radius: 6px; cursor: pointer;background: rgba(214, 208, 208, 0.3);} ul#sparc_list{list-style-type:none;padding: 0px;}";
 const sparc_number = "#numberOfSparcItems{text-align:center}";
 const jump_window = "#jump_window{position: absolute;top: 22px;left: 8px;font-size: 18px;font-weight: bold;cursor: pointer;color: #32b6f7;}";
 const wiki_styles = ".wiki_aybe{font-size:8px;text-transform:uppercase;color:grey;}";
 const custom_aybe_scrollbar = "#window_content::-webkit-scrollbar{width:8px;background-color: white;}#window_content::-webkit-scrollbar-thumb{background-color: #e53238;}#window_content::-webkit-scrollbar-track{-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);background-color: #F5F5F5;}"
 const log_messages = ".error_message_class{text-align:left;}.tutorial_message_class{text-align:left;border-bottom:1px solid black;padding:0px;font-size:11px;}.tutorial_headline{font-weight:bold;font-size:13px;color:#132456;font-style:italic;}";

 style_app.innerHTML = log_messages+custom_aybe_scrollbar+ wiki_styles+jump_window+sparc_number+ul_li+dialog_window+open_close+select_styles + ".ahojky{overflow-y: scroll;overflow-x: hidden;max-height:350px;box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);border-radius:6px;padding:20px;position:fixed;top:0px;right:0px;width:200px;height:auto;border:3px solid rgba(255,255,255,0.1);background-color:rgba(255,255,255,0.4);z-index:9999}.ahojky:hover{background-color:rgba(255,255,255,0.8);}" + option_styles;

if(typeof first_div === "undefined"){
  first_div = document.getElementsByTagName("body")[0];
}
console.log(first_div);
 first_div.appendChild(style_app);
}



/*This function is debugger*/
function mainDebugger(){

}
/*This function stores final message to EM*/
function logMessage(message){
  get_window = document.getElementById("window_content");
  create_ul = document.createElement("ul");
  create_ul.setAttribute("class","error_message_class");
  get_window.appendChild(create_ul);
  create_li = document.createElement("li");
  create_li.setAttribute("class","log_li");
  create_li.innerHTML = message;
  create_ul.appendChild(create_li);

}
function tutorialMessage(message){
  get_window = document.getElementById("window_content");
  create_ul = document.createElement("ul");
  create_ul.setAttribute("class","tutorial_message_class");
  get_window.appendChild(create_ul);
  create_li = document.createElement("div");
  create_li.setAttribute("class","log_li");
  create_li.innerHTML = "<h3 class='tutorial_headline'>What to do...</h3>"+message;
  create_ul.appendChild(create_li);
}
