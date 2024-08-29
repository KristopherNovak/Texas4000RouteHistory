  //Class that represents each year symbol displayed in the Year Box
  export class YearSymbol{
    constructor(year, imageURL){
      this.year = year;
      this.imageURL = imageURL;
    }
  }

//Component that displays the symbols used to represent each year or multiple years (is essentially a map legend)
export const YearBox = ({yearSymbols})=>{
  
    return(
      <div key ={"Year-Box"} className = "Year-Box">
        <h3 key ={"Year-Box__header"} className ="Year-Box__header">Years</h3>
        {yearSymbols.map((yearSymbol)=><YearTag key={"Year-Box-" + hyphenate(yearSymbol.year)} yearSymbol={yearSymbol}/>)}
      </div>
    );
  }
  
  //Component that represents a combination of a year symbol image and its corresponding text
  //Example: A picture of the 2004 Sierra symbol with text next to it saying "2004"
  const YearTag = ({yearSymbol})=>{
  
    let imageClasses = "Year-Box__Image Year-Box__Image-" + hyphenate(yearSymbol.year);
    let textClasses = "Year-Box__Text Year-Box__Text-" + hyphenate(yearSymbol.year);
  
    return(
    <>
      <img key = {imageClasses} className = {imageClasses} src={yearSymbol.imageURL}/>
      <p key = {textClasses} className = {textClasses}>{yearSymbol.year}</p>
    </>
    )
  }

  function hyphenate(sentence){
    return sentence.replaceAll(' ', '-');
  }