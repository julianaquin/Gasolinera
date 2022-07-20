import { useState, useEffect } from "react";
import { Grid, Heading, GridItem, Button, Stack, Box } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";


const numbers= ["1","2","3","4","5","6","7","8","9"];


export default function Quantity() {

    const [counter, setCounter] = useState("");
    const navigate= useNavigate();

    useEffect(() => {
        localStorage.setItem("quantity", counter);
    }, [counter])

    const sumCounter = (number) => {
        setCounter(counter + number);
    }

    const clearCounter = () => {
        setCounter("");
    }

    console.log(counter);

    return(
        <>
            <Grid marginBottom={5}>
                <Heading size="lg"> Pulsa importe</Heading>
                <Heading size="lg" fontWeight="800">
                    {counter ? <> {counter} € </> :<> 0€</> }
                </Heading>
            </Grid>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                
                    {numbers.map(number => (
                        <GridItem
                        key={number}
                        w="100%"
                        h="20"
                        bgGradient="linear(to-r, gray.200, gray.500)"
                        textAlign="center"
                        justifyContent="center"
                        alignItems="center"
                        fontSize="40px"
                        fontWeight="700"
                        boxShadow="0px 4px 10px -3px rgb(117 117 117)"
                        cursor="pointer"
                        _hover={{shadow:"2xl"}}
                        onClick={() => sumCounter(number)}>
                            {number}
                        </GridItem>

                    ))}
    
            </Grid>

            <Grid templateColumns="repeat(3, 1fr)" gap={6} marginTop="30px">
                <GridItem w="100%" h="20" bgGradient="linear(to-r, gray.200, gray.500)"
                colSpan={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                cursor="pointer"
                fontWeight="700"
                fontSize="40px"
                boxShadow="0px 4px 10 px -3px rgb(117 117 117)"
                _hover={{ shadow: "2xl"}}
                onClick={() => sumCounter(0)}>
                    0
                </GridItem>
                <GridItem
                w="100%" h="20"
                colSpan={2}
                boxShadow="0px 4px 10 px -3px rgb(117 117 117)"
                fontSize="40px"
                fontWeight="700"
                cursor="pointer"
                bg="yellow"
                textAlign="center"
                justifyContent="center"
                alignItems="center"
                _hover={{ shadow: "2xl"}}
                onClick={clearCounter}
                >
                    Borrar
                </GridItem>
            </Grid>

            <Box marginTop="40px">
                <Stack
                direction="row"
                spacing={4}
                cursor="pointer"
                display="flex"
                justifyContent="space-between"
                >
                    <Button
                    leftIcon= { <ArrowBackIcon />}
                    colorScheme="teal"
                    variant="outline"
                    size="lg"
                    onClick={() => navigate("/method-payment")}
                    >Volver atrás</Button>
                    <Button
                    rightIcon= {<ArrowForwardIcon />}
                    colorScheme="teal"
                    variant="solid"
                    size="lg"
                    onClick={() => navigate("/resume")}
                    >Continuar</Button>
                </Stack>
            </Box>
        </>
    );
}
