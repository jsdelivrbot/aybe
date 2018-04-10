/*
VERSION 1.0.5 (Planning ticket added);
*/
/*GLOBAL VARIABLES*/
let alertArray =[];
/*Init function*/
(function() {
 'use strict';
 /*aYbe Appereance controller*/
const getWindowHref = window.location.href.toString();
if (getWindowHref.match("file") || getWindowHref.match("CampaignSetup") || getWindowHref.match("ViewEbayRequestEm") || getWindowHref.match("broadcast") || getWindowHref.match("teamPlanning")){
  loadStyles(); //load Styles first
  createWindow(); // Load window after
  sparcInputsController(); // This function controlls all inputs
}else {
  console.log("aYbe is can not work for this site.");
}

}());
/*
============================
============================
=====SPARC CONTROLLERS======
============================
============================
*/
/*
Controller of main selection input
*/
function sparcInputsController(){
 'use strict';
 const aybe_select = document.getElementById('aybe_select_options');
 aybe_select.oninput = function(){
   let results = aybe_select.options[aybe_select.options.selectedIndex].value;
   if (results === "get_localstorage_data"){
   loadDataAndSave();
   }else if(results === "read_file"){
     readData();
     doubleDivPolice();
   }else if(results === "review_ticket"){
review_ticket();
   }else if (results === "do_nothing") {
     clearThemAll();
   }else if (results === "check_assets") {
     checkAssets();
   }else if (results === "mc_helper") {
     message_center_helper();
   }else if (results === "first_qa") {
     firstQA();
   }else if (results === "planning_ticket") {
checkPlanningTicket();
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


function firstQA() {
  let checkInput = "<input type='checkbox' class='reviewTicketCheckBox'>";
  const getMainWindow = document.getElementById("window_content");
  //Create main container
  const reviewWindow = document.createElement("div");
  reviewWindow.setAttribute("id","reviewWindow");
  getMainWindow.appendChild(reviewWindow);

  //Additional
  const array_of_items = ["<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Read brief in SPARC <br>","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Auto filter recipients<br> (if Admin, to be unticked)","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Review import file and its columns","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> From And Reply Address <br>","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Subject line & Preheader","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Footer (if admin campaign = admin footer)","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Layout Desktop (Mobile)<br>(if multiple conditional content, with ignore conditions)","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Personalized fields populated with real data<br>","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Links: for T&C, Main CTA <br>","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Conditional split % <br>and condition sense check"];
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
  checkBoxQA();
}
function checkBoxQA() {
  const reviewCheckBoxes = document.getElementsByClassName("reviewTicketCheckBox");
  let lengthOfCheckBoxes = reviewCheckBoxes.length;
  Array.from(reviewCheckBoxes).forEach(function(element) {
      element.addEventListener('click', itemKiller);
    });
    function itemKiller(){
      this.parentElement.style.background = "#51df5f5e";
      this.checked = true;
    let this_item = this;
    let final_length = lengthOfCheckBoxes -= 1;
    this.removeEventListener("click",itemKiller);
      setTimeout(function () {
        this_item.parentElement.remove();
      }, 1000);
if (final_length <= 0){
  tutorialMessage("Perfect! It seems QA is done!");
  setTimeout(function () {
    clearThemAll();
  }, 5000);
}
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
  alertWindow();
  modalWindowPreparation();
  let checkInput = "<input type='checkbox' class='reviewTicketCheckBox'>";
  const getMainWindow = document.getElementById("window_content");
  //Create main container
  const reviewWindow = document.createElement("div");
  reviewWindow.setAttribute("id","reviewWindow");
  getMainWindow.appendChild(reviewWindow);

  //Additional
  const array_of_items = ["<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Country <br><a class='wiki_aybe' target='_blank' href='https://wiki.vip.corp.ebay.com/display/COEDM/9.+Campaigns'>Wiki</a>","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Admin Campaign <br> <a class='wiki_aybe' target='_blank' href='https://wiki.vip.corp.ebay.com/display/COEDM/Campaign+Types'>Wiki</a>","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Requested type <br><a class='wiki_aybe' target='_blank' href='https://wiki.vip.corp.ebay.com/display/COEDM/9.+Campaigns'>Wiki</a>","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Correct Complexity <br><a href='https://wiki.vip.corp.ebay.com/pages/viewpage.action?pageId=352537594' target='_blank' class='wiki_aybe'>Wiki</a>","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Department","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Campaign Type <br> <a class='wiki_aybe' target='_blank' href='https://wiki.vip.corp.ebay.com/display/COEDM/Campaign+Types'>Wiki</a>","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Number of Email Contents","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> MC Contents <br> <a class='wiki_aybe' href='https://wiki.vip.corp.ebay.com/display/COEDM/Campaign+Building+in+MC' target='_blank'>Wiki</a>","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> If Recurring (check recurrence frequency)","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Dynamic Contents <br><a class='wiki_aybe' target='_blank' href='https://wiki.vip.corp.ebay.com/display/COEDM/Dynamic+Fields'>Wiki</a>","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Subject Line Options <br> <a class='wiki_aybe' target='_blank' href='https://wiki.vip.corp.ebay.com/pages/viewpage.action?pageId=368165102'>Wiki</a>","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Litmus Tracking <br><a class='wiki_aybe' target='_blank' href='https://wiki.vip.corp.ebay.com/display/COEDM/Litmus+Testing'>Wiki</a>","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Coupon <br> <a class='wiki_aybe' target='_blank' href='https://wiki.vip.corp.ebay.com/display/COEDM/Coupons#e9790545f13f47c6b854bb1d5b732f08'>Wiki</a>","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Subjet Lines <br> <a target='_blank' href='https://wiki.vip.corp.ebay.com/pages/viewpage.action?pageId=417917662' class='wiki_aybe'>Wiki</a>","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Description","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Personalized Fields","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Attachments","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> ZIP File Check","<input type='checkbox' name='reviewTicketCheckBox' class='reviewTicketCheckBox'> Do I have all?"];
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
  /*------->>>> Funciton dependencies*/
  checkBoxItemCare(); // Check Box is clicked;
  automatizedTicketReview();
}
function checkBoxItemCare() {
  const reviewCheckBoxes = document.getElementsByClassName("reviewTicketCheckBox");
  let lengthOfCheckBoxes = reviewCheckBoxes.length;
  Array.from(reviewCheckBoxes).forEach(function(element) {
      element.addEventListener('click', itemKiller);
    });
    function itemKiller(){
      this.parentElement.style.background = "#51df5f5e";
      this.checked = true;
    let this_item = this;
    let final_length = lengthOfCheckBoxes -= 1;
    this.removeEventListener("click",itemKiller);
      setTimeout(function () {
        this_item.parentElement.remove();
      }, 1000);
if (final_length <= 0){
  tutorialMessage("Good Job! Did you check also assets? I can help you with that!");
  setTimeout(function () {
    clearThemAll();
  }, 5000);
}
    }

}

function automatizedTicketReview() {

//IF coupon
  (function() {
    'use strict';
    const couponCheck = document.getElementsByClassName("label-container"); //coupon
    const couponCheckInput = document.getElementById("emCoupon").children[0].checked;//coupon
    const mcCheckInput = document.getElementById("emEmail");//Message Center requested
    const mcExpirationDate = document.getElementById("emEmail");//Message Center requested
    for (var i = 0; i < couponCheck.length; i++) {
      if ((couponCheck[i].innerText.trim() === "Coupon") && (couponCheckInput === true)) {
      alertThrower("Careful, this is coupon! This Campaign will have Tollgate and needs to be scheduled first 5% (or % which is specified by CM) after approval.");
    }
    }
  }());
  //MC Expiration Date if requested
  (function() {
    'use strict';
    const getMCValue = document.querySelector("[field-name='emEmail']");
    const getMCExpiration = document.querySelector("[field-name='emExpiryDate']");
if (getMCValue.getAttribute("field-value") !== "" && (getMCExpiration.getAttribute("field-value") === "")){
alertThrower("MC is requested, but expiration date is missing");
}
  }());
  //Are Assets Missing?
  (function() {
    'use strict';
    const getAttachmentParentElement = document.getElementById("file_attachments").children.length;
    if(getAttachmentParentElement < 1){
      alertThrower("Assets are missing!");
    }
  }());
  //Is that a Admin Campaign?
  (function() {
    'use strict';
const isAdmin = document.querySelector("[name='adminCampaign']").checked;
if (isAdmin === true) {
  alertThrower("This is admin campaign - Auto Filter Recipients checkbox needs to be unticked in Emarsys and also correct Admin footer to be chosen");
}
  }());
  //Is Complexity ok?
  //Litmus Tracking
  (function() {
    'use strict';
const isLitmus = document.querySelector("[name='emLitmusTracking']").checked;
if (isLitmus === true) {
  alertThrower("Litmus is checked, please, when building campaign, follow <a href='https://wiki.vip.corp.ebay.com/display/COEDM/LITMUS+Tracking+in+Email+Campaigns' target='_blank'>Wiki for Emarsys</a>,<a href='https://wiki.vip.corp.ebay.com/display/COEDM/LITMUS+Tracking+in+MC+Campaigns' target='_blank'>Wiki for MC(if requested)</a>.");
}
  }());
  //if recurring - naming convention
  (function() {
    'use strict';
    const isReccuring = document.querySelector("[field-name='emRequestType']").getAttribute("field-value-name");
    if (isReccuring !== "Ad-hoc") {
      alertThrower("This is Recurring campaign. 2 emarsys IDs need to be created. 1st Adhoc one with 'AH' in ID name and 2nd with 'RE' in ID name.")
    }
  }());
}

function checkPlanningTicket() {
//fix disappearing


const getAllCancelled = document.getElementsByClassName("ticket-status");
for (var i = 0; i < getAllCancelled.length; i++) {
  console.log(getAllCancelled[i].innerHTML);
  if(getAllCancelled[i].innerHTML === "Cancelled"){
    getAllCancelled[i].parentElement.parentElement.parentElement.style.display = "none";
  }
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
  tutorialMessage("Please, look at highlighted links in HTML file. <br> <span style='color:green'>Green color</span> = good<br> <span style='color:purple'>Purple color</span> = WRONG!<br><span style='color:orange'>Orange</span> color = warning<br><span style='color:red'>Red</span> color - Almost 100% problem<br><span style='color:violet'>Violet</span> color - Read at <a style='border:0px solid' href='https://wiki.vip.corp.ebay.com/pages/viewpage.action?pageId=204420980' target='_blank'>Wiki</a>");
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
  const targets = [];
  const noTargets = [];
  const whitelists = [];
  const deadAttributes = [];

  let counter_for_target = 0;
  let target_index_finder = 0;
  let target_index_array = [];
  let notarget_counter = 0;
  for (var i = 0; i < all_links.length; i++) {
  arr_links.push(all_links[i].href);
//  deadAttributes.push(all_links[i].attributes);
  for (var k = 0; k < all_links[i].attributes.length; k++) {
  deadAttributes.push(all_links[i].attributes[k].value);
  }

  if (all_links[i].hasAttribute("target")) {
    targets.push(all_links[i].getAttribute("target"));
  }
  if (all_links[i].hasAttribute("target") === false) {
    notarget_counter ++;
    noTargets.push("<br>("+(notarget_counter -1)+") "+all_links[i].href);
  }
  if(!((all_links[i].href).toLowerCase().match("ebay"))){
    whitelists.push(all_links[i].href);
  }
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
  /*Check for missing _blank*/
  /*Also check for links that needs to be whitelisted*/

  for (var i = 0; i < targets.length; i++) {
    target_index_finder++;

    if(!(targets[i].toString().match("_blank"))){
      counter_for_target++;
      target_index_array.push(target_index_finder -1);
    }
  }
  let white_listed_strings = "";
  if (whitelists.length>0) {

    for (var i = 0; i < whitelists.length; i++) {
      white_listed_strings += "<span style='color:black;font-weight:900'> ("+(i + 1)+ ") </span>" + whitelists[i] + "<br><br>";
    }
  }
  /*How Many deadAttributes*/
  let invalidAttributes = 0;
  for (var i = 0; i < deadAttributes.length; i++) {
    if(deadAttributes[i] === "#"){
      invalidAttributes++;
    }
  }
  noTargets.shift();
  logMessage("<span style='color:blue'>I found " + all_links.length + " links in total!</span>");
  logMessage("<span style='color:purple'>I found " + (counter_for_target - 1) + " link/s that does not have target _blank! And "+((all_links.length - targets.length)-1 )+" completely missing target!</span><br><span style='color:grey;font-size:9px;word-wrap: break-word;'>"+noTargets.toString()+"</span>");
  logMessage("<span style='color:green'>I found " + valid_links.length + " links, which are OK!</span>");
  logMessage("<span style='color:orange'>I found " + invalid_links.length + " links, which might have problem with backslash!</span>");
  logMessage("<span style='color:red'>I found " + empty_links.length + " links, which are empty!</span>");
 logMessage("<span style='color:violet'>I found " + whitelists.length + " links to be whitelisted!</span><br><span style='color:grey;font-size:9px;word-wrap: break-word;'>"+white_listed_strings+"</span>");
logMessage("<span style='color:gold'>I found " + invalidAttributes + " invalid attributes - they are empty or contains '#'");
}
/*
============================
============================
===Message Center MODULE====
**MC HELPER**
**SETUP PROTECTION**
============================
============================
*/
function message_center_helper() {
create_message_center_window();
}
function create_message_center_window() {

const getMainWindow = document.getElementById("window_content");
const createDiv = document.createElement("div");
createDiv.setAttribute("id","message_center_helper");
getMainWindow.appendChild(createDiv);

(function() {
  'use strict';
  const createInput = document.createElement("input"); // Creates input for MC helper
  createInput.setAttribute("id","mc_input");
  createInput.placeholder = "Insert .dat file here...";
  createDiv.appendChild(createInput);
  const createAlertBox = document.createElement("div");
  createAlertBox.setAttribute("id","alert_paragraph_jarda");
  createDiv.appendChild(createAlertBox);
  const createCopyButton = document.createElement("button");
  createCopyButton.setAttribute("id","copy_button");
  createCopyButton.innerHTML = "Copy";
  createDiv.appendChild(createCopyButton);
  const createOutputDiv = document.createElement("div");
  createOutputDiv.setAttribute("id", "outputbox");
  createOutputDiv.innerHTML = "";
  createDiv.appendChild(createOutputDiv);
  mc_helper_logic();
}());
}
function mc_helper_logic() {
const mc_list = document.getElementById("distFileID"); //selects options in MC
const mc_length = mc_list.length; //gets options in MC length
const mc_text = mc_list.options[mc_list.selectedIndex].text; //Loads text at selected index
/*Search for the dat file logic*/
const search_field = document.getElementById("mc_input");
/*
Couple of logs;
*/
search_field.oninput = function(){
lookForSimilarFiles();
     const alert_paragraph_jarda = document.getElementById("alert_paragraph_jarda").innerHTML = " ";
    let counter = 0;
    let search_string = search_field.value;

  for(i = 0;i<mc_length;i++){
      counter ++;
    let mc_value = mc_list.options[i].text;
    if(mc_value == search_field.value.toString().trim()){
        mc_list.selectedIndex = counter - 1;
        alert_paragraph_jarda = document.getElementById("alert_paragraph_jarda").innerHTML = "<hr><span style='color:green;font-weight:bold;'>I found it! YaY!</span>";
        break;

    }
     else if((search_field.value).length <= 0){
             alert_paragraph_jarda = document.getElementById("alert_paragraph_jarda").innerHTML = "<hr><span style='color: rgb(112, 94, 1);font-weight:bold;'>You forgot to fill up .dat file!</span>";
} else if (counter >= mc_length) {
  alert_paragraph_jarda = document.getElementById("alert_paragraph_jarda").innerHTML = "<hr><span style='color: rgb(112, 94, 1);font-weight:bold;'>Nah, I am blind I guess :-(</span>";
 }

}

};
function lookForSimilarFiles() {
let final_pattern = /,/gi;
let arr_for_indexes = [];
let counter_for_index = 0;
const outputwindow = document.getElementById("outputbox");
let regpattern = new RegExp(search_field.value,"g");

for (let f = 0; f < mc_length; f++) {
  counter_for_index++;
  if ((mc_list[f].text).match(regpattern)) {
      arr_for_indexes.push(mc_list[counter_for_index-1].innerText);

  }else {
    console.log("this index has nothing!");
  }
}

let stringFromArray = arr_for_indexes.toString().replace(final_pattern,"<br>");
outputwindow.innerHTML = stringFromArray;
const text_for_clipboard = document.getElementById("outputbox");
const copy_results = document.getElementById("copy_button");
copy_results.onclick = function(){
const range = document.createRange();
 let selection = window.getSelection();
 selection.removeAllRanges();
 range.selectNodeContents(text_for_clipboard);
 selection.addRange(range);
 document.execCommand('copy');
 copy_results.innerHTML = "Copied to clipboard!"
}
}

}//Main Function ends


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
const first_div = document.getElementsByTagName("body")[0];
const create_div = document.createElement("div");
create_div.setAttribute("class","ahojky");
create_div.setAttribute("id","window_content");
first_div.appendChild(create_div);
aybe();
}
/*Setting up the aYbe*/
function aybe(){

 const option_do_noting = "<option value='do_nothing'>--</option>";
 const option_review_ticket = "<option value='review_ticket' id='review_ticket_data'>Review Ticket</option>";
 const option_get_sparc_data = "<option value='get_localstorage_data' id='download_ticket_data'>Download Ticket Data</option>";
 const option_delete_sparc_data = "<option value='delete_sparc_data'>DELETE This Data</option>";
 const option_load_read_file = "<option value='read_file' id='load_to_sparc'>Load Sparc To Emarsys</option>";
 const option_check_assets = "<option value='check_assets' id='asset_checker'>Check This HTML</option>";
 const option_message_center_helper = "<option value='mc_helper' id='mc_helper'>Run MC Helper</option>";
 const option_first_qa = "<option value='first_qa' id='first_qa'>Run QA review</option>";
 const option_planning_ticket = "<option value='planning_ticket' id='planning_ticket'>Planning Controller</option>";

 const option_space = document.createElement("div");
 option_space.setAttribute("class","options_of_aybe");
 option_space.setAttribute("id", "id_of_options")
 option_space.innerHTML = "<select id='aybe_select_options'>" + option_do_noting + option_review_ticket + option_get_sparc_data + option_load_read_file+ option_check_assets+option_message_center_helper+option_first_qa+option_planning_ticket+"</select>";
 const window_content = document.getElementById("window_content");
 window_content.appendChild(option_space);
 optionController();
 aybeSwitcher();
}
/*
Displays options from aybe() function according domain name
*/
function optionController(){
  /*
--> ALL FREAKING OPTIONS <---

  */
 const domain_path = window.location.href;
 /*IF EMARSYS*/
 if(domain_path.match(/broadcast/g)){
   const hide_download_ticket_option = document.getElementById("download_ticket_data").remove();
   const hide_review_ticket_data = document.getElementById("review_ticket_data").remove();
   const hide_check_assets = document.getElementById("asset_checker").remove();
    const mc_helper = document.getElementById("mc_helper").remove();
    const qa_review = document.getElementById("first_qa").remove();
    const planning = document.getElementById("planning_ticket").remove();
   // const read_file = document.getElementById("load_to_sparc").remove();
   displayMessages();
   /*IF SPARC*/
 }else if (domain_path.match(/helpdesk/g) || domain_path.match(/127/g)) {
   const read_file = document.getElementById("load_to_sparc").remove();
   const hide_check_assets = document.getElementById("asset_checker").remove();
   const mc_helper = document.getElementById("mc_helper").remove();
  // const planning = document.getElementById("planning_ticket").remove();
   // const hide_download_ticket_option = document.getElementById("download_ticket_data").remove();
   // const hide_review_ticket_data = document.getElementById("review_ticket_data").remove();
 }
/*IF email assets*/
 else if (domain_path.match(/file/g)) {
   const read_file = document.getElementById("load_to_sparc").remove();
   const hide_download_ticket_option = document.getElementById("download_ticket_data").remove();
   const hide_review_ticket_data = document.getElementById("review_ticket_data").remove();
   const mc_helper = document.getElementById("mc_helper").remove();
   const qa_review = document.getElementById("first_qa").remove();
   const planning = document.getElementById("planning_ticket").remove();
   //const hide_check_assets = document.getElementById("asset_checker").remove();
   /*If Message Center*/
}else if (domain_path.match(/CampaignSetup/g)) {
  const hide_download_ticket_option = document.getElementById("download_ticket_data").remove();
  const hide_review_ticket_data = document.getElementById("review_ticket_data").remove();
  const hide_check_assets = document.getElementById("asset_checker").remove();
  const read_file = document.getElementById("load_to_sparc").remove();
  const qa_review = document.getElementById("first_qa").remove();
  const planning = document.getElementById("planning_ticket").remove();
  // const mc_helper = document.getElementById("mc_helper").remove();
}else {
  const hide_download_ticket_option = document.getElementById("download_ticket_data").remove();
  const hide_review_ticket_data = document.getElementById("review_ticket_data").remove();
  const hide_check_assets = document.getElementById("asset_checker").remove();
  const read_file = document.getElementById("load_to_sparc").remove();
  const qa_review = document.getElementById("first_qa").remove();
  const mc_helper = document.getElementById("mc_helper").remove();
  const planning = document.getElementById("planning_ticket").remove();
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
  let get_info = document.getElementById('window_content').childNodes;
  //remove all the children without first two children
let length_of_get_info = get_info.length;
  for (let i = length_of_get_info -1 ;i>=2;i--){
     get_info[i].remove();
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
    selectFirstOption.selectedIndex = 0;
    alertArray = [];
alertWindow();
}
/*Here are full styles of aYbe, nowhere else can be styles written*/
function loadStyles(){

 const style_app = document.createElement("style");
 let first_div = document.getElementsByTagName("body")[0];
 const option_styles = "#id_of_options select{display:block;margin: 0 auto;}";
 const select_styles = "#aybe_select_options,#mc_input{padding: 4px;border-radius: 6px;color: #545454 !important;font-weight: bold;border: 2px solid #0bb1f1;}#mc_input{margin:0 auto;border:solid 1px;display:block;margin-top:5px;}";
 const open_close = "#open_close {right: 0px;width: 200px;position: fixed;text-align: center;padding: 20px;top: 65px;color: red;font-size: 20px;font-weight: bold;}.open_close_class{border: 2px solid black;padding: 6px;border-radius: 50%;color: red;border-color: #ff0303;cursor: pointer;z-index: 9999;}"
 const dialog_window = "#dialog_space{font-size:11px;color:green;display:block;text-align:center;font-weight:bold}";
 const ul_li = ".reviewTicketCheckBox{margin:0;vertical-align:middle;position:absolute;left:23px;cursor:alias;}#sparc_list li{text-align: center;font-weight: 900;font-size: 11px;padding: 4px;margin-bottom: 3px;cursor: pointer;height: 30px;border: 2px solid #0bb1f1;margin-top: 3px;} ul#sparc_list{list-style-type:none;padding: 0px;}";
 const sparc_number = "#numberOfSparcItems{text-align:center}";
 const jump_window = "#jump_window{position: absolute;top: 22px;left: 8px;font-size: 18px;font-weight: bold;cursor: pointer;color: #32b6f7;}";
 const wiki_styles = ".wiki_aybe{font-size:8px;text-transform:uppercase;color:grey;}";
 const custom_aybe_scrollbar = "#window_content::-webkit-scrollbar{width:8px;background-color: white;}#window_content::-webkit-scrollbar-thumb{background-color: #e53238;}#window_content::-webkit-scrollbar-track{-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);background-color: #F5F5F5;}"
 const log_messages = ".error_message_class{text-align:left;}.tutorial_message_class{text-align:left;border-bottom:1px solid black;padding:0px;font-size:11px;}.tutorial_headline{font-weight:bold;font-size:13px;color:#132456;font-style:italic;}";
const appearBox = ".appearanything{position: absolute;top: 20%; left: 50%;font-size: 30px;font-weight: bold; color: #00c6d699;text-decoration: underline; font-size: 45px;padding: 15px; border: 5px solid #00C6D699; border-radius: 50%;}";
const alertBox = "#alertBox{position:absolute;top:0;right:10px;width:20px;line-height:20px;vertical-align:middle;background:#03a9f4;text-align:center;border-radius:50%;color:#ffffff;font-weight:bold;cursor:pointer;}"
const modalAlertBox ="#modalWindowForAlert{color:#ffffffc9;background: #1577e7a3;position:fixed;left:30%;top:50%;width:500px;word-wrap:break-word;padding:14px;border: 1px solid;box-shadow: inset 0px 0px 2px 3px;}#modalWindowForAlert ul>li{list-style-type:none !important;}#modalWindowForAlert ul{padding:0px;margin:0px;}#closeModalWindowForAlert{position:absolute;right:7px;top:0px;padding:0px;margin:0px;color:red;font-weight:bold;font-size:20px;cursor:pointer;}";
const buttonForMC = "#copy_button{display:block;margin: 0 auto;margin-top: 5px;background: white;padding: 4px;border-radius: 6px;color: #545454 !important;font-weight: bold; border: 2px solid #0bb1f1;}"
 style_app.innerHTML = buttonForMC+modalAlertBox+alertBox+appearBox+log_messages+custom_aybe_scrollbar+ wiki_styles+jump_window+sparc_number+ul_li+dialog_window+open_close+select_styles + ".ahojky{box-sizing: content-box;overflow-y: scroll;overflow-x: hidden;max-height:350px;box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);border-radius:6px;padding:20px;position:fixed;top:0px;right:0px;width:200px;height:auto;border:3px solid rgba(255,255,255,0.1);background-color:rgba(255,255,255,0.4);z-index:9999}.ahojky:hover{background-color:rgba(255,255,255,0.8);}" + option_styles;

if(typeof first_div === "undefined"){
  first_div = document.getElementsByTagName("body")[0];
}
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
function alertWindow() {
  const get_window = document.getElementById("window_content");
  const create_div = document.createElement("div");
  create_div.setAttribute("id","alertBox");
  get_window.appendChild(create_div);
}
function alertThrower(item) {
  const alertDiv = document.getElementById("alertBox");
  alertArray.push(item);
  alertDiv.innerHTML = alertArray.length;
}
function itemAlertShow() {
  const clickOnAlertBox = document.getElementById("alertBox");
  clickOnAlertBox.addEventListener("click",modalFunction);
  function modalFunction() {
const getModalWindow = document.getElementById("modalWindowForAlert");
getModalWindow.style.display = "block";
const create_li = document.createElement("div");
getModalWindow.appendChild(create_li);
for (var i = 0; i < alertArray.length; i++) {
create_li.innerHTML += "<li>"+ alertArray[i] + "</li>";
}
clickOnAlertBox.removeEventListener("click",modalFunction);
  }
}
function modalWindowPreparation() {
const create_div = document.createElement("div");
const killAlertBox = document.createElement("div");
killAlertBox.setAttribute("id","closeModalWindowForAlert");
killAlertBox.innerHTML = "&#x02297;";
create_div.setAttribute("id","modalWindowForAlert");
create_div.style.display = "none";
document.body.appendChild(create_div);
create_div.appendChild(killAlertBox);
itemAlertShow();
closeModalWindowForAlert();
}

function closeModalWindowForAlert() {
  const closeModalWindowForAlert = document.getElementById("closeModalWindowForAlert");
  closeModalWindowForAlert.addEventListener("click",function() {
    const killModal = document.getElementById("modalWindowForAlert").remove();
    const getAndChangeAlertBox = document.getElementById("alertBox").innerHTML = "0";
  });
}


/*||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||*/
/*-----INVASIVE FUNCTIONS*-----/
/*||||||||||||||||||||||||||||*/
/*||||||||||||||||||||||||||||*/
/*
Follwing functions are not triggered by selecting specific option item.
These functions will check URL, and if URL passes specific condition,
function will be immediately called right after document load itself.
*/
/*
============================
============================
====MC SETUP Protection=====
============================
============================
*/
