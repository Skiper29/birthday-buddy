import { useState } from "react";

import persons from "./data";
import List from "./components/List";

const App = () => {
  const [people, setPeople] = useState(persons);

  return (
    <main>
      <section className="container">
        <h2>{people.length} Birthdays today</h2>
        <List people={people} />
      </section>
    </main>
  );
};
export default App;
