import {
    Box,
    Table,
  } from "@chakra-ui/react";
import TableThead from "./TableThead";
import TableBody from "./TableBody";

function MonsterTable({monsters}) {
  return (
    <Box overflow="auto">
        <Table variant="simple" colorScheme="whiteAlpha">
            <TableThead/>
            <TableBody monsters={monsters}/>
        </Table>
    </Box>
  )
}

export default MonsterTable