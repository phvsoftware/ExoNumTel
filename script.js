$(function() {
    $("#transformer").click(function() {
        Transformer();
    });

    $("#numerobrut").keypress(function(event) {
        // si on tape sur entrée on transforme le numéro
        if (event.which == 13) {
            Transformer();
        } else {
            // sinon on efface le résultat
            ClearNum();
        }
    });

    $("#numerobrut").keyup(function() {
        // si on efface le numéro, on efface le résultat
        if (!this.value) {
            ClearNum();
        }
    });
});

function Transformer() {
    let numeroBrut = $('#numerobrut').val();
    let numFormate = "";
    let i = 0;

    tabNum = numeroBrut.split("");
    tabNum.forEach(element => {
        i++;
        numFormate += element;
        if (i %2 == 0) {
            numFormate += " ";
        }
    });

    $('#numeroformate').val(numFormate);
}

function ClearNum() {
    $('#numeroformate').val('');
}