import pets from "../../API/pets.json";
import { iPet } from "../interfaces";
import { Table } from "react-bootstrap";
import { AiOutlineStar } from "react-icons/ai";
import "./styles.css";

export function FreePets() {
  return (
    <>
      <h3 className="text-center">Animais Disponíveis</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Pets</th>
            <th>Photo</th>
            <th>Favorites</th>
          </tr>
        </thead>
        {pets.map((pet: iPet) => (
          <tbody>
            <tr>
              <td>{pet.id}</td>
              <td>{pet.name}</td>
              <td>
                <img className="img-pet" src={pet.photo} alt="pet image" />
              </td>
              <td>
                <h2>
                  <AiOutlineStar cursor={"pointer"}>Add</AiOutlineStar>
                </h2>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </>
  );
}
