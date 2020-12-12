import { Text, Heading } from "@chakra-ui/react";

export const Title = ( {children} ) => (
    <Text 
        fontSize="xl" 
        textAlign="center" 
        color="tomato" 
        bg="black"
        paddingY="1rem"
        marginBottom=".5rem"
        mb="2rem"
    >
        <Heading className="title">{children}</Heading>
    </Text>
)