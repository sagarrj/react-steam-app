import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
import SideBar from "./SideBar";
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

const HomeScreen = () => {
  return (
    <>
      <PageHeader />
      <section className="app-body">
        <SideBar />
        <section className="app-main">
          <button type="button" className="btn btn-primary">
            Add Game
          </button>
          <div className="row">
            {cards.map((c, index) => {
              return <Card key={index} {...c}></Card>;
            })}
          </div>
        </section>
      </section>
      <PageFooter />
    </>
  );
};

export default HomeScreen;
