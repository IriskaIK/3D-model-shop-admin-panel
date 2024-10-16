import React from "react";
import {
    Badge,
    Button,
    Container,
    Group,
    Input, MultiSelect,
    NativeSelect,
    SimpleGrid,
    Space,
    Textarea,
    Title,
    Image, Stack
} from "@mantine/core";
import DeleteModal from "components/Modals/DeleteModal";
import {useLocation, useNavigate} from "react-router-dom";
import {deleteProductById, IProduct} from "services/productService";
import {useDisclosure} from "@mantine/hooks";

const ProductDetailsPage: React.FC = () => {
    const location = useLocation();
    const product = location.state.product as IProduct;
    const [opened, {open, close}] = useDisclosure(false);

    const navigate = useNavigate();

    function onDeleteClick() {

        const deleteProduct = async () => {
            try {
                await deleteProductById(product.id);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        deleteProduct();
        close();
        navigate('/products')
    }


    return (
        <>
            <Container>
                <Group>
                    <Title order={3}>{product.title} #{product.id}</Title>
                    <Button color="red" onClick={open}>Delete</Button>
                    <Button color="green">Edit</Button>
                    <DeleteModal opened={opened} onClose={close}
                                 title={`Deletion: #${product.id} ${product.title}`}
                                 onDeleteClick={onDeleteClick}
                                 warningMessage={`This action will remove all records about user!`}></DeleteModal>
                </Group>
                <Space h="xl"></Space>

                <Image src='https://placehold.co/600x400?text=Placeholder'
                       h={400}
                       w="auto"
                       fit="contain"
                ></Image>
                <Space h="xs"></Space>
                <Group gap='sm'>
                    {product.images.map(image =>{
                        return (<Badge key={image.id}>{image.filename}</Badge>)
                    })}
                </Group>


                <Space h="xl"></Space>



                <SimpleGrid cols={2}>
                    <Group>
                        <Group align="flex-start">
                            <Input.Wrapper label="Title">
                                <Input disabled value={product.title}/>
                            </Input.Wrapper>
                            <Input.Wrapper label="Subtitle">
                                <Input disabled value={product.subtitle}/>
                            </Input.Wrapper>

                        </Group>

                        <Group align="flex-start">
                            <Textarea label="Content" autosize disabled value={product.content}/>
                            <Input.Wrapper label="Slug">
                                <Input disabled value={product.slug}/>
                            </Input.Wrapper>
                        </Group>

                        <Group align="flex-start">
                            <Input.Wrapper label="Price">
                                <Input disabled value={product.price}/>
                            </Input.Wrapper>

                            <NativeSelect
                                disabled
                                label="Stockpile"
                                data={['In Stock', 'Running out', 'Out of Stock']}
                            />

                        </Group>
                    </Group>
                </SimpleGrid>

                <Space h="xl"></Space>

                <Title order={5}>Category and Tags</Title>
                <Space h="md"></Space>
                <Stack>

                    <Group align="flex-end">
                        <MultiSelect
                            disabled
                            label="Category"
                            placeholder="Pick category or enter anything"
                            searchable
                            data={['Category 1', 'Category 2', 'Category 3']}
                        />
                        <Button color="blue">Add new</Button>
                    </Group>

                    <Group align="flex-end">
                        <MultiSelect
                            label="Tags"
                            placeholder="Pick tag or enter anything"
                            searchable
                            disabled
                            data={['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4']}
                        />
                        <Button color="blue">Add new</Button>
                    </Group>


                </Stack>


            </Container>
        </>
    )
}

export default ProductDetailsPage;