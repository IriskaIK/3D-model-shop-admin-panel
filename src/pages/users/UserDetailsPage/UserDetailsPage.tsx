import {Button, Container, Group, Input, SimpleGrid, Space, Tabs, Title} from "@mantine/core";
import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {fetchDeleteUserById, IDetailedUser} from "services/userService.ts";
import OrdersTable from "pages/users/UserDetailsPage/OrdersTable.tsx";
import CartTable from "pages/users/UserDetailsPage/CartTable.tsx";
import WishlistTable from "pages/users/UserDetailsPage/WishlistTable.tsx";
import {useDisclosure} from "@mantine/hooks";
import DeleteModal from "components/Modals/DeleteModal";


const UserDetailsPage: React.FC = () => {
    const location = useLocation();
    const user = location.state.user as IDetailedUser;

    console.log(user)

    const [opened, {open, close}] = useDisclosure(false);


    const navigate = useNavigate();

    function onDeleteClick() {

        const deleteUserById = async () => {
            try {
                await fetchDeleteUserById(user.id);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        deleteUserById();
        close();
        navigate('/users')
    }

    return (
        <>
            <Container>
                <Group>
                    <Title order={3}>{user.first_name} {user.last_name} #{user.id}</Title>
                    <Button color="red" onClick={open}>Delete</Button>
                    <DeleteModal opened={opened} onClose={close}
                                 title={`Deletion: #${user.id}: ${user.first_name} ${user.last_name}`}
                                 onDeleteClick={onDeleteClick}
                                 warningMessage={`This action will remove all records about user!`}></DeleteModal>
                </Group>
                <Space h="xl"></Space>
                <SimpleGrid cols={2}>
                    <Group>
                        <Group align="flex-end">
                            <Input.Wrapper label="Email">
                                <Input disabled value={user.email}/>
                            </Input.Wrapper>
                            <Button color="green" disabled={true}>Edit</Button>
                        </Group>

                        <Group align="flex-end">
                            <Input.Wrapper label="Phone">
                                <Input disabled value={user.phone ? user.phone : '-'}/>
                            </Input.Wrapper>
                            <Button color="green" disabled={true}>Edit</Button>
                        </Group>

                    </Group>
                </SimpleGrid>

                <Space h="xl"></Space>

                <Group align="flex-end">
                    <Title order={5}>Delivery address</Title>
                    {/*<Button size='xs' color="green">Edit</Button>*/}
                </Group>

                <Space h="md"></Space>

                <Group align="flex-end">
                    <Input.Wrapper label="Region">
                        <Input disabled value={user.shipping_address.region.name ? user.shipping_address.region.name : '-'}/>
                    </Input.Wrapper>
                    <Input.Wrapper label="City">
                        <Input disabled value={user.shipping_address.city.name ? user.shipping_address.city.name : '-'}/>
                    </Input.Wrapper>
                    <Input.Wrapper label="Post office">
                        <Input disabled
                               value={user.shipping_address.postOffice.address ? user.shipping_address.postOffice.address : '-'}/>
                    </Input.Wrapper>
                    <Button color="green" disabled={true}>Edit</Button>
                </Group>

                <Space h="xl"></Space>

                <Tabs defaultValue="cart">
                    <Tabs.List>
                        <Tabs.Tab value="orders">
                            Orders history
                        </Tabs.Tab>
                        <Tabs.Tab value="cart">
                            Cart
                        </Tabs.Tab>
                        <Tabs.Tab value="wishlist">
                            Wishlist
                        </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="orders">
                        <OrdersTable tableItems={user.orders}></OrdersTable>
                    </Tabs.Panel>

                    <Tabs.Panel value="cart">
                        <CartTable tableItems={user.cart}></CartTable>
                    </Tabs.Panel>

                    <Tabs.Panel value="wishlist">
                        <WishlistTable tableItems={user.wishlist}></WishlistTable>
                    </Tabs.Panel>
                </Tabs>


            </Container>


        </>
    )
}
export default UserDetailsPage;