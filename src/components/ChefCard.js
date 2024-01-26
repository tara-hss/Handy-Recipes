import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

export default function ChefCard({chef}) {
    return (
        <div className="chef-card">
            <div className="chef-image">
                <img src={chef.img} alt="" />
            </div>
            <div className="chef-info">
                <h1 className="chef-name">
                    {chef.name}
                </h1>
                <p className="chef-recipe-count">
                    Recipes: <b>{chef.recipesCount}</b>
                </p>
                <p className="chef-cuisine">
                    Cuisine: <b>{chef.cuisine}</b>
                </p>
                <p className="chef-icons">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagram} />
                </p>
            </div>
        </div>
    )
}