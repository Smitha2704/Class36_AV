class Form {
  constructor(){

  }

  display(){
    var title = createElement('h1');
    title.position(130,0);
    title.html("Car Racing Game");

    var input = createInput("Name");
    var button = createButton("Play");

    input.position(140, 200);
    button.position(250,250);


    button.mousePressed(function(){
      input.hide();
      button.hide();

      var name = input.value();

      var greeting = createElement('h2');
      greeting.position(170, 200);
      greeting.html("Hello "+name);

    })
  }
}