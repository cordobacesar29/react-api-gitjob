import { Text, Flex, Input, Button, Heading } from "@chakra-ui/react";
import {useState} from 'react';
import { useHistory } from "react-router-dom";
import {api} from '../api';

export const SearchForm = () => {
    //definir navegacion a /results
    const history = useHistory();
    const handleNavigateResults = () => {
        history.push('/results')
    }

    //defino el state
    const [valor, setValor] = useState('');
    const enviarDatos = (event) => {
        event.preventDefault();//creamos un alerta
        if(valor === '' ) {
            alert('completa el campo de busqueda')
        } else {
            api(valor);//llamo a la api
            handleNavigateResults();   //llamo a la navegacion         
        };
    }

    return (
        <Flex 
            justify="center"
            align="center"
            h="100vh"
        >
            <form>
                <Flex
                    direction="column"
                    w="400px"
                
                    border="1px solid #c2c2c2"
                    borderRadius="8px"
                    p="2rem"
                >
                    <Heading mb="2rem">Try it!</Heading>
                    <Text mb="1rem">Search your next job!</Text>
                    <Input 
                        mb="1rem"
                        placeholder="Search" 
                        onChange={(e)=>(setValor(e.target.value))}
                    />
                    
                        <Button 
                            my="1rem" 
                            w="100%" 
                            colorScheme="teal" 
                            size="sm"
                            type="submit"
                            onClick={enviarDatos}
                        >                        
                            Send
                        </Button>
                </Flex>
            </form>
        </Flex>
    )
}   