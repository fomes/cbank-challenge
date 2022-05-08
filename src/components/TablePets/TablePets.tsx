import { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { iPet } from "../../interfaces";
import MyContext from "../../context/Context";
import { useNavigate } from "react-router-dom";

export function TablePets(props: any) {
  const { favorites, setFavorites } = useContext(MyContext);
  const { idPetCard, setIdPetCard } = useContext(MyContext);

  const navigate = useNavigate();

  const showPetCard = (id: number) => {
    setIdPetCard(id);
    navigate("/card");
  };

  const adoptePet = (id: number) => {};

  const giveBack = (id: number) => {};

  const isFavorite = (id: number) => {
    if (props.favorites.some((item: iPet) => item.id == id)) {
      return true;
    } else {
      return false;
    }
  };

  const toggleFavorite = (id: number) => {
    const newFavorite = props.allPets.filter((item: iPet) => item.id == id)[0];

    if (isFavorite(id)) {
      setFavorites(favorites.filter((item: iPet) => item.id !== id));
    } else {
      setFavorites((prev: any) => [...prev, newFavorite]);
    }
  };

  return (
    <Table striped bordered hover size="sm" className="text-center">
      <thead>
        <tr>
          <th>#</th>
          <th>Foto</th>
          <th>Nome</th>
          <th>Favoritos</th>
          <th>Disponível</th>
          <th>Adoção</th>
          <th>Detalhes</th>
        </tr>
      </thead>
      {props.pagesPets.map((pet: iPet) => (
        <tbody>
          <tr key={pet.id}>
            <td>{pet.id}</td>
            <td>
              <img className="img-pet" src={pet.photo.thumb} alt="pet photo" />
            </td>
            <td>{pet.name}</td>
            <td>
              <h2>
                <span
                  className="pointer"
                  onClick={() => toggleFavorite(pet.id)}
                >
                  {isFavorite(pet.id) ? <AiFillStar /> : <AiOutlineStar />}
                </span>
              </h2>
            </td>
            <td>
              <p className="td-info">{"SIM"}</p>
            </td>
            <td>
              <Button
                variant="success"
                className="pointer"
                onClick={() => adoptePet(pet.id)}
              >
                Adotar
              </Button>
              <Button
                variant="warning"
                className="pointer"
                onClick={() => giveBack(pet.id)}
              >
                Devolver
              </Button>
            </td>
            <td>
              <Button
                variant="info"
                className="pointer"
                onClick={() => showPetCard(pet.id)}
              >
                Detalhes
              </Button>
            </td>
          </tr>
        </tbody>
      ))}
    </Table>
  );
}
