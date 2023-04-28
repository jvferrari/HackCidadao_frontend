function ShowAllPets() {
    const allPets = [];

    return(
        <div className="scrollbar">
            {allPets.map((pet, index) => (
                <img src={pet} key={pet[index]}/>
            ))}
        </div>
    )
}
export default ShowAllPets;