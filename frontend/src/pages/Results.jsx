import React, { useContext, useState, useEffect } from 'react';
import { TotalsContext } from '../App';

const Results = () => {
  const totals = useContext(TotalsContext);
  console.log(totals.totalScores);
  const [results, setResults] = useState({
    frontend: '',
    css: '',
    runtime: '',
    database: '',
    unit: '',
    end: '',
  });

  const computeFrontend = (frontendScores) => {
    // takes in total.totalScores.frontend
    const options = {
      react: 0,
      angular: 0,
      svelte: 0,
      vue: 0,
    };

    // iterate through keys in frontend incrementing scores
    for (let key of Object.keys(frontendScores)) {
      for (let value of frontendScores[key]) {
        options[value]++;
      }
    }

    let choice = '';
    let max = 0;
    Object.keys(options).forEach((key) => {
      if (options[key] > max) {
        max = options[key];
        choice = key;
      }
    });
    console.log(choice);

    setResults((prevState) => {
      return { ...prevState, frontend: choice };
    });
  };

  const computeRuntime = (runtimeScores) => {
    const options = {
      node: 0,
      deno: 0,
    };

    for (let key of Object.keys(runtimeScores)) {
      for (let value of runtimeScores[key]) {
        options[value]++;
      }
    }

    let choice = '';
    let max = 0;
    Object.keys(options).forEach((key) => {
      if (options[key] > max) {
        max = options[key];
        choice = key;
      }
    });

    setResults((prevState) => {
      return { ...prevState, runtime: choice };
    });
  };

  const setCSS = (cssScores) => {
    if (cssScores[1][0] === 'yes') {
      console.log(cssScores[2][0]);
      setResults((prevState) => {
        return { ...prevState, css: cssScores[2][0] };
      });
    }
  };

  const setDatabase = (databaseScores) => {
    const options = ['mongodb', 'sqlite', 'mysql', 'postgresql'];
    Object.keys(databaseScores).forEach((key) => {
      if (options.includes(databaseScores[key][0]))
        setResults((prevState) => {
          return { ...prevState, database: databaseScores[key][0] };
        });
    });
  };

  const setUnit = (unitScores) => {
    const options = ['jest', 'mocha'];
    Object.keys(unitScores).forEach((key) => {
      if (options.includes(unitScores[key][0]))
        setResults((prevState) => {
          return { ...prevState, unit: unitScores[key][0] };
        });
    });
  };

  const setEnd = (endScores) => {
    const options = ['selenium', 'cypress', 'playwright'];
    Object.keys(endScores).forEach((key) => {
      if (options.includes(endScores[key][0]))
        setResults((prevState) => {
          return { ...prevState, end: endScores[key][0] };
        });
    });
  };

  useEffect(() => {
    computeFrontend(totals.totalScores.frontend);
    computeRuntime(totals.totalScores.runtime);
    setCSS(totals.totalScores.css);
    setDatabase(totals.totalScores.database);
    setUnit(totals.totalScores.devops);
    setEnd(totals.totalScores.devops);
    console.log(results);
  }, []);

  return (
    <div>
      <h1>Results</h1>
      <p>
        Frontend Framework: {results.frontend}
        CSS Framework: {results.css}
        Runtime Environment: {results.runtime}
        Database: {results.database}
        Unit: {results.unit}
        End: {results.end}
      </p>
    </div>
  );
};

export default Results;
