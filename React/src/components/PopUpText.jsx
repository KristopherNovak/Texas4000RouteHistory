export const PopUpText = ({city, entries})=>{
    return(
    <>
      <strong><em><u>{city}</u></em></strong>
      <br />
      {entries.map((entry)=> <div key = {entry.route+entry.year+entry.day}><strong>{entry.year} {entry.route}</strong>- Day {entry.day} ({entry.calendarDate})</div>)}
    </>
    )
  }