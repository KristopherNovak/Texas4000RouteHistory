

//Component that displays the symbols used to represent each route and each combination of routes
// (e.g., if two routes are at the same place)- is essentially a map legend
export const RouteBox = ({routeSymbols})=>{
  
    //TODO: Change all Symbol-Box instances to Route-Box
    return(
      <div className="Symbol-Box">
        <h3 className ="Symbol-Box__header">Symbols</h3>
        {routeSymbols.map((symbol) => <RouteTag key = {"Symbol-Box-" + symbol.name} symbol={symbol}/>)}
      </div>
    )
  }
  
  //Class that represents each route symbol displayed in the Route Box
  export class RouteSymbol{
    constructor(name, imageURL, text){
      this.name = name;
      this.imageURL = imageURL;
      this.text = text;
    }
  }
  
  //Component that represents a combination of a route symbol image and its corresponding text
  //Example: A picture of the Rockies symbol next to the the text "Rockies route"
  const RouteTag = ({symbol})=>{
  
    let imageClasses = "Symbol-Box__Image Symbol-Box__" + hyphenate(symbol.name) + "-Image";
    let textClasses = "Symbol-Box__Text Symbol-Box__" + hyphenate(symbol.name) + "-Text";
  
    return(
    <>
      <img key = {imageClasses} className = {imageClasses} src={symbol.imageURL}/>
      <p key = {textClasses} className = {textClasses}>{symbol.text}</p>
    </>
    )
  }

  function hyphenate(sentence){
    return sentence.replaceAll(' ', '-');
  }