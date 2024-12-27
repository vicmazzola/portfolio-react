import {Link} from "react-router";

export default function Header() {
    return (
        <header>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <button className="btn">Button</button>
            <nav>
                <Link to="/">Home</Link><br/>
                <Link to="/projects">Projects</Link><br/>
                <Link to="/skills">Skills</Link><br/>
                <Link to="/aboutme">About-me</Link><br/>
            </nav>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </header>


    )
}