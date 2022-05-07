import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import MyContext from "../../Context/Context";

export function PetCard(props: any) {
  const { allPets, setAllPets } = useContext(MyContext);

  const navigate = useNavigate();

  const adopte = () => {};

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={allPets[props.id - 1].photo.thumb}
          alt="pet photo"
        />
        <Card.Body>
          <Card.Title>
            <h3>Nome: {allPets[props.id - 1].name}</h3>
          </Card.Title>
          <Card.Text>
            <h4>Peso: {allPets[props.id - 1].weight} KG</h4>
            <h4>Idade: {allPets[props.id - 1].age} meses</h4>
          </Card.Text>
          <Button onClick={() => navigate("/home")}>Voltar</Button>
          <Button variant="success" onClick={() => adopte()}>
            Adotar
          </Button>
          <h2>
            {allPets[props.id - 1].favorite === false ? (
              <AiOutlineStar cursor={"pointer"} />
            ) : (
              <AiFillStar cursor={"pointer"} />
            )}
          </h2>
        </Card.Body>
      </Card>
    </>
  );
}
