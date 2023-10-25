import React, {useEffect, useState} from "react";
import { Navbar, GithubCard } from "../Molecules";
import { useSelector, useDispatch } from "react-redux";
import { setRepos } from "../../actionTypes/actionType";
import { fetchRepositories } from "../../utils/axios";
import { IconButton } from "@mui/material";
import { KeyboardArrowRight, KeyboardArrowLeft } from '@mui/icons-material';

export function Projects() {

    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await fetchRepositories();
            dispatch(setRepos(data));
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [dispatch]);

    const repos = useSelector((state) => state.repos)
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedRepos = repos?.slice(startIndex, endIndex);
    const totalPages = Math.ceil(repos?.length / itemsPerPage);

    return (
        <>
          <Navbar />
          <div className="centered-container">
            {displayedRepos?.map((repo) => (
              <GithubCard 
                key={repo.id}
                name={repo.name}
                repoURL={repo.html_url}
                description={repo.description}
                createdAt={repo.created_at}
                updatedAt={repo.updated_at}
                homepage={repo.homepage}
                language={repo.language}
                topics={repo.topics}
              />
            ))}
            <div className="pagination">
                <IconButton
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <KeyboardArrowLeft />
                </IconButton>
                <ul>
                {[...Array(totalPages)].map((_, index) => (
                    <li key={index}>
                    <button
                        onClick={() => setCurrentPage(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                    </li>
                ))}
                </ul>
                <IconButton
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={endIndex >= repos?.length}
                >
                    <KeyboardArrowRight />
                </IconButton>
            </div>
          </div>
        </>
      );
}
