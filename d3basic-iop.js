/**
 * Created by Jon on 22/06/16.
 */



var node = document.getElementById("d3basic");
var app = Elm.TestInterop.embed(node);

app.ports.check.subscribe( data => {

  var dataProcessedItems = [data[0].toUpperCase()];
  app.ports.dataProcessedItems.send(dataProcessedItems);
});
