export default function Card({title, cover,id}){
    return (
        <>
            <div className="card">
                <p>{title}</p>
                <img src={cover} alt="cover"/>
            </div>
        </>
    )
}