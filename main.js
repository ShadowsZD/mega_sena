var csv_file = './resultados.csv';
var jsonData;
var checkButton = document.getElementById("checkBtn");
checkButton.disabled = true;

function loadGames(){
    $.ajax({

        type: 'GET',

        url: csv_file,

        dataType: 'text',

        error: function (e) {
            alert('An error occurred while processing data');
            console.log("call Failed: ", e);
        },

        success: function (data) {

            jsonData = $.csv.toObjects(data);
           
        } 

        }); 
    var loadButton = document.getElementById("loadBtn");
    loadButton.disabled = true;
            
}

var arr = [];
var countShared = arr.length;

function resetGame(){
    arr = [];

    $(':checkbox:checked').prop('checked',false);
    $('#comment').text('Total de números selecionados: ' + $('.form-check-input:checkbox:checked').length);
    $('#userGame').text('Números escolhidos: ' + arr.toString());

}

function checkGame() {

    var myNode = document.getElementById('Quadra');
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }

    var myNode = document.getElementById('Quina');
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }

    var myNode = document.getElementById('Mega');
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }

    var winnerGamesQuadra = [];
    var winnerGamesQuina = [];
    var winnerGamesMega = [];

    $.each(jsonData, function (index, v) {
        //index = index do array
        // verificar valor das bolas e dar append na lista de jogos caso o jogo tenha ganho
        numbersMatched = 0
        numArray = []

        if( jQuery.inArray(v['bola 1'], arr) >= 0 ){
            numbersMatched++;
            numArray.push(v['bola 1']);
        }
        if( jQuery.inArray(v['bola 2'], arr) >= 0){
            numbersMatched++;
            numArray.push(v['bola 2']);
        }
        if( jQuery.inArray(v['bola 3'], arr) >= 0){
            numbersMatched++;
            numArray.push(v['bola 3']);
        }
        if( jQuery.inArray(v['bola 4'], arr) >= 0){
            numbersMatched++;
            numArray.push(v['bola 4']);
        }            
        if( jQuery.inArray(v['bola 5'], arr) >= 0){
            numbersMatched++;
            numArray.push(v['bola 5']);
        }            
        if( jQuery.inArray(v['bola 6'], arr) >= 0){
            numbersMatched++;
            numArray.push(v['bola 6']);
        }

        if(numbersMatched >= 4){
            if(numbersMatched == 4){
                var jogo = {
                    "concurso":         v['Concurso'],    
                    "tipoSorteio":      'Quadra',
                    "numerosSorteados": numArray
                };
                winnerGamesQuadra.push(jogo);
                //$('#winnerGamesQuadra').text('Jogos Quadra: ' + JSON.stringify(winnerGamesQuadra))
            }
            else if (numbersMatched == 5){
                var jogo = {
                    "concurso":         v['Concurso'],    
                    "tipoSorteio":      'Quina',
                    "numerosSorteados": numArray
                };
                winnerGamesQuina.push(jogo);
               // $('#winnerGamesQuina').text('Jogos Quina: ' + JSON.stringify(winnerGamesQuina));
            }
            else{
                var jogo = {
                    "concurso":         v['Concurso'],    
                    "tipoSorteio":      'Mega!',
                    "numerosSorteados": numArray
                };
                winnerGamesMega.push(jogo);
                //$('#winnerGamesMega').text('Jogos Mega!: ' + JSON.stringify(winnerGamesMega));
            }

        }

    });

    $.each(winnerGamesQuadra, function (i, v) {

        var li = document.createElement("LI");
        li.setAttribute('id', 'jogo' + i);
        var t = document.createTextNode("Jogo número: " + i + 1);
        li.appendChild(t);
        document.getElementById("Quadra").appendChild(li);

        var ul = document.createElement("UL");
        ul.setAttribute('id', 'lista' + i);
        document.getElementById('jogo' + i).appendChild(ul);

        li_concurso = document.createElement("LI");
        t = document.createTextNode("Concurso número: " + v['concurso'])
        li_concurso.appendChild(t);
        document.getElementById("lista" + i).appendChild(li_concurso)

        li_numeros = document.createElement("LI");
        t = document.createTextNode("Numeros sorteados: " + v['numerosSorteados'])
        li_numeros.appendChild(t);
        document.getElementById("lista" + i).appendChild(li_numeros)
        
    });

    $.each(winnerGamesQuina, function (i, v) {
        //console.log('Jogo ganho número: ' + i + 1 + ' Concurso número: ' + v['concurso'] + ' Números sorteados: ' + v['numerosSorteados'])

        var li = document.createElement("LI");
        li.setAttribute('id', 'jogo' + i);
        var t = document.createTextNode("Jogo número: " + i + 1);
        li.appendChild(t);
        document.getElementById("Quina").appendChild(li);

        var ul = document.createElement("UL");
        ul.setAttribute('id', 'lista' + i);
        document.getElementById('jogo' + i).appendChild(ul);

        li_concurso = document.createElement("LI");
        t = document.createTextNode("Concurso número: " + v['concurso'])
        li_concurso.appendChild(t);
        document.getElementById("lista" + i).appendChild(li_concurso)

        li_numeros = document.createElement("LI");
        t = document.createTextNode("Numeros sorteados: " + v['numerosSorteados'])
        li_numeros.appendChild(t);
        document.getElementById("lista" + i).appendChild(li_numeros)
        
    });

    $.each(winnerGamesMega, function (i, v) {
        //console.log('Jogo ganho número: ' + i + 1 + ' Concurso número: ' + v['concurso'] + ' Números sorteados: ' + v['numerosSorteados'])

        var li = document.createElement("LI");
        li.setAttribute('id', 'jogo' + i);
        var t = document.createTextNode("Jogo número: " + i + 1);
        li.appendChild(t);
        document.getElementById("Mega").appendChild(li);

        var ul = document.createElement("UL");
        ul.setAttribute('id', 'lista' + i);
        document.getElementById('jogo' + i).appendChild(ul);

        li_concurso = document.createElement("LI");
        t = document.createTextNode("Concurso número: " + v['concurso'])
        li_concurso.appendChild(t);
        document.getElementById("lista" + i).appendChild(li_concurso)

        li_numeros = document.createElement("LI");
        t = document.createTextNode("Numeros sorteados: " + v['numerosSorteados'])
        li_numeros.appendChild(t);
        document.getElementById("lista" + i).appendChild(li_numeros)
        
    });

}





$(document).ready(function(){
    $(':checkbox:checked').prop('checked',false);
    $('#comment').text('Total de números selecionados: ' + $('.form-check-input:checkbox:checked').length);
    $('#userGame').text('Números escolhidos: ' + arr.toString())

    $('input[type="checkbox"]').click(function(){

    if($(this).prop("checked") == true){
        if(countShared >= 6) {
            $(this).prop('checked',false);
            alert("O jogo só pode conter 6 números.");
        }
        else{
            arr.push($(this).val());
        }
    }
    else if($(this).prop("checked") == false){
        for( var i = 0; i < arr.length; i++){ 
            if ( arr[i] === $(this).val()) { 
                arr.splice(i, 1); 
            }
        }
    }

    $('#comment').text('Total de números selecionados: ' + $('.form-check-input:checkbox:checked').length);

    countShared = arr.length;
    if(countShared == 6){
        checkButton.disabled = false;
    }
    else{
        checkButton.disabled = true;
    }

    $('#userGame').text('Números escolhidos: ' + arr.toString())
    });
    
});