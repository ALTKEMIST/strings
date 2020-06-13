function generate_string(){
    var length=20;
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?*@#$%&!.';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    generated.value=result;
}

var clipboard = new Clipboard('.copyButton');
clipboard.on('success', function(e) {
    alert("Copied!")
});
clipboard.on('error', function(e) {
    alert("An unexpected error has occurred.");
});


