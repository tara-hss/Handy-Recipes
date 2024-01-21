export default function CustomImage({imgSrc, pt}) {
    return (
        <div className="custom-image" style={{paddingTop: pt}}>
            {/* <img src={imgSrc} alt="" /> */}
            <img src="/img/gallery/img-1.jpg" alt="" />
        </div>
    )
}