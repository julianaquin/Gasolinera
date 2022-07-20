import { Heading, Grid, GridItem, Image, Box, Button, Stack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import ImageGasoil from '../assets/img/gasoil.png';
import ImageAdBlue from '../assets/img/adblue.png';
import ImageGasoilA from '../assets/img/diesel.png';
import ImageDieselPlus from '../assets/img/diesel-plus.png';
import { ArrowBackIcon } from '@chakra-ui/icons'
 
export default function Product() {

    const navigate = useNavigate();

    const typesGasoil = [
        {
            type: "Gasolina SP 95",
            price: "1,65",
            imageSize: ImageGasoil
        },
        {
            type: "Gasoleo A",
            price: "1,55",
            imageSize: ImageGasoilA
        },
        {
            type: "Biodiesel A",
            price: "1,40",
            imageSize: ImageAdBlue
        },
        {
            type: "Diesel Plus",
            price: "1,99",
            imageSize: ImageDieselPlus
        }
    ]

    const clickGasoil = (typeGasoil, priceGasoil) => {
        localStorage.setItem("typeGasoil", typeGasoil);
        localStorage.setItem("priceGasoil", priceGasoil);
        navigate("/method-payment");
    }

    return(
        <>
        <Heading textAlign="center" size="lg" marginBottom={10}>
            Selecciona el producto
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={9}>
            {typesGasoil.map((gasoil, index) => (
                <GridItem
                key={index}
                w="100%"
                borderRadius="10"
                padding="4"
                cursor="pointer"
                textAlign="center"
                boxShadow="0px 4px 10px -3px rgb(117,117,117);"
                _hover={{
                    bgGradient: "linear(to-r, orange.100, yellow.100)",
                    shadow: "2xl"
                }}
                onClick={() => clickGasoil(gasoil.type, gasoil.price)}
                >
                    <Box>
                        <Heading size="md" fontWeight="extrabold">
                            {gasoil.type}
                        </Heading>
                        <Box
                            display="flex"
                            justifyContent="space-evenly"
                            alignItems="center"
                            marginTop={4}
                            marginBottom={3}
                        >
                            <Heading size="sm">
                                Price Actual
                            </Heading>
                            <Heading size="md" fontWeight="extrabold">
                                {gasoil.price}$
                            </Heading>
                        </Box>

                        <Image src={gasoil.imageSize} alt={gasoil.type} width={100} margin="0 auto" />

                    </Box>
                </GridItem>
            ))}

        </Grid>
        <Box marginTop="40px">
            <Stack
            direction="row"
            spacing={4}
            cursor="pointer"
            onClick={() => navigate("/surtidor")}>
                <Button leftIcon={<ArrowBackIcon />}
                colorScheme="teal"
                variant="outline">
                    Volver al surtidor
                </Button>

            </Stack>
        </Box>
        </>
    )
};
