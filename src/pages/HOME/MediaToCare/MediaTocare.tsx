function MediaToCare() {
    const mediasToCare = [];

    return(
        <div className="scrollbar">
            {mediasToCare.map((media, index) => (
                <img src={media} key={media[index]}/>
            ))}
        </div>
    )
}
export default MediaToCare;