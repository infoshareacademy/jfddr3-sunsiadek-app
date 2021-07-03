import React from 'react';
import { db } from '../../firebase-config';
import firebase from 'firebase';
import { useAuth } from '../../context/AuthProvider';

export default function AddingAds() {
  const category = document.getElementById('category');
  const title = document.getElementById('title');
  const descriptions = document.getElementById('descriptions');
  const myDateCreated = firebase.firestore.Timestamp.fromDate(new Date());
  const { currentUser } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();

    // // konwert daty na czytelny
    // const myDateConvert = myDate.toDate();
    // console.log(myDateConvert);

    const checkedGiveOrTake = document.querySelector(
      'input[name=give-take]:checked'
    ).value;
    const data = {
      author: currentUser.email,
      category: category.value,
      title: title.value,
      descriptions: descriptions.value,
      givetake: checkedGiveOrTake,
      dateCreated: myDateCreated,
      status: 'active'
    };
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
          <textarea
            style={{ height: 100, width: 400 }}
            required
            id="descriptions"
            name="descriptions"
          ></textarea>
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

// const date = new Date();
// let h = date.getHours();
// let m = date.getMinutes();
// let s = date.getSeconds();
// const date2 = new Date();
// let day = date2.getDate();
// let month = date2.getMonth() + 1;
// let year = date2.getFullYear();
