import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [playerSearchText, setPlayerSearchText] = useState("");
  const [tagSearchText, setTagSearchText] = useState("");
  const [masteryList, setMasteryList] = useState([]);
  const [playerData, setPlayerData] = useState([]);
  const [returnMessage, setReturnMessage] = useState("");
  const [accountInfo, setAccountInfo] = useState([]);

  function getAccount(event){
    const player = `${playerSearchText}/${tagSearchText}` ;
    axios.get("http://localhost:4000/getAccount", { params: { player: player }})
    .then(function (response) {
      setAccountInfo(response.data)
    }).catch(function (error){
      console.log(error);
    });
  }
  function getPlayer(event){
    const player = `${playerSearchText}/${tagSearchText}` ;
    axios.get("http://localhost:4000/getPlayerGeneral", { params: { player: player }})
    .then(function (response) {
      setPlayerData(response.data)
    }).catch(function (error){
      console.log(error);
    });
  }

  function getPlayerChampionMastery(event){
    const player = `${playerSearchText}/${tagSearchText}` ;
    axios.get("http://localhost:4000/allChampionMastery", { params: { player: player }})
      .then(function (response) {
        setMasteryList(response.data)
        console.log(masteryList)
      }).catch(function (error){
        console.log(error);
      });
  }

  function postPlayer(event){
    const postPlayerData = {
      id: playerData.id,
      accountId: playerData.accountId,
      puuid: playerData.puuid,
      name: playerData.name,
      profileIconId: playerData.profileIconId,
      revisionDate: playerData.revisionDate,
      summonerLevel: playerData.summonerLevel
    }
    if(Object.keys(playerData).length > 0){
      axios.post("http://localhost:4000/updatePlayer", postPlayerData)
        .then(function (response) {
          setReturnMessage(response.data)
        })
        .catch(function (error){
          console.log(error);
        });
    }
  }
  
  function postAccount(event){
    const postAccountData = {
      puuid: accountInfo.puuid,
      gameName: accountInfo.gameName,
      tagLine: accountInfo.tagLine
    }
    if(Object.keys(accountInfo).length > 0){
      axios.post("http://localhost:4000/updateAccount", postAccountData)
        .then(function (response) {
          setReturnMessage(response.data)
        })
        .catch(function (error){
          console.log(error);
        });
    }
  }
  //need both get account + get mastery to work correctly
  function postPlayerChampionMastery(event){
    const postPlayerMastery = {
      gameName: accountInfo.gameName,
      champMastery: masteryList
    }
    if(Object.keys(masteryList).length > 0){
      console.log("Champion Mastery has more than 1")
      axios.post("http://localhost:4000/updateSummonerChampionMasteries", postPlayerMastery)
        .then(function (response) {
          setReturnMessage(response.data)
        })
        .catch(function (error){
          console.log(error);
        });
    }
  }

    console.log(accountInfo);
    console.log(playerData);
    console.log(returnMessage);
    console.log(masteryList);


    // need to make buttons only available to admin
    // only be seen if they fullfill the prereq of having data for post
    
  return (
    <div className="App">
      <h2>Riot API App With Proxy Server</h2>
      <input type="text" onChange={e => setPlayerSearchText(e.target.value)}></input>
      <input type="text" onChange={e => setTagSearchText(e.target.value)}></input>
      <button onClick={getAccount}>Get Player Account Data</button>
      <button onClick={getPlayer}>Get Player Data</button>
      <button onClick={getPlayerChampionMastery}>Get Player Champion Mastery</button>
      <button onClick={postPlayer}>Post Player Data</button>
      <button onClick={postAccount}>Post Player Account</button>
      <button onClick={postPlayerChampionMastery}>Post Player Champion Mastery</button>
    </div>
  );
}

export default App;
