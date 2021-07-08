"use strict";
var button3 = document.querySelector(".button3");
var gameboardHard = document.querySelector(".gameboardHard");
var raster3 = document.querySelector(".raster3");
var computerM = true;
var firstImgElemM;
var secondImgElemM;
var imgElemsM = [];
//Deklaration der Variablen damit die entsprechenden div/HTML-Elemente aus dem DOM gewählt werden
var computerPointsM = document.querySelector(".computerPoints");
var playerPointsM = document.querySelector(".playerpoints");
//Variablendeklaration der Punkte des Computers und des Nutzers, diese werden zunächst auf 0 gesetzt
var cPointsM = 0;
var pPointsM = 0;
var firstcardM;
var secondcardM;
//cards hat den Typ images --> Array aller Karten
var cardsM = [];
var allImagesH = [
    {
        img: "imagesH/a.png",
        name: "A",
        backCard: "images/blank.png",
        id: "1" //id ist dafür da, dass nicht exakt die gleiche Karte verglichen wird
    },
    {
        img: "imagesH/a2.png",
        name: "A",
        backCard: "images/blank.png",
        id: "2"
    },
    {
        img: "imagesH/b.png",
        name: "B",
        backCard: "images/blank.png",
        id: "3"
    },
    {
        img: "imagesH/b2.png",
        name: "B",
        backCard: "images/blank.png",
        id: "4"
    },
    {
        img: "imagesH/c.png",
        name: "C",
        backCard: "images/blank.png",
        id: "5"
    },
    {
        img: "imagesH/c2.png",
        name: "C",
        backCard: "images/blank.png",
        id: "6"
    },
    {
        img: "imagesH/d.png",
        name: "D",
        backCard: "images/blank.png",
        id: "7"
    },
    {
        img: "imagesH/d2.png",
        name: "D",
        backCard: "images/blank.png",
        id: "8"
    },
    {
        img: "imagesH/e.png",
        name: "E",
        backCard: "images/blank.png",
        id: "9"
    },
    {
        img: "imagesH/e2.png",
        name: "E",
        backCard: "images/blank.png",
        id: "10"
    },
    {
        img: "imagesH/f.png",
        name: "F",
        backCard: "images/blank.png",
        id: "11"
    },
    {
        img: "imagesH/f2.png",
        name: "F",
        backCard: "images/blank.png",
        id: "12"
    },
    {
        img: "imagesH/g.png",
        name: "G",
        backCard: "images/blank.png",
        id: "13"
    },
    {
        img: "imagesH/g2.png",
        name: "G",
        backCard: "images/blank.png",
        id: "14"
    },
    {
        img: "imagesH/h.png",
        name: "H",
        backCard: "images/blank.png",
        id: "15"
    },
    {
        img: "imagesH/h2.png",
        name: "H",
        backCard: "images/blank.png",
        id: "16"
    },
    {
        img: "imagesH/i.png",
        name: "I",
        backCard: "images/blank.png",
        id: "17"
    },
    {
        img: "imagesH/i2.png",
        name: "I",
        backCard: "images/blank.png",
        id: "18"
    },
    {
        img: "imagesH/j.png",
        name: "J",
        backCard: "images/blank.png",
        id: "19"
    },
    {
        img: "imagesH/j2.png",
        name: "J",
        backCard: "images/blank.png",
        id: "20"
    },
    {
        img: "imagesH/k.png",
        name: "K",
        backCard: "images/blank.png",
        id: "21"
    },
    {
        img: "imagesH/k2.png",
        name: "K",
        backCard: "images/blank.png",
        id: "22"
    },
    {
        img: "imagesH/l.png",
        name: "L",
        backCard: "images/blank.png",
        id: "23"
    },
    {
        img: "imagesH/l2.png",
        name: "L",
        backCard: "images/blank.png",
        id: "24"
    },
    {
        img: "imagesH/m.png",
        name: "M",
        backCard: "images/blank.png",
        id: "25"
    },
    {
        img: "imagesH/m2.png",
        name: "M",
        backCard: "images/blank.png",
        id: "26"
    },
    {
        img: "imagesH/n.png",
        name: "N",
        backCard: "images/blank.png",
        id: "27"
    },
    {
        img: "imagesH/n2.png",
        name: "N",
        backCard: "images/blank.png",
        id: "28"
    },
    {
        img: "imagesH/o.png",
        name: "O",
        backCard: "images/blank.png",
        id: "29"
    },
    {
        img: "imagesH/o2.png",
        name: "O",
        backCard: "images/blank.png",
        id: "30"
    },
    {
        img: "imagesH/p.png",
        name: "P",
        backCard: "images/blank.png",
        id: "31"
    },
    {
        img: "imagesH/p2.png",
        name: "P",
        backCard: "images/blank.png",
        id: "32"
    }
];
button3.addEventListener("click", function () {
    //Das Objekt allImages wird cards zugewiesen
    cardsM = allImagesH;
    //Funktion shuffleImages wird aufgerufen, der Parameter allImages (Karten) wird der Funktion übergeben
    shuffleImagesH(cardsM);
    //Funktion showImages() wird aufgerufen und die zufällige Kartenreihenfolge wird angezeigt als HTMLImageElement
    showImagesH();
    //Funktion playerChoice() wird aufgerufen
    playerChoiceH();
    //Funktion points() wird aufgerufen
});
//------------------AB HIER SIND DIE KARTEN GEMISCHT----------------------
function playerChoiceH() {
    checkPointsH();
    //wenn computer == true, dann ist der Computer an der Reihe
    if (computerM) {
        //gehe in die picksComputer() Funktion
        picksComputerH();
        removeEventListener("click", onClickH);
    }
    /*ist Computer == false, dann ist der Nutzer an der Reihe
    addeventListener damit der Nutzer auf eine Karte klicken kann*/
    else
        addEventListener("click", onClickH);
}
/*hier werden die aktuellen Punktestände angezeigt, deswegen muss diese Funktion immer wieder aufgerufen werden um
die Punkte zu aktualisieren*/
function pointsH() {
    //HTML Element wird erzeugt, Punkte werden angezeigt und aktualisiert
    computerPointsM.innerHTML = "Der Computer hat " + cPointsM + " Punkte";
    playerPointsM.innerHTML = "Du hast " + pPointsM + " Punkte";
}
/*Definition der Funktion checkPoints() um zu überprüfen, wer mehr Punkte gesammelt hat*/
function checkPointsH() {
    if (cardsM.length == 0) {
        //Wenn der Computer mehr Punkte hat als der Nutzer, hat er gewonnen
        if (cPointsM > pPointsM) {
            alert("Du hast verloren, der Computer hat gewonnen! Möchtest du zurück auf die Startseite?");
            //location.reload() ladet die aktuelle URL neu nachdem man ok geklickt hat und man kann neu starten.
            location.reload();
            //Wenn der Nutzer mehr Punkte hat als der Computer, hat er gewonnen
        }
        else if (pPointsM > cPointsM) {
            alert("Du hast gewonnen! Möchtest du zurück auf die Startseite?");
            location.reload();
        }
        //Wenn beide gleich viele Punkte gesammelt haben, dann ist das Spiel unentschieden
        else if (cPointsM == pPointsM) {
            alert("Unentschieden! Möchtest du zurück auf die Startseite?tschieden!");
            location.reload();
        }
    }
}
function shuffleImagesH(array) {
    var temporaryValue;
    //Hier entsteht eine zufällige Zahl zwischen 0 und 7
    var random;
    //Länge des Arrays wird gespeichert
    var index = array.length;
    /*While Schleife die solange läuft bis die Bedingung false wird
    index der Objekte in Kartenarray*/
    while (0 !== index) {
        /* Mit Math.random() werden die Karten jedes mal neu zufällig auf dem
        Spielfeld sortiert
        Math.random gibt eine Zahl zwischen 0 und 1, deswegen wird sie mit index multipliziert, also der Länge des arrays
        Math.floor rundet die Zahl, damit man keine Kommazahl bekommt.*/
        random = Math.floor(Math.random() * index);
        /*wird 1 runtergezählt damit die Schleife nicht unendlich läuft und sie irgendwann aufhört.
        array.length ist 8, die Schleife läuft also so lange bis der index 0 ist*/
        index--;
        //letzte Karte aus dem Array wird gespeichert in temporaryValue aus images also 7 da (0 bis 7 im Array)
        temporaryValue = array[index];
        //letzter Platz speichert im array Platz 7 die zufällig gewählte Zahl aus dem Array.
        array[index] = array[random];
        //Wird mit der letzten Karte getauscht so oft so lang es noch Karten gibt
        array[random] = temporaryValue;
    }
    /*geshuffelte Array wird zurückgegeben
    Rückgabewert der Funktion*/
    return array;
}
/*Funktion showImages() wird definiert
Bilder werden im HTML Dokument dynamisch generiert
und auf der Seite angezeigt*/
function showImagesH() {
    /*For-Schleife wird erstellt
    läuft so lange durch bis die Länge vom Array erreicht wurde*/
    for (var i = 0; i < cardsM.length; i++) {
        /*hier wird ein HTMLImageElement gespeichert*/
        var img = document.createElement("img");
        /*welches Bild soll das Element anzeigen src wird hinzugefügt,
        URL Adresse des Bildes wird mitgegeben --> backCard*/
        img.src = cardsM[i].backCard;
        /*dem image-Element wird ein Attribut hinzugefügt
        --> die Id und der Wert*/
        img.setAttribute("id", cardsM[i].id);
        /*Dem raster2 wird ein Kind hinzugefügt --> also ein image Element unter dem div raster1 im DOM
        Das image Element ist ein Kindelement von dem div-Element*/
        raster3.appendChild(img);
        /*ein leeres Array wurde am Amfang erzeugt
        Jedes Image das erzeugt wird, wird in dieses gepusht
        Damit werden alle Bilder visuell angezeigt im raster2*/
        imgElemsM.push(img);
    }
}
//Funktion picksComputer() wird definiert
function picksComputerH() {
    //Variable picks wird deklariert ohne Wert
    var picks;
    //if (computer) true dann hat die erste Karte noch keinen Wert(null), da noch keine Karte gewählt wurde
    if (firstcardM == null) {
        /*Computer wählt eine zufällige Karte(Zahl) aus, aus der Länge der images
        --> wird der Variable picks zugewiesen*/
        picks = Math.floor(Math.random() * cardsM.length);
        //wählt aus cards Array zufällige Zahl für die erste Karte
        firstcardM = cardsM[picks];
        //öffnet die erste Karte mit setTimeout nach 700ms
        setTimeout(openImagesH, 700, firstcardM);
        //Genau dasselbe mit der zweiter Karte, ist die zweite Karte noch nicht gewählt, hat sie keinen Wert --> null
    }
    else if (secondcardM == null) {
        //Suche eine zufällige Karte aus von denen die es noch gibt
        picks = Math.floor(Math.random() * allImagesH.length);
        secondcardM = cardsM[picks];
        //darf nicht dieselbe id haben
        if (firstcardM == secondcardM) {
            //Sicherheitsabfrage damit die Karten nicht dieselbe id haben
            //setze die zweite Karte wieder auf null
            secondcardM = null;
            //wenn die Karten dieselbe id haben, dann gehe zurück in die picksComputer() Funktion rein
            picksComputerH();
        }
        //Wenn die Karte eine andere id hat, dann
        if (secondcardM != null) {
            //öffne sie nach 700ms
            setTimeout(openImagesH, 700, secondcardM);
        }
    }
}
/*Funktion openImages() wird erstellt mit dem Parameter card und deren Typ images
--> Karte die gezeigt wird die vom Computer und Nutzer ausgewählt wurde
Vorgang wie die Karten geöffnet werden ohne dass der Spieler oder Computer in dieser Funktion
eine Karte wählt*/
function openImagesH(card) {
    /*hier wird abgefragt
    -->wenn noch keine Karte ausgewählt wurde*/
    if (firstImgElemM == null) {
        /*dann gehe in die Schleife und übergebe dem firstImageElement jedes image element
        gehe die Schleife durch solange i < allImages.length ist
        beim jeden Durchlauf wird i um 1 erhöht*/
        for (var i = 0; i < cardsM.length; i++) {
            /*beim ersten durchlauf ist i = 0, wird an firstImageElemnt übergeben
            Wert ist temporär da er in jedem Schleifen Durchlauf um 1 erhöht wird
            der Wert wird an firstImageElement übergeben, damit card das
            vergleichen kann mit firstImageElement*/
            firstImgElemM = imgElemsM[i];
            /*card.id --> Karte die der Computer ausgewählt hat, wenn die id gleich der id des image Elements ist dann
            suche die id des ImageElements, die dieselbe id hat wie die Karte die der Computer ausgesucht hat
            hier wird also geprüft, ob die id von card (pick Computer) dieselbe ist wie die vom firstimageelement*/
            if (card.id == firstImgElemM.id) {
                /*wurde die id gefunden, dann wird die Bild url von backCard zu Vorderseite img geändert und gezeigt
                --> grafischer Vorgang*/
                firstImgElemM.src = card.img;
                /*Abbruch damit for Schleife aufhört, da i so lang ist wie das Array
                Ist eine stumpfe Suchabfrage*/
                i = cardsM.length;
            }
        }
        /*derselbe Durchlauf mit der zweiten Karte*/
    }
    else if (secondImgElemM == null) {
        for (var j = 0; j < cardsM.length; j++) {
            secondImgElemM = imgElemsM[j];
            if (card.id == secondImgElemM.id) {
                secondImgElemM.src = card.img;
                j = cardsM.length;
            }
        }
    }
    //Funktion wird aufgerufen, wurden die zwei Karten ausgewählt?
    checkImagesH();
}
/*Definition der Funktion checkImages(), damit diese überprüft,
ob beide Karten ausgewählt wurden*/
function checkImagesH() {
    if (firstcardM != null && secondcardM != null) {
        //Aufruf checkId nach 1 Sekunde, wenn zwei Karten ausgewählt wurden
        setTimeout(checkIdH, 1000);
        removeEventListener("click", onClickH);
        //sind die Karten nicht gleich gehe zurück in playerChoice damit der nutzer auswählen kann
    }
    else
        playerChoiceH();
}
//Funktion checkId() prüft nach ob ein passendes Paar gefunden wurde
function checkIdH() {
    if (firstcardM.name == secondcardM.name) {
        for (var i = 0; i < cardsM.length; i++) {
            //ist die id der ersten Karte dieseble id der Karte im array?
            if (firstcardM.id == cardsM[i].id) {
                //zeige das imgElem im HTML nicht an, da keine Verweisung
                imgElemsM[i].src = "";
                //imgElems[i].remove(); --> nicht gut da die Karten verrutscht sind
                //imgElems wird aus dem Array entfernt
                imgElemsM.splice(i, 1);
                //entferne die erste Karte 
                //splice --> Karte wird aus dem Kartenarray entfernt
                cardsM.splice(i, 1);
            }
        }
        //dasselbe mit der zweiten Karte
        for (var j = 0; j < cardsM.length; j++) {
            if (secondcardM.id == cardsM[j].id) {
                //zeige das imgElem im HTML nicht an, da keine Verweisung
                imgElemsM[j].src = "";
                //entferne imgElem aus dem Array
                imgElemsM.splice(j, 1);
                //entferne die zweite Karte aus dem Array
                cardsM.splice(j, 1);
            }
        }
        //erste und zweite Karte haben keinen Inhalt mehr, da diese Karten raus aus dem Spiel sind
        //Karten werden dann neu gesetzt bzw gewählt
        firstcardM = null;
        secondcardM = null;
        firstImgElemM = null;
        secondImgElemM = null;
        //Punkte Verteilung
        //hat der Computer ein Kartenpaar gefunden
        if (computerM) {
            //dann bekommt er einen Punkt
            cPointsM++;
        }
        else {
            //wenn der Nutzer ein Paar gefunden hat, bekommt er einen Punkt
            pPointsM++;
        }
        //Funktion points wird aufgerufen
        pointsH();
        //gehe zum Ursprung zurück
        playerChoiceH();
    }
    else {
        //kein gleiches Paar --> closeImages() und switchPlayer() wird aufgerufen
        closeImagesH();
        switchPlayerH();
    }
}
//die URL wird wieder zur backCard gesetzt wenn kein gleiches Paar gefunden wurde bei der ersten und zweiten Karte
function closeImagesH() {
    firstImgElemM.src = firstcardM.backCard;
    secondImgElemM.src = secondcardM.backCard;
}
/*alle Karten auf null setzen
der nächste der dran ist kann dann wieder zwei Karten wählen
Abfrage wer gerade an der Reihe ist*/
function switchPlayerH() {
    firstcardM = null;
    secondcardM = null;
    firstImgElemM = null;
    secondImgElemM = null;
    if (computerM) {
        computerM = false;
    }
    else if (computerM == false) {
        computerM = true;
    }
    playerChoiceH();
}
/*Definition der onClick() Funktion*/
function onClickH(event) {
    //b speichert angeklickte Karte im HTML
    var b = event.target;
    //ImgageElement ist in imgPick
    //als HTML img Element damit man direkt darauf zugreifen kann
    var imgPick = b;
    console.log(imgPick.id);
    //hier wird eine For-Schleife erstellt die die Länge des Arrays durchläuft um das imageElement zu suchen
    //Variable i wird mit dem Wert 0 deklariert
    //der Wert wird nach jedem Durchlauf um 1 erhöht solange i kleiner bleibt als die Länge des Arrays --> 8
    for (var i = 0; i < cardsM.length; i++) {
        /*Das imgage Element das angeklickt wurde wird hier überprüft ob es dieselbe id hat
        Hier wird also das angeklickte Element im Array gesucht, damit man es verändern kann*/
        if (imgPick.id == imgElemsM[i].id) {
            /*Wenn die ids übereinstimmen hat man die Objektinstanz im Array gefunden und man
            kann darauf zugreifen, damit man die angeklickte Karte öffnen kann
            Hier ändert sich die Bild URL zu img*/
            imgElemsM[i].src = cardsM[i].img;
            /*hat firstImageElement noch keinen Wert, dann übergibt es ihm den gefundenen Wert*/
            if (firstImgElemM == null) {
                //gefundener Wert wird übergeben, wenn firstImgElem noch keinen Wert hat
                firstImgElemM = imgElemsM[i];
                //Wert wird der ersten Karte übergeben
                firstcardM = cardsM[i];
                //Dasselbe mit der zweiten Karte 
            }
            else if (secondImgElemM == null) {
                secondImgElemM = imgElemsM[i];
                secondcardM = cardsM[i];
                /*kein Doppelklick
                Wenn die zweite Karte wieder dieselbe ist wie die erste, dann
                setze secondImgElem und secondcard auf null damit eine neue gewählt wird und
                kein Wert mehr gespeichert ist*/
                if (firstImgElemM == secondImgElemM) {
                    secondImgElemM = null;
                    secondcardM = null;
                    playerChoiceH();
                }
            }
        }
    }
    //gehe in checkImages(), damit diese überprüft, ob beide Karten ausgewählt wurden
    checkImagesH();
}
//# sourceMappingURL=gamefield.js.map