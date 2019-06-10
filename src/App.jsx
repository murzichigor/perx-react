import React from 'react';

function App() {
  return (
    <div>
      <main>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            // eslint-disable-next-line no-console
            console.log('user submitted');
          }}
        >
          <input
            type="search"
            name="user"
          />
          <button type="submit">search</button>
        </form>

        <section>
          <h2>Repos</h2>
          <ul>
            <li>repo 1</li>
            <li>repo 2</li>
            <li>repo 3</li>
            <li>repo 4</li>
          </ul>
        </section>

        <section>
          <h2>Orgs</h2>
          <ul>
            <li>org 1</li>
            <li>org 2</li>
            <li>org 3</li>
            <li>org 4</li>
          </ul>
        </section>

      </main>
    </div>
  );
}

export default App;
