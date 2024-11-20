import { useState, useEffect } from "react";
import { getAllMonsters } from "../service/MonsterService";

const useMonster = () => {
  const [monsters, setMonsters] = useState([]);
  const getAllMonstersFromApiService = async () => {
    const data = await getAllMonsters();
    setMonsters(data);
  };

  useEffect(() => {
    getAllMonstersFromApiService();
  }, []);

  return { monsters, setMonsters };
};

export default useMonster;
