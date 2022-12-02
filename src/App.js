import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [searchValue, setSearchValue] = useState("");

  let studies = [
    {
      name: "programmeur",
      location: "eindhoven",
      taal: "nederlands",
      hits: 0,
    },
    {
      name: "tester",
      location: "rotterdam",
      taal: "nederlands",
      hits: 0,

    },
    {
      name: "security",
      location: "denhaag",
      taal: "engels",
      hits: 0,
    },
    {
      name: "management",
      location: "delft",
      taal: "engels",
      hits: 0,
    },
  ]


  if (searchValue) {
    console.log("SearchValue: ", searchValue);
    console.log("studies: ", studies);

    const splitted = searchValue.split(" ").filter(element => element);

    let SearchedStudies = [];

    for (let a = 0; a < studies.length; a++) {
      const study = studies[a];
      let criteriaHits = 0;

      for (let b = 0; b < splitted.length; b++) {
        const searchValue = splitted[b];

        const studyKeys = Object.keys(study);
        for (let c = 0; c < studyKeys.length; c++) {
          const studyKey = studyKeys[c];
          const studyKeyValue = study[studyKey].toString();

          if (studyKeyValue.includes(searchValue)) {
            criteriaHits++;
          }
        }
      }

      if (criteriaHits > 0) {
        const finalStudy = { ...study, hits: criteriaHits }
        SearchedStudies.push(finalStudy)
      }
    }

    studies = SearchedStudies;

  }

  studies.sort((a, b) => {
    if (a.hits < b.hits) return 1;
    if (a.hits > b.hits) return -1;
    return 0;
  })


  return (
    <div className="App">
      <p>Search!</p>
      <input onChange={(e) => setSearchValue(e.target.value)} type="text" />

      <p>Items found:</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
        {studies.map((study, i) => {

          return (
            <div style={{ padding: "5px", width: "fit-content", backgroundColor: "grey" }} key={i}>
              <p>
                {study.name}
              </p>
              <p>
                {study.location}
              </p>
              <p>
                {study.taal}
              </p>
              <p>
                {`hits: ${study.hits}`}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
