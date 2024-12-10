import { IconButton, useDisclosure } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useContext } from 'react';
import { MonsterContext } from '../../context/MonsterContext/MonsterContext'; // Asegúrate de importar correctamente el contexto

function DeleteMonsterAction({ monster }) {
    console.log('Monster:', monster); // Agrega este log para depurar
    const { deleteMonsterById } = useContext(MonsterContext);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleDelete = async (id) => {
        console.log('Deleting monster with ID:', id); // Agrega este log para depurar
        if (id) {
            await deleteMonsterById(id);
        } else {
            console.error('Monster ID is undefined');
        }
    };

    return (
        <IconButton
            icon={<DeleteIcon />}
            colorScheme="red"
            onClick={() => handleDelete(monster?.id)}
        />
    );
}

export default DeleteMonsterAction;