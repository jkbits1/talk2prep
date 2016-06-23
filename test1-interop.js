var node = document.getElementById("test1");
var app = Elm.Main.embed(node);

//app.ports.testInterop.subscribe(
//  data => {
//    var dataProcessed = "123";
//    app.ports.processed.send(dataProcessed);
//  }
//);