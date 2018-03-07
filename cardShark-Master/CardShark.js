// (function( $ ){

  let shade = "#556b2f";

  $.fn.cardShark = function(action, comfiguration){
    if(action === 'config'){     // plugin Configuration will do the setup to allow adding new cards of a specific type.
      console.log("We've effectively set the configuration scope for the plugin.");
    }
    if(action === ''){           // without a set action type we understand that the purpose of this call is to display a card of a specific type
      if(configuration.type){

      }
    }

    this.css('color', shade);
    return this;
  };

// }( jQuery ));
