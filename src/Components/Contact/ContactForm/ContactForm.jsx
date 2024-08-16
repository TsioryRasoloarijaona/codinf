import { Button, Flex, FormControl, FormLabel, Input, InputGroup,  Textarea,  VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const ContactForm = ({isMobile}) => {
    const { register, handleSubmit } = useForm({});
    const onSubmit = (data) => {
        console.log(data);
    };
    return(
        <form style={{width: isMobile ? "70vw" : ""}} onSubmit={handleSubmit(onSubmit)} >
            <VStack spacing={4} align="start" w={isMobile ? "70vw" : "40vw"}  marginInline="auto" >
                <Flex w="full" gap={5} justifyContent="space-between">
                    <FormControl variant="floating" id="firstname" marginBottom={3}>
                        <InputGroup>
                            <Input
                                {...register("firstname")}
                                placeholder=" "
                                isRequired
                                outline="none"
                                border="none"
                                borderBottom="2px"
                                borderBottomColor="blue.700"
                                boxShadow="none"
                                sx={{
                                    ':focus': {
                                        outline: 'none',
                                        boxShadow: 'none'
                                    },
                                }}
                            />
                            <FormLabel>Nom</FormLabel>
                        </InputGroup>
                    </FormControl>

                    <FormControl variant="floating" id="lastname" marginBottom={3}>
                        <InputGroup>
                            <Input
                                {...register("lastname")}
                                placeholder=" "
                                isRequired
                                outline="none"
                                border="none"
                                borderBottom="2px"
                                borderBottomColor="blue.700"
                                boxShadow="none"
                                sx={{
                                    ':focus': {
                                        outline: 'none',
                                        boxShadow: 'none'
                                    },
                                }}
                            />
                            <FormLabel>Prénom</FormLabel>
                        </InputGroup>
                    </FormControl>
                </Flex>
                <FormControl variant="floating" id="email" marginBottom={3}>
                        <InputGroup>
                            <Input
                                {...register("email")}
                                placeholder=" "
                                isRequired
                                outline="none"
                                border="none"
                                borderBottom="2px"
                                borderBottomColor="blue.700"
                                boxShadow="none"
                                sx={{
                                    ':focus': {
                                        outline: 'none',
                                        boxShadow: 'none'
                                    },
                                }}
                            />
                            <FormLabel>Email</FormLabel>
                        </InputGroup>
                    </FormControl>
                    <FormControl variant="floating" id="message" marginBottom={3}>
                        <InputGroup>
                            <Textarea
                                {...register("message")}
                                placeholder=" "
                                isRequired
                                outline="none"
                                border="none"
                                borderBottom="2px"
                                borderBottomColor="blue.700"
                                boxShadow="none"
                                sx={{
                                    ':focus': {
                                        outline: 'none',
                                        boxShadow: 'none'
                                    },
                                }}
                            />
                            <FormLabel>Message</FormLabel>
                        </InputGroup>
                    </FormControl>
                <Button type="submit">Envoyer</Button>
            </VStack>
        </form>
    )
}
export default ContactForm;