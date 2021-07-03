import React from 'react';
import { db } from '../../firebase-config';

export default function AddingAds() {
  const category = document.getElementById('category');
  const title = document.getElementById('title');
  const descriptions = document.getElementById('descriptions');

  function handleSubmit(e) {
    e.preventDefault();
    const checkedGiveOrTake = document.querySelector(
      'input[name=give-take]:checked'
    ).value;
    const data = {
      announcement: descriptions.value,
      givetake: checkedGiveOrTake,
      title: title.value
    };
    console.log(data);
    db.collection('announcements').add(data);
  }

  return (
    <>
      <h2>Dodaj ogłoszenie</h2>
      <form>
        <div>
          <label htmlFor="category">Kategoria</label>
          <select id="category" name="category">
            <option disabled value="">
              Wybierz kategorie
            </option>
            <option value="small-fixes">Small fixes</option>
            <option value="storage">Storage</option>
            <option value="helper">Helper</option>
            <option value="parking-space">Parking space</option>
            <option value="events">Events</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div>
          <label for="title">Tytuł</label>
          <input required id="title" name="title"></input>
        </div>
        <div>
          <label for="descriptions">Opis</label>
          <textarea required id="descriptions" name="descriptions"></textarea>
        </div>
        <fieldset>
          <legend>Wybierz</legend>

          <label for="give">Give</label>
          <input
            required
            id="give"
            name="give-take"
            value="give"
            type="radio"
          ></input>

          <label for="take">Take</label>
          <input id="take" name="give-take" value="take" type="radio"></input>
        </fieldset>
        <button onClick={handleSubmit}>Dodaj</button>
      </form>
    </>
  );
}
