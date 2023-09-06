
import Mainhero from '../../Hero/Mainhero';
import "../../Hero/hero.css"
import "./events.css"

const css = [
    { id: 1, class: "hero-slide-1", text1: "text-1", text2: "text-2", content: "Coming Soon" },
    { id: 2, class: "hero-slide-2", text1: "text-3", text2: "text-4", content: "Coming Soon" },
    { id: 1, class: "hero-slide-1", text1: "text-1", text2: "text-2", content: "Coming Soon" },
    { id: 2, class: "hero-slide-2", text1: "text-3", text2: "text-4", content: "Coming Soon" }
];

function Heroslider(css) {
    return <Mainhero slide={css.class} text1={css.text1} text2={css.text2} content={css.content} />;
}

const Events = () => {
    return (
        <>
            <div className="event-header">
                <h1>Events</h1>
            </div>
            <div className="hero-container event-container">{css.map(Heroslider)}</div>
        </>
    );
};

export default Events;