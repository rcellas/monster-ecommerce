import {
    IconButton
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'

function EditMonsterAction(id) {

  const handleEdit = (id) => {
    console.log(`Edit monster with id ${id}`)
  }
  return (
    <IconButton
        icon={<EditIcon/>}
        colorScheme="blue"
        onClick={() => handleEdit(id)}
    />
  )
}

export default EditMonsterAction