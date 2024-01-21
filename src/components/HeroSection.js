import CustomImage from "./CustomImage"

export default function HeroSection() {
    const images =[
        "/img/gallery/img-1.jpg",
        "/img/gallery/img-2.jpg",
        "/img/gallery/img-3.jpg",
        "/img/gallery/img-4.jpg",
        "/img/gallery/img-5.jpg",
        "/img/gallery/img-6.jpg",
        "/img/gallery/img-7.jpg",
        "/img/gallery/img-8.jpg",
        "/img/gallery/img-9.jpg"
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
                    <CustomImage key={index} imgSrc={src} pt={"85%"} />
                )}
            </div>
        </div>
    )
}