import React, {useEffect, useState} from "react";
import { Navbar, GithubCard, Pagination } from "../Molecules";
import { useSelector, useDispatch } from "react-redux";
import { setRepos } from "../../actionTypes/actionType";
import { fetchRepositories } from "../../utils/axios";
import {FilterDropdown} from "../Atoms";

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

  const repos = useSelector((state) => state.repos);
  const filter = useSelector((state) => state.filter);

  let filteredRepos = [...repos];

  if (filter === "alphabetical") {
    filteredRepos = filteredRepos.slice().sort((a, b) => a.name.localeCompare(b.name));
  } else if (filter === "updated_at") {
    filteredRepos = filteredRepos.slice().sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
  } else if (filter === "language") {
    // Group repositories by language
    const groupedRepos = filteredRepos.reduce((acc, repo) => {
      const language = repo.language || "ZZUnknown"; // Use "Unknown" if language is not defined
      if (!acc[language]) {
        acc[language] = [];
      }
      acc[language].push(repo);
      return acc;
    }, {});

    filteredRepos = Object.values(groupedRepos).flat();
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  let displayedRepos = filteredRepos?.slice(startIndex, endIndex);

  return (
    <>
      <Navbar />
      <div className="centered-container">
      <div style={{ width: "70%", display: "flex", justifyContent: "flex-end", alignItems: "flex-end"}}>
        <FilterDropdown />
      </div>
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
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </>
  );
}

