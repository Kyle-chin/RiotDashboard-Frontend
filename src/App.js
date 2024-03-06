import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [searchText, setSearchText] = useState("");
  const [masteryList, setMasteryList] = useState([]);
  const [playerData, setPlayerData] = useState([]);

  function getPlayer(event){
    axios.get("http://localhost:4000/getPlayerGeneral", { params: { username: searchText }})
    .then(function (response) {
      setPlayerData(response.data)
    }).catch(function (error){
      console.log(error);
    });
  }

  function getPlayerChampionMastery(event){
    axios.get("http://localhost:4000/allChampionMastery", { params: { username: searchText }})
      .then(function (response) {
        setMasteryList(response.data)
      }).catch(function (error){
        console.log(error);
      });
  }

  console.log(playerData)
  console.log(masteryList);

  return (
    <div className="App">
      <h2>Riot API App With Proxy Server</h2>
      <input type="text" onChange={e => setSearchText(e.target.value)}></input>
      <button onClick={getPlayer}>Get Player Data</button>
      <button onClick={getPlayerChampionMastery}>Get Player Champion Mastery</button>
    </div>
  );
}

export default App;
