import { useState } from 'react';

const SyntheticEvents = () => {
  const [superhero, setSuperhero] = useState('');

  const handleSuperheroChange = e => {
    console.log(e);
    setSuperhero(e.target.value);
  };

  return (
    <section>
      <div className="mb-4 mt-4">
        <h1 className="display-6">Synthetic Events</h1>
      </div>
      <div className="mb-4">
        <h4>My Form</h4>
        <form>
          <div className="mb-3">
            <label htmlFor="superhero" className="form-label">
              Superhero
            </label>
            <input
              type="text"
              id="superhero"
              className="form-control"
              placeholder="A superhero name"
              onChange={handleSuperheroChange}
              value={superhero}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
            ></textarea>
          </div>
        </form>
      </div>
    </section>
  );
};

export { SyntheticEvents };
export default SyntheticEvents;
