
var nombre = document.getElementById('id-name-texture');

var selector = document.getElementById('Generator');
var manifiesto = document.getElementById('id-manifest');
var icon = document.getElementById('id-pack-icon');

var boton = document.getElementById('download');

//control variables
var mani = false;
var ico = false;
var tradi = false;
var loot = false;
var looty = { chest: false, entities: false, gamepl: false, equipm: false };
var enti = false;

boton.addEventListener('click', getData);

function getData() {

    var aux = nombre.value;

    //name of repository
    if (aux === '') {
        nombre.value = 'default';
        alert('generating files under the \'default\' name');
    }
    else {
        alert('generatin files u the \'' + aux + '\' name');
    }

    //manifest-pack-icon
    if (manifiesto.checked === true) {
        mani = true;
    }
    if (icon.checked === true) {
        ico = true;
    }

    //generating files function
    checking();

    //reset values
    mani = false;
    ico = false;
    tradi = false;
    loot = false;
    looty = { chest: false, entities: false, gamepl: false, equipm: false };
    enti = false;
}

function checking() {
    console.log('cosas a generar');
    console.log('nombre del pack: ' + nombre.value);
    console.log('generator: ' + selector.value);
    console.log('manifiesto: ' + mani);
    console.log('icono: ' + ico);
}