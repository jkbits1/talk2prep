var node = document.getElementById("test1");
var app = Elm.TestInterop.embed(node);

app.ports.check.subscribe(
  data => {
    var dataProcessed = [data.toUpperCase()];
    app.ports.dataProcessedItems.send(dataProcessed);
  }
);