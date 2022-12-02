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
    {
      name: "Jill",
      lastname: "Doe",
      age: 23,
      course: "Marketing",
    },
    {
      name: "John",
      lastname: "Doe",
      age: 20,
      course: "Web Development",
    },
    {
      name: "Jack",
      lastname: "Doe",
      age: 22,
      course: "Accounting",
    },
    {
      name: "Ryan",
      lastname: "Ray",
      age: 20,
      course: "Web Development",
    },
    {
      name: "Jane",
      lastname: "Doe",
      age: 21,
      course: "Financial Management",
    },
    {
      id: 1,
      name: "John",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
    },
    {
      id: 2,
      name: "Jane",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
    },
    {
      id: 3,
      name: "Jack",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
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

          //study key value could also be an object....

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
