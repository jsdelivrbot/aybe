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
function review_ticket() {

  let checkInput = "<input type='checkbox' class='reviewTicketCheckBox'>";
  const getMainWindow = document.getElementById("window_content");
  //Create main container
  const reviewWindow = document.createElement("div");
  reviewWindow.setAttribute("id","reviewWindow");
  getMainWindow.appendChild(reviewWindow);

  //Additional
  const array_of_items = ["<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Country <br><a class='wiki_aybe' target='_blank' href='https://wiki.vip.corp.ebay.com/display/COEDM/9.+Campaigns'>Wiki</a>","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Admin Campaign <br> <a class='wiki_aybe' target='_blank' href='https://wiki.vip.corp.ebay.com/display/COEDM/Campaign+Types'>Wiki</a>","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Requested type <br><a class='wiki_aybe' target='_blank' href='https://wiki.vip.corp.ebay.com/display/COEDM/9.+Campaigns'>Wiki</a>","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Correct Complexity <br><a href='https://wiki.vip.corp.ebay.com/pages/viewpage.action?pageId=352537594' target='_blank' class='wiki_aybe'>Wiki</a>","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Department","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Campaign Type <br> <a class='wiki_aybe' target='_blank' href='https://wiki.vip.corp.ebay.com/display/COEDM/Campaign+Types'>Wiki</a>","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Number of Email Contents","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> MC Contents <br> <a class='wiki_aybe' href='https://wiki.vip.corp.ebay.com/display/COEDM/Campaign+Building+in+MC' target='_blank'>Wiki</a>","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> If Recurring (check recurrence frequency)","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Dynamic Contents <br><a class='wiki_aybe' target='_blank' href='https://wiki.vip.corp.ebay.com/display/COEDM/Dynamic+Fields'>Wiki</a>","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Subject Line Options <br> <a class='wiki_aybe' target='_blank' href='https://wiki.vip.corp.ebay.com/pages/viewpage.action?pageId=368165102'>Wiki</a>","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Litmus Tracking <br><a class='wiki_aybe' target='_blank' href='https://wiki.vip.corp.ebay.com/display/COEDM/Litmus+Testing'>Wiki</a>","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Coupon <br> <a class='wiki_aybe' target='_blank' href='https://wiki.vip.corp.ebay.com/display/COEDM/Coupons#e9790545f13f47c6b854bb1d5b732f08'>Wiki</a>","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Subjet Lines <br> <a target='_blank' href='https://wiki.vip.corp.ebay.com/pages/viewpage.action?pageId=417917662' class='wiki_aybe'>Wiki</a>","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Description","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Personalized Fields","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Attachments"];
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
  reviewWindow.appendChild(create_ul);
  //END of Additional
  checkBoxItemCare()
}
function checkBoxItemCare() {
  const reviewCheckBoxes = document.getElementsByClassName("reviewTicketCheckBox");
  const lengthOfCheckBoxes = reviewCheckBoxes.length;
  console.log(reviewCheckBoxes);
  Array.from(reviewCheckBoxes).forEach(function(element) {
      element.addEventListener('click', itemKiller);
    });
    function itemKiller(){
      this.parentElement.style.background = "#51df5f5e";
      this.checked = true;
    let this_item = this;
    lengthOfCheckBoxes - 1;
      setTimeout(function () {
        this_item.parentElement.remove();
      }, 1000);
console.log(lengthOfCheckBoxes);
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
  // const hide_review_ticket_data = document.getElementById("review_ticket_data").remove();
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
      clearThemAll();
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
  const selectFirstOption = document.getElementById('aybe_select_options').options;
  console.log(selectFirstOption);
    selectFirstOption.selectedIndex = 0;

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
 const ul_li = ".reviewTicketCheckBox{margin:0;vertical-align:middle;position:absolute;left:23px;}#sparc_list li{text-align: center;font-weight: 900;font-size: 11px;padding: 4px;margin-bottom: 3px;cursor: pointer;height: 30px;border: 2px solid #0bb1f1;margin-top: 3px;} ul#sparc_list{list-style-type:none;padding: 0px;}";
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
