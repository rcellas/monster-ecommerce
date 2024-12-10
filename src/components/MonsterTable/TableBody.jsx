import {
    Tbody,
    Tr,
    Td,
    Image,
    Switch,
    HStack
} from '@chakra-ui/react';
import EditMonsterAction from './EditMonsterAction';
import DeleteMonsterAction from './DeleteMonsterAction';

function TableBody({ monsters, onFeaturedChange }) {
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
                        <Switch
                            isChecked={monster.featured}
                            onChange={(e) => onFeaturedChange(monster.id, e.target.checked)}
                        />
                    </Td>
                    <Td>
                        <HStack>
                            <EditMonsterAction id={monster.id} />
                            <DeleteMonsterAction monster={monster} />
                        </HStack>
                    </Td>
                </Tr>
            );
        })}
    </Tbody>
  );
}

export default TableBody;