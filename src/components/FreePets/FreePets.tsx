import { iPet } from "../interfaces";
import { Table } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./styles.css";
import { useContext, useEffect, useState } from "react";
import MyContext from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

const pageSize = 10;

export function FreePets() {
  // const [allPets, setAllPets] = useState<iPet[]>([]);
  const { allPets, setAllPets } = useContext(MyContext);
  const { idPetCard, setIdPetCard } = useContext(MyContext);

  const [pagesPets, setPagesPets] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/API/pets.json")
      .then((resp) => resp.json())
      .then((data) => {
        setAllPets(data);
        setPagesPets(_(data).slice(0).take(pageSize).value());
      });
  }, []);

  const showPetCard = (id: number) => {
    setIdPetCard(id);
    navigate("/card");
  };

  const toggleFavorite = (id: number) => {};

  const pageCount = allPets ? Math.ceil(allPets.length / pageSize) : 0;
  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);

  const pagination = (pageNum: any) => {
    setCurrentPage(pageNum);
    const startIndex = (pageNum - 1) * pageSize;
    const paginatedPets = _(allPets).slice(startIndex).take(pageSize).value();
    setPagesPets(paginatedPets);
  };

  return (
    <>
      <h3 className="">Animais Disponíveis</h3>
      <div className="table-container">
        <Table striped bordered hover size="sm" className="text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Foto</th>
              <th>Nome</th>
              <th>Favoritos</th>
            </tr>
          </thead>
          {pagesPets.map((pet: iPet) => (
            <tbody>
              <tr key={pet.id}>
                <td>{pet.id}</td>
                <td>
                  <img
                    className="img-pet"
                    src={pet.photo.thumb}
                    alt="pet photo"
                  />
                </td>
                <td className="pointer" onClick={() => showPetCard(pet.id)}>
                  {pet.name}
                </td>
                <td>
                  <h2>
                    {
                      pet.favorite === false
                        ? <AiOutlineStar cursor={"pointer"} />
                        : <AiFillStar cursor={"pointer"} />
                    }                  
                  </h2>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>

        <nav className="d-flex justify-content-center">
          <ul className="pagination">
            {pages.map((page) => (
              <li
                className={
                  page === currentPage ? "page-item active" : "page-item"
                }
              >
                <p
                  className="page-link pointer"
                  onClick={() => pagination(page)}
                >
                  {page}
                </p>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
