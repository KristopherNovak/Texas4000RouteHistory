const TitleBox = ({text})=>{
    return(
    <div className="Title-Box">
        <h1 className="Title-Box__Title">{text}</h1>
        <p className="Title-Box__Name">Kristopher Novak ©2024</p>
        <p className="Title-Box__Email">kristophersnovak@gmail.com</p>
    </div>
    )
}

export default TitleBox;