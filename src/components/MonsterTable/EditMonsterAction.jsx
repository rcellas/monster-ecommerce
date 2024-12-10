import React, { useState } from 'react';
import { IconButton } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import EditFormMonster from '../EditFormMonster/EditFormMonster';

function EditMonsterAction({ monster }) {
    const [isOpen, setIsOpen] = useState(false);
    console.log('Monster:', monster); // Agrega este log para depurar
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <>
            <IconButton
                icon={<EditIcon />}
                colorScheme="blue"
                onClick={handleOpen}
            />
            <EditFormMonster monster={monster} isOpen={isOpen} onClose={handleClose} />
        </>
    );
}

export default EditMonsterAction;