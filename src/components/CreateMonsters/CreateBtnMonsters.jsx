import { Button } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

function CreateBtnMonsters() {
  return (
    <Button colorScheme="green" variant="solid" mb={5}>
      <AddIcon mr={2}/> Create Monster
    </Button>
  )
}

export default CreateBtnMonsters