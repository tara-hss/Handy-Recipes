import ChefCard from "./ChefCard"

export default function ChefsSection() {
    const chefs = [
        {
            name: "John Kanell",
            img: "/img/chefs/img-1.jpeg",
            recipesCount: 10,
            cuisine: "Americain"
        },
        {
            name: "John Kanell",
            img: "/img/chefs/img-1.jpeg",
            recipesCount: 10,
            cuisine: "Americain"
        },
        {
            name: "John Kanell",
            img: "/img/chefs/img-1.jpeg",
            recipesCount: 10,
            cuisine: "Americain"
        },
        {
            name: "John Kanell",
            img: "/img/chefs/img-1.jpeg",
            recipesCount: 10,
            cuisine: "Americain"
        },
        {
            name: "John Kanell",
            img: "/img/chefs/img-1.jpeg",
            recipesCount: 10,
            cuisine: "Americain"
        },
        {
            name: "John Kanell",
            img: "/img/chefs/img-1.jpeg",
            recipesCount: 10,
            cuisine: "Americain"
        }
    ]

    return (
        <div className="section chefs">
            <h1>Our Top Chefs</h1>
            <div className="chefs-container">
                { chefs.map(chef => <ChefCard key={chef.name} chef={chef} /> )}
            </div>
        </div>
    )
}