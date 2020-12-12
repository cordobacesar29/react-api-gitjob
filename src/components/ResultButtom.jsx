import React from 'react';
import { useHistory } from "react-router-dom";
import { Button } from "@chakra-ui/react";


export const ResultsButtom = () => {
    
    //definiendo navegacion a home
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();
    const handleNavigateHome = () => {
        history.push('/')
    }
    return(

    <Button 
        mt="1rem" 
        w="100%" 
        colorScheme="teal" 
        size="sm"
        onClick={handleNavigateHome}
    >
        Try again!
    </Button>
    )    
}