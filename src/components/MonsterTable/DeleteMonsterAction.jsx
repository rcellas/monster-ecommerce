import { IconButton, useDisclosure } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

function DeleteMonsterAction() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleDelete = (id) => {
        console.log(`Delete monster with id ${id}`)
    }
    return (
        <IconButton
            icon={<DeleteIcon/>}
            colorScheme="red"
            onClick={() => handleDelete(monster.id)}
        />
    )
}

export default DeleteMonsterAction