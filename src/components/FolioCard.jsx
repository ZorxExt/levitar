import portafolioIMGs from "../assets/portafolioIMGs"

export default function FolioCard(){
    return(
        
        <div className="grid lg:grid-cols-2 lg:grid-rows-2">
            {portafolioIMGs.map((img, index) => {
               return <div className="py-2 px-0.5"><img className="min-h-60 object-cover rounded-lg" src={img} key={index} alt="" /></div>
            })}
        </div>

    )
}