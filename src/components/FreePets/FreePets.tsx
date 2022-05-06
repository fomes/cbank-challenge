import pets from "../../API/pets.json";
import { iPet } from "../interfaces";
import './styles.css';

export function FreePets() {
  return (
    <>
      <table>
        <thead>
          <td>Pets</td>
          <td>Species</td>
          <td>Photo</td>
        </thead>
        <tbody>
          <td>
            {pets.map((pet: iPet) => (
              <tr>{pet.name}</tr>
            ))}
          </td>
          <td>
            {pets.map((pet: iPet) => (
              <tr>{pet.species}</tr>
            ))}
          </td>
          <td>
            {/* {pets.map((pet: iPet) => (
              <tr>
                <img className="img-pet" src={pet.photo} alt="pet image" />
              </tr>
            ))} */}
          </td>
        </tbody>
      </table>
    </>
  );
}
