
function getParagraph1(){
    var inputs = [];
    for(var i = 1 ; i <=6 ; i++)
    {
        inputs.push(document.getElementById("div1_input_box_" + i).value);
    }
document.getElementById("showParagraph1").innerHTML = inputs.join(". ");

}


function getParagraph2(){
    var inputs = [];
    for(var i = 1 ; i <=6 ; i++)
    {
        inputs.push(document.getElementById("div2_input_box_" + i).value);
    }
document.getElementById("showParagraph2").innerHTML = inputs.join(". ");

}
document.getElementById("Arial_div1").onclick = function(){
	document.getElementById("showParagraph1").style.fontFamily = 'Arial';
}
document.getElementById("papyrus_div1").onclick = function(){
	document.getElementById("showParagraph1").style.fontFamily = 'Papyrus';
}
document.getElementById("copperplate_div1").onclick = function(){
    document.getElementById("showParagraph1").style.fontFamily = 'CopperPlate';
}
document.getElementById("BrushScriptMT_div1").onclick = function(){
    document.getElementById("showParagraph1").style.fontFamily = 'Brush Script MT';
}

document.getElementById("Arial_div2").onclick = function(){
	document.getElementById("showParagraph2").style.fontFamily = 'Arial';
}
document.getElementById("papyrus_div2").onclick = function(){
	document.getElementById("showParagraph2").style.fontFamily = 'Papyrus';
}
document.getElementById("copperplate_div2").onclick = function(){
    document.getElementById("showParagraph2").style.fontFamily = 'CopperPlate';
}
document.getElementById("BrushScriptMT_div2").onclick = function(){
    document.getElementById("showParagraph2").style.fontFamily = 'Brush Script MT';
}
