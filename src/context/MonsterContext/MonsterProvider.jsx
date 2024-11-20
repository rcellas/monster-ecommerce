import { MonsterContext } from './MonsterContext';
import useMonster from '../../hooks/useMonsters';

const MonsterProvider = ({children}) => {
  const { monsters, setMonsters } = useMonster()
  return (
    <MonsterContext.Provider value={{monsters, setMonsters}}>
        {children}
    </MonsterContext.Provider>
  )
}

export default MonsterProvider