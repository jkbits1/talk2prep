/**
 * Created by Jon on 22/06/16.
 */



var node = document.getElementById("d3basic");
var app = Elm.TestInterop.embed(node);

app.ports.check.subscribe( data => {

  showCircle(data);

  var names = data[0].map(val => val.name);

  var dataProcessedItems = [names[0].toUpperCase()];
  app.ports.dataProcessedItems.send(dataProcessedItems);
});
