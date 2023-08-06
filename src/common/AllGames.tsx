import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Card, { CardProps } from "./Card";

const cards: CardProps[] = [
  {
    gameId: "1",
    imageUrl: "/game-img.jpg",
    title: "Call of Duty",
    desc: "FPP game",
  },
  {
    gameId: "2",
    imageUrl: "/game-img.jpg",
    title: "BGMI",
    desc: "bgmi india is a ...",
  },
  {
    gameId: "3",
    imageUrl: "/game-img.jpg",
    title: "Tetris",
    desc: "basic nintendo game ...",
  },
  {
    gameId: "4",
    imageUrl: "/game-img.jpg",
    title: "Tetris",
    desc: "basic nintendo game ...",
  },
  {
    gameId: "5",
    imageUrl: "/game-img.jpg",
    title: "Tetris",
    desc: "basic nintendo game ...",
  },
];

const AllGames = () => {
  return (
    <>
      <section className="app-main">
        <button type="button" className="btn btn-primary add-games">
          <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon>
        </button>
        <div className="row">
          {cards.map((c, index) => {
            return <Card key={index} {...c}></Card>;
          })}
        </div>
      </section>
    </>
  );
};

export default AllGames;
