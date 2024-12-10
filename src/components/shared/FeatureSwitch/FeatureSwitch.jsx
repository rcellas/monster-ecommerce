import React from 'react';
import { FormControl, FormLabel, Switch } from '@chakra-ui/react';

const FeaturedSwitch = ({ isChecked, onChange, labelColor = "black" }) => {
    return (
        <FormControl display="flex" alignItems="center">
            <FormLabel mb="0" color={labelColor}>Featured</FormLabel>
            <Switch
                name="featured"
                isChecked={isChecked}
                onChange={onChange}
            />
        </FormControl>
    );
};

export default FeaturedSwitch;