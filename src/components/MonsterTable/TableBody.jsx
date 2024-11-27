import {
    Tbody,
    Tr,
    Td,
    Image,
    Switch,
    HStack,
    IconButton
} from '@chakra-ui/react'
import EditMonsterAction from './EditMonsterAction'
import DeleteMonsterAction from './DeleteMonsterAction'

function TableBody({monsters}) {
  return (
    <Tbody>
        {monsters.map((monster) => {
            return (
                <Tr key={monster.id}>
                    <Td>{monster.id}</Td>
                    <Td>
                        <Image
                            src={monster.imageUrl}
                            alt={monster.name}
                            objectFit="cover"
                            borderRadius="lg"
                            maxH="80vh"
                            boxSize="50px"
                        />
                    </Td>
                    <Td>{monster.name}</Td>
                    <Td>{monster.price}</Td>
                    <Td>
                        <Switch isChecked={monster.featured} onChange={() => handleFeaturedChange(monster.id)}/>
                    </Td>
                    <Td>
                        <HStack>
                            <EditMonsterAction id={monster.id}/>
                            <DeleteMonsterAction id={monster.id}/>
                        </HStack>
                    </Td>
                </Tr>
            )
        })}
    </Tbody>
  )
}

export default TableBody