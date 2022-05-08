import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import MyContext from "../../Context/Context";
import { iPet } from "../interfaces";

export function PetCard(props: any) {
  const { allPets, setAllPets } = useContext(MyContext);
  const { favorites, setFavorites } = useContext(MyContext);

  const petInfo = allPets.find((item: any) => item.id == props.id);
  const { name, photo, weight, age } = petInfo;

  const navigate = useNavigate();

  const adopte = () => {};

  const isFavorite = (id: number) => {
    if (favorites.some((item: any) => item.id == id)) {
      return true;
    } else {
      return false;
    }
  };

  const toggleFavorite = (id: number) => {
    const newFavorite = allPets.filter((item: any) => item.id == id)[0];

    if (isFavorite(id)) {
      setFavorites(favorites.filter((item: any) => item.id !== id));
    } else {
      setFavorites((prev: any) => [...prev, newFavorite]);
    }
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={photo.thumb} alt="pet photo" />
        <Card.Body>
          <Card.Title>
            <h3>Nome: {name}</h3>
          </Card.Title>
          <Card.Text>
            <p>Peso: {weight} KG</p>
            <p>Idade: {age} meses</p>
          </Card.Text>
          <Button onClick={() => navigate("/home")}>Voltar</Button>
          <Button variant="success" onClick={() => adopte()}>
            Adotar
          </Button>
          <h2>
            <span className="pointer" onClick={() => toggleFavorite(props.id)}>
              {isFavorite(props.id) ? <AiFillStar /> : <AiOutlineStar />}
            </span>
          </h2>
        </Card.Body>
      </Card>
    </>
  );
}
