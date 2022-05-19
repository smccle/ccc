/*
All this code is copyright ZYTK, 2022.
   - Includes a bunch of snippets from sites like StackOverflow
https://z1tk.github.io/
*/

var VERSION=1.001;
var BETA=0;

/*================================================================================================
Base64
================================================================================================*/
 var Base64 = {
 
	// private property
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
 
	// public method for encoding
	encode : function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;
 
		input = Base64._utf8_encode(input);
 
		while (i < input.length) {
 
			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);
 
			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;
 
			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}
 
			output = output +
			this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
			this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
 
		}
 
		return output;
	},
 
	// public method for decoding
	decode : function (input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
 
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
 
		while (i < input.length) {
 
			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));
 
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;
 
			output = output + String.fromCharCode(chr1);
 
			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}
 
		}
 
		output = Base64._utf8_decode(output);
 
		return output;
 
	},
 
	// private method for UTF-8 encoding
	_utf8_encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";
 
		for (var n = 0; n < string.length; n++) {
 
			var c = string.charCodeAt(n);
 
			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
 
		}
 
		return utftext;
	},
 
	// private method for UTF-8 decoding
	_utf8_decode : function (utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;
 
		while ( i < utftext.length ) {
 
			c = utftext.charCodeAt(i);
 
			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			}
			else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}
			else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
 
		}
 
		return string;
	}
 
}
/*================================================================================================
SAVE/LOAD
================================================================================================*/
if (BETA != 1) {
var newDataData;

function loadData() {
    var data = localStorage.getItem("data");
    if (data != null) {
        var decodedData = Base64.decode(data);
        var dataSplitVersion = decodedData.split(":");
        var loadedData= dataSplitVersion[0];
        var loadedDataData = loadedData.split(".");

        if (parseInt(dataSplitVersion[1]) < VERSION) {
            var amountToAdd = loadedDataData.length - Items.length;

            Array.from({length: amountToAdd}, () => {
                newDataData = loadedData + Base64.encode(encodeURIComponent("0")) + ".";
            });
            
            var newData = newDataData = ":" + VERSION;
            localStorage.setItem("data", newData);
        } else if (data.length = createList().length) {
            CatCoins = parseInt(loadedDataData[0]);
            CCpS = parseInt(loadedDataData[1]);
            Cursors = parseInt(loadedDataData[2]);
            Cursor_CCpS = parseInt(loadedDataData[3]);
            Cats = parseInt(loadedDataData[4]);
            Cat_CCpS = parseInt(loadedDataData[5]);
            Farms = parseInt(loadedDataData[6]);
            Farm_CCpS = parseInt(loadedDataData[7]);
            Mines = parseInt(loadedDataData[8]);
            Mine_CCpS = parseInt(loadedDataData[9]);
            Banks = parseInt(loadedDataData[10]);
            Bank_CCpS = parseInt(loadedDataData[11]);
            JSConsoles = parseInt(loadedDataData[12]);
            JSConsole_CCpS = parseInt(loadedDataData[13]);
            Prisms = parseInt(loadedDataData[14]);
            Prism_CCpS = parseInt(loadedDataData[15]);
            CatVerses = parseInt(loadedDataData[16]);
            CatVerse_CCpS = parseInt(loadedDataData[17]);
            MU1 = parseInt(loadedDataData[18]);
            MU2 = parseInt(loadedDataData[19]);
            MU3 = parseInt(loadedDataData[20]);
            MU4 = parseInt(loadedDataData[21]);
            MU5 = parseInt(loadedDataData[22]);
            MU6 = parseInt(loadedDataData[23]);
            CU1 = parseInt(loadedDataData[24]);
            CU2 = parseInt(loadedDataData[25]);
            CU3 = parseInt(loadedDataData[26]);
            CTU1 = parseInt(loadedDataData[27]);
            CTU2 = parseInt(loadedDataData[28]);
            CTU3 = parseInt(loadedDataData[29]);
            FU1 = parseInt(loadedDataData[30]);
            FU2 = parseInt(loadedDataData[31]);
            FU3 = parseInt(loadedDataData[32]);
            MNU1 = parseInt(loadedDataData[33]);
            MNU2 = parseInt(loadedDataData[34]);
            MNU3 = parseInt(loadedDataData[35]);
            BU1 = parseInt(loadedDataData[36]);
            BU2 = parseInt(loadedDataData[37]);
            BU3 = parseInt(loadedDataData[38]);
            JSCU1 = parseInt(loadedDataData[39]);
            JSCU2 = parseInt(loadedDataData[40]);
            JSCU3 = parseInt(loadedDataData[41]);
            PU1 = parseInt(loadedDataData[42]);
            PU2 = parseInt(loadedDataData[43]);
            PU3 = parseInt(loadedDataData[44]);
            CVU1 = parseInt(loadedDataData[45]);
            CVU2 = parseInt(loadedDataData[46]);
            CVU3 = parseInt(loadedDataData[47]);
            CKU1 = parseInt(loadedDataData[48]);
            CKU2 = parseInt(loadedDataData[49]);
            CKU3 = parseInt(loadedDataData[50]);
            CKU4 = parseInt(loadedDataData[51]);
            CKU5 = parseInt(loadedDataData[52]);
            CatCoins_Per_Click = parseInt(loadedDataData[53]);
            document.getElementById("text").value = parseInt(loadedDataData[0]);
        } else {
            alert("Invalid Code!");
        }
    }
}

function setData(list) {
    var count = 0-1;
    var createData = "";
    Array.from({length: list.length}, () => {
        createData = createData + encodeURIComponent(list[count += 1]) + ".";
    })

    var dataVersion = encodeURIComponent(createData + ":" + VERSION); 
    var completeData = Base64.encode(dataVersion);
    localStorage.setItem("data", completeData);
}

function wipeData() {
    var wipeDataPopup = document.createElement("div");
    var Text3 = document.createElement("p");
    var Button1 = document.createElement("button");
    var br = document.createElement("br");
    var Button2 = document.createElement("button");
    wipeDataPopup.style.position = "absolute";
    wipeDataPopup.style.height = "77%";
    wipeDataPopup.style.width = "32.5%";
    Button1.className = "wd";
    Button2.className = "sl";
    wipeDataPopup.style.backgroundColor = "rgb(15,15,15)";
    wipeDataPopup.style.borderStyle = "solid";
    wipeDataPopup.style.borderColor = "black";
    wipeDataPopup.style.borderWidth = "5px";
    Text3.innerHTML = "Are you sure you would like to wipe your data?";
    Button1.innerHTML = "Yes";
    Button2.innerHTML = "No";
    Text3.style.color = "white";

    document.getElementById("lds").appendChild(wipeDataPopup);
    wipeDataPopup.appendChild(Text3);
    wipeDataPopup.appendChild(br);
    wipeDataPopup.appendChild(Button1);
    wipeDataPopup.appendChild(Button2);

    Button1.onclick = () => {
        localStorage.removeItem("data");
        window.location.reload();
    }
    Button2.onclick = () => {
        wipeDataPopup.parentNode.removeChild(wipeDataPopup);
    }
}

// function test() {
//     var TestData = [123, 1000, 23, 2, 1, 1, 0, 0, 0];
//     setData(TestData);
// }

function exportData(list) {
    var count = 0-1;
    var createData = "";
    Array.from({length: list.length}, () => {
        createData = createData + encodeURIComponent(list[count += 1]) + ".";
    })

    var dataVersion = encodeURIComponent(createData + ":" + VERSION); 
    var completeData = Base64.encode(dataVersion);

    var exportPopUp = document.createElement('div');
    var Text = document.createElement('p');
    var textarea = document.createElement('textarea');
    var btn = document.createElement('button');
    var br = document.createElement('br');
    Text.innerHTML = `Copy This Save Code!\n\n`
    Text.style.fontSize = "1.6rem";
    textarea.style.width = "440px";
    textarea.style.height = "200px";
    textarea.style.backgroundColor = "white";
    textarea.style.display = "block";
    textarea.readOnly = true;
    textarea.style.color = "black";
    textarea.style.borderColor = "gray";
    textarea.style.borderStyle = "dashed";
    textarea.style.borderWidth = "1px";
    btn.innerHTML = "Done!";
    textarea.innerHTML = completeData;
    textarea.style.resize = "none";
    exportPopUp.style.position = "absolute";
    exportPopUp.style.height = "77%";
    exportPopUp.style.width = "32.5%";
    Text.style.color = "white";
    exportPopUp.style.backgroundColor = "rgb(15,15,15)";
    exportPopUp.style.borderStyle = "solid";
    exportPopUp.style.borderColor = "black";
    exportPopUp.style.borderWidth = "5px";
    document.getElementById("lds").appendChild(exportPopUp);
    exportPopUp.appendChild(Text);
    exportPopUp.appendChild(textarea);
    exportPopUp.appendChild(br);
    exportPopUp.appendChild(btn);

    btn.addEventListener("click", () => {
        Text.parentNode.removeChild(Text);
        textarea.parentNode.removeChild(textarea);
        br.parentNode.removeChild(br);
        btn.parentNode.removeChild(btn);
        exportPopUp.parentNode.removeChild(exportPopUp);
    })
}

function importData() {

    var importPopUp = document.createElement('div');
    var Text2 = document.createElement('p');
    var textarea2 = document.createElement('textarea');
    var btn2 = document.createElement('button');
    var br2 = document.createElement('br');
    Text2.innerHTML = `Paste Your Code Here!\n\n`
    Text2.style.fontSize = "1.6rem";
    textarea2.style.width = "440px";
    textarea2.style.height = "200px";
    textarea2.style.backgroundColor = "white";
    textarea2.style.display = "block";
    textarea2.style.color = "black";
    textarea2.style.borderColor = "gray";
    textarea2.style.borderStyle = "dashed";
    textarea2.style.borderWidth = "1px";
    btn2.innerHTML = "Done!";
    textarea2.style.resize = "none";
    importPopUp.style.position = "absolute";
    importPopUp.style.height = "77%";
    importPopUp.style.width = "32.5%";
    Text2.style.color = "white";
    importPopUp.style.backgroundColor = "rgb(15,15,15)";
    importPopUp.style.borderStyle = "solid";
    importPopUp.style.borderColor = "black";
    importPopUp.style.borderWidth = "5px";
    document.getElementById("lds").appendChild(importPopUp);
    importPopUp.appendChild(Text2);
    importPopUp.appendChild(textarea2);
    importPopUp.appendChild(br2);
    importPopUp.appendChild(btn2);

    btn2.addEventListener("click", () => {
        if (textarea2.value != "") {
            localStorage.setItem("data", textarea2.value);
            loadData();
        }
        Text2.parentNode.removeChild(Text2);
        textarea2.parentNode.removeChild(textarea2);
        br2.parentNode.removeChild(br2);
        btn2.parentNode.removeChild(btn2);
        importPopUp.parentNode.removeChild(importPopUp);
    })
}
} else {
    var s = document.createElement("script");
    var ocss = document.getElementById("css");
    s.type = "text/javascript";
    s.src = "./src/beta/" + VERSION + "/script.js";
    s.innerHTML = null;
    document.body.appendChild(s);
    ocss.parentNode.removeChild(ocss);
}
/*================================================================================================
MAIN CODE
================================================================================================*/

if (BETA != 1) {
    var CatCoins = 0, 
CCpS = 0,
Cursors = 0,
Cursor_CCpS = 0,
Cats = 0,
Cat_CCpS = 0,
Farms = 0,
Farm_CCpS = 0,
Mines=0,
Mine_CCpS=0,
Banks=0,
Bank_CCpS=0,
JSConsoles=0,
JSConsole_CCpS=0,
Prisms=0,
Prism_CCpS=0,
CatVerses=0,
CatVerse_CCpS=0,
MU1=0,
MU2=0,
MU3=0,
MU4=0,
MU5=0,
MU6=0,
CU1=0,
CU2=0,
CU3=0,
CTU1=0,
CTU2=0,
CTU3=0,
FU1=0,
FU2=0,
FU3=0,
MNU1=0,
MNU2=0,
MNU3=0,
BU1=0,
BU2=0,
BU3=0,
JSCU1=0,
JSCU2=0,
JSCU3=0,
PU1=0,
PU2=0,
PU3=0,
CVU1=0,
CVU2=0,
CVU3=0,
CKU1=0,
CKU2=0,
CKU3=0,
CKU4=0,
CKU5=0,
CatCoins_Per_Click=1;

function add() {
    CatCoins = CatCoins + CatCoins_Per_Click;
    document.getElementById("text").value = CatCoins;
    createScoreLabel(document.getElementById("cookie"), CatCoins_Per_Click);
    createCatCoins();
    setData(createList());

    gsap.to(document.getElementById("cookie"), {
        scale: 0.75,
        duration: 0.1,
        onComplete: () => {
            gsap.to(document.getElementById("cookie"), {
               scale: 1,
               duration: 0.1
            })
        }
    });
}

function timer() {
    CatCoins = CatCoins + CCpS;
    document.getElementById("text").value = CatCoins;
    document.getElementById("text2").value = CCpS;
}

function upgrade(obj, price, type, tier) {
    if (CatCoins >= price) {
        CatCoins = CatCoins - price;
        document.getElementById(obj).style.display = "none";
        document.getElementById("text").value = CatCoins;
        if (type = "Auto") {
            CCpS = CCpS + tier;
        } else if (type = "CCpC") {
            CatCoins_Per_Click = CatCoins_Per_Click * tier;
        }
        document.getElementById("up").innerHTML = "Bought!";
        document.getElementById("up").style.color = "green";
        setTimeout(() => {
            document.getElementById("up").innerHTML = "Upgrades: ";
            document.getElementById("up").style.color = "white";
        }, 1000)
    }
}

function generateNews() {
    var choices = [
        '"CatCoins Booming In Revenue!" - News',
        '"CatCoins Might Be The New DogeCoin!" - News',
        '"I love catcoins..." - Your Mom',
        '"CatCoin Workers May Be OverWorked!" - News',
        '"Buisness is booming" - Grandma Cat',
        '"Thicc Coin" - That One Kid',
        '"Its Time For Breakfast!" - Your Mom',
        '"CatCoin Mine Collapsed! ' + (Math.floor(Math.random() * 50) + 1) + ' Miners Trapped!" - News',
        '"I love milk" - A random cat',
        '"I Ate A Muffin Today" - Billy Cat'
    ]
    var choice = Math.floor(Math.random() * 10);
    document.getElementById("msg").innerHTML = choices[choice];
}

function createScoreLabel(obj, val) {
    const scoreLabel = document.createElement('label');
    scoreLabel.innerHTML = val;
    scoreLabel.style.position = "absolute";
    scoreLabel.style.color = "black";
    scoreLabel.style.fontFamily = "Arial, sans-serif";
    scoreLabel.style.fontSize = "1.6rem";
    scoreLabel.style.zIndex = "20";
    scoreLabel.style.userSelect = "none";
    scoreLabel.style.left = obj.x + Math.floor(Math.random() * 200);
    scoreLabel.style.top = obj.y + Math.floor(Math.random() * 200);
    document.body.appendChild(scoreLabel);

    gsap.to(scoreLabel, {
        opacity: 0,
        y: -30,
        duration: 0.75,
        onComplete: () => {
            scoreLabel.parentNode.removeChild(scoreLabel)
        }
    })
}

function createCatCoins(obj) {
    const catCoinObj = document.createElement('img');
    catCoinObj.src = "./src/img/catcoin.png";
    catCoinObj.style.position = "absolute";
    catCoinObj.style.userSelect = "none";
    catCoinObj.style.width = "50px";
    catCoinObj.style.height = "50px";
    catCoinObj.style.left = Math.floor(Math.random() * 425);
    catCoinObj.style.top = 0;
    document.getElementById("cokie").appendChild(catCoinObj);

    gsap.to(catCoinObj, {
        y: 599,
        opacity: 0,
        duration: 1,
        onComplete: () => {
            catCoinObj.parentNode.removeChild(catCoinObj);
        }
    })
}

var Items = []

function createList() {
    Items = [
        CatCoins,
        CCpS,
        Cursors,
        Cursor_CCpS,
        Cats,
        Cat_CCpS,
        Farms,
        Farm_CCpS,
        Mines,
        Mine_CCpS,
        Banks,
        Bank_CCpS,
        JSConsoles,
        JSConsole_CCpS,
        Prisms,
        Prism_CCpS,
        CatVerses,
        CatVerse_CCpS,
        MU1,
        MU2,
        MU3,
        MU4,
        MU5,
        MU6,
        CU1,
        CU2,
        CU3,
        CTU1,
        CTU2,
        CTU3,
        FU1,
        FU2,
        FU3,
        MNU1,
        MNU2,
        MNU3,
        BU1,
        BU2,
        BU3,
        JSCU1,
        JSCU2,
        JSCU3,
        PU1,
        PU2,
        PU3,
        CVU1,
        CVU2,
        CVU3,
        CKU1,
        CKU2,
        CKU3,
        CKU4,
        CKU5,
        CatCoins_Per_Click
    ]
    return Items;
}
}

/*==============================================================================================*/