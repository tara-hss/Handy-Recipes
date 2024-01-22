import CustomImage from "./CustomImage"

export default function HeroSection() {
    const images =[
        "/img/gallery/img-1.jpeg",
        "/img/gallery/img-2.jpeg",
        "/img/gallery/img-3.jpeg",
        "/img/gallery/img-4.jpeg",
        "/img/gallery/img-5.jpeg",
        "/img/gallery/img-6.jpeg",
        "/img/gallery/img-7.jpeg",
        "/img/gallery/img-8.jpeg",
        "/img/gallery/img-9.jpeg"
    ] 
    
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">
                    What is this about
                </h1>
                <p className="info">
                    Heirloom Kitchen Treasures is a place where you can please your soul and tummy. 
                </p>
                <button className ="btn">
                     Explore Now
                </button>
            </div>
            <div className="col gallery">
                { images.map((src, index) => 
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                )}
            </div>
        </div>
    )
}