export interface CardProps {
  gameId: string;
  imageUrl: string;
  title: String;
  desc: String;
}

const Card = ({ gameId, imageUrl, title, desc }: CardProps) => {
  return (
    <>
      <div className="card col-md-3" style={{ width: "18rem" }} id={gameId}>
        <img
          src={window.location.origin + imageUrl}
          className="card-img-top"
          alt="image"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <a href="#" className="btn btn-primary">
            Buy Now
          </a>

          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
