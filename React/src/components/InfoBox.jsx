
export class DisplayInfo{
    constructor(boxName, title, information){
        this.boxName = boxName;
        this.title = title;
        this.information = information;
    }
}


const InfoBox = ({displayInfo})=>{
    return(
      <div className= {displayInfo.boxName+"-Box"}>
        <h3 className={displayInfo.boxName+"-Box__header"}>{displayInfo.title}</h3>
        <div>
          <p className={displayInfo.boxName+"-Box__text"}>
          {displayInfo.information}
          </p>
        </div>
      </div>
    )
  }

  export default InfoBox;