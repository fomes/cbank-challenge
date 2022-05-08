import "./styles.css";
import { useContext, useEffect, useState } from "react";
import MyContext from "../../context/Context";
import _ from "lodash";
import { TablePets } from "../TablePets/TablePets";
import { iPet } from "../../interfaces";

const pageSize = 10;

export function PetList() {
  const { allPets, setAllPets } = useContext(MyContext);
  const { favorites } = useContext(MyContext);

  const [pagesPets, setPagesPets] = useState<iPet[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (allPets.length == 0) {
      fetch("/API/pets.json")
        .then((resp) => resp.json())
        .then((data) => {
          setAllPets(data);
          setPagesPets(_(data).slice(0).take(pageSize).value());
        });
    }
  }, []);

  useEffect(() => {
    setPagesPets(
      pagesPets.filter((pet: iPet) =>
        pet.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, setPagesPets]);

  const pageCount = allPets ? Math.ceil(allPets.length / pageSize) : 0;
  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);

  const pagination = (pageNum: number) => {
    setCurrentPage(pageNum);
    const startIndex = (pageNum - 1) * pageSize;
    const paginatedPets = _(allPets).slice(startIndex).take(pageSize).value();
    setPagesPets(paginatedPets);
  };

  return (
    <>
      <div className="table-container">
        <input
          type={"text"}
          placeholder="Buscar por nome"
          onChange={(e) => setSearch(e.target.value)}
        />{" "}
        <TablePets
          pagesPets={pagesPets}
          favorites={favorites}
          allPets={allPets}
        />
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
