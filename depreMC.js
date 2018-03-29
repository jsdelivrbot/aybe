/*
PLUGIN_NAME: mcHELPER
Author: Jaroslav Huss
Version: 1.0.0
Last Build: 9/10/2017
*/
var mc_list = document.getElementById("distFileID");
var mc_length = mc_list.length;
var mc_text = mc_list.options[mc_list.selectedIndex].text;

/*Control Panel*/
var get_divs = document.getElementsByTagName("div")[1];
var control_center = document.createElement("div");
var control_content = "<div style='z-index: 100000;position:fixed;top:0px;right:0px;width:200px;height:200px;background-color:rgba(53,49,38,0.9);border-radius: 4px;padding: 4px;marign: 5px;margin: 5px;border: 2px solid #333129;box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.5);'><h2 style='color:white'>mcHelper <span style='color:#f4ff60;font-size:90%;'>"+ mc_length +" files in queue</span></h2><span style='font-size:70%;color:white;'><em>Fill out name of the .dat file from sparc ticket...</em></span><input style='background: rgba(255,255,255,0.7);margin: 0 auto;text-align: center;border-radius: 5px;line-height: 25px;margin: 5px;width: 95%;border: none;' type='text' name='search_field' id='search_field'/><div id='center_radio' style='display:block;width:100%;text-align:center;font-weight:300;color:white;'><input id='similarity' type='checkbox' name='similarity' value='Whatever'>  Similar files<br><span style='font-size: 10px;'>(hit enter)</span></div><br><button style='padding: 6px 12px;margin: 0 auto;display: block;border: none;border-radius: 3px;color: grey;font-weight: bold;text-transform: uppercase;background: rgba(244, 206, 66,0.7);cursor: pointer;' id='search_button'>Find my .dat</button><p style='position:absolute;bottom:0;width:95%;' id='alert_paragraph_jarda'></p></div>";
control_center.innerHTML = (control_content);
get_divs.appendChild(control_center);

/*Search for the dat file logic*/
var search_button = document.getElementById("search_button");
var search_field = document.getElementById("search_field");
search_button.onclick = function(){
     var alert_paragraph_jarda = document.getElementById("alert_paragraph_jarda").innerHTML = " ";
    var counter = 0;
    console.log("Length of search_field " + (search_field.value).length);
    /*LITTLE String hack HACK HERE :-) So in love with Javascript*/
    var search_string = search_field.value;

  for(i = 0;i<mc_length;i++){
      counter ++;
    var mc_value = mc_list.options[i].text;

   // console.log(search_field.value);
    //console.log(mc_value);
    if(mc_value == search_field.value){

        console.log("Counter = " + counter);
        mc_list.selectedIndex = counter - 1;
        alert_paragraph_jarda = document.getElementById("alert_paragraph_jarda").innerHTML = "<hr><span style='color:green;font-weight:bold;'>I found it! YaY!</span>";

        break;
    }else if((search_field.value).length <= 0){
            alert_paragraph_jarda = document.getElementById("alert_paragraph_jarda").innerHTML = "<hr><span style='color: rgb(112, 94, 1);font-weight:bold;'>You forgot to fill up .dat file!</span>";

        }else if(mc_value != search_field.value){
        alert_paragraph_jarda = document.getElementById("alert_paragraph_jarda").innerHTML = "<hr><span style='color:red;font-weight:bold;'>Nuh Crap! I did not find it... :-(</span>";
        }
}

};
/*
Here comes different logic which will not be connected to any onclick, onhover etc. event.
This program will switch its logic after checkbox is checked
Javascript will be on every incremental string in the text input looking for similarities.
This one will be exciting and hard to do - HuRAAY.
*/

var similardiv = document.createElement("div");
var similarcontent = "<div id='selectthisdiv' style='resize: both;word-wrap: break-word;position:fixed;top:230px;right:0px;width:200px;height:96%;max-height:200px;overflow:auto;border-left: 2px solid;border-top: 4px solid;background-color: rgb(255, 255, 255);border-radius: 4px;padding: 4px;marign: 5px;margin: 5px;box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.5);'><span id='infobar' style='text-align:center;color:white;display:block;font-weight:bold;'></span><button id='copy_results' style='display: block;margin: 0 auto;background: rgba(53,49,38,0.9);border: 0;color: #FFEB3B;padding: 4px 8px;border-radius: 4px;'>copy results</button><br><span id='text_results_from_array'></span></div>";

var arrofindex = [];
var simicheckbox = document.getElementById("similarity");
var text_input = document.getElementById("search_field");
var clear_me = document.getElementById("text_results_from_array");
text_input.onchange = function(){

   var sumavseho = 0;
    var index_counter = 0;
  if(simicheckbox.checked){
      var regpattern = new RegExp(text_input.value,"g");
 for (var i = 0;i<mc_length;i++){
     index_counter++;
     var truefalse = (mc_list[i].text).match(regpattern);
     console.log(typeof(truefalse));
    console.log(truefalse);
    if (truefalse !== null){
       sumavseho += 1;
        console.log("Index shodného objektu je: " + (index_counter -1));
        console.log(mc_list.options[(index_counter -1)].text);

       var values_to_array = mc_list.options[(index_counter -1)].text;
       /*HIGHLIGHTING*/
       var highlights = mc_list.options[(index_counter -1)].style.background = "green";
       /*HIGHLIGHTINGENDS*/
       arrofindex.push(values_to_array);

    }
 }



var arrtostring = arrofindex.toString();
var final_pattern = /,/gi;
var final_string = arrtostring.replace(final_pattern,"<br>");
console.log(final_string);
similardiv.innerHTML = (similarcontent);
control_center.appendChild(similardiv);
var selecteddiv = document.getElementById("selectthisdiv");
var another_way = document.getElementById("text_results_from_array").innerHTML = " ";
var infobar = document.getElementById("infobar").innerHTML = "<span style='color:#a68e12;'>I found " + sumavseho + " files!</span>";
var text_results_from_array = document.getElementById("text_results_from_array").innerHTML = final_string;
arrofindex = [];
console.log(arrofindex);
  }
  /*BUTTON COPY ALL Controller*/
   var text_for_clipboard = document.getElementById("text_results_from_array");
var copy_results = document.getElementById("copy_results");
copy_results.onclick = function(){
   var range = document.createRange();
    var selection = window.getSelection();
    selection.removeAllRanges();
    range.selectNodeContents(text_for_clipboard);
    selection.addRange(range);
    document.execCommand('copy');
    copy_results.innerHTML = "Copied to clipboard!"
}
/*PROBLEM SOLVED!*/
};
