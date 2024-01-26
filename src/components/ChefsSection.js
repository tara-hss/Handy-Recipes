import ChefCard from "./ChefCard"

export default function ChefsSection() {
    const chefs = [
        {
            name: "John Kanell",
            img: "/img/chefs/img-1.jpeg",
            recipesCount: 10,
            cuisine: "Americain - French"
        },
        {
            name: "Akis Petretzikis",
            img: "/img/chefs/img-2.jpeg",
            recipesCount: 10,
            cuisine: "Greek"
        },
        {
            name: "Refika Birgül",
            img: "/img/chefs/img-3.jpeg",
            recipesCount: 10,
            cuisine: "Turkish"
        },
        {
            name: "Javad Javadi",
            img: "/img/chefs/img-4.jpeg",
            recipesCount: 10,
            cuisine: "Iranian"
        },
        {
            name: "Jamie Oliver",
            img: "/img/chefs/img-5.jpeg",
            recipesCount: 10,
            cuisine: "British"
        },
        {
            name: "Marion Grasby",
            img: "/img/chefs/img-6.jpeg",
            recipesCount: 10,
            cuisine: "Australian - Asian"
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