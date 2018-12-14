/*window.onload = function() {
    //obtengo el nombre de mi archivo
    var nombre = document.getElementById('id-name')
    nombre.value = 'template';

    // ontengo el contenido del textarea
    var txt = document.getElementById('txt');
    txt.value = window.onload + '\nhola \nbb';

    // se genera y descarga el archivo
    document.getElementById('link').onclick = function(code) {
        this.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(txt.value);
        this.download = nombre.value + '.txt'
    }
}
*/