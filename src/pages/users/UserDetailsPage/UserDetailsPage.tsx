import {Button, Container, Group, Input, SimpleGrid, Space, Tabs, Title} from "@mantine/core";
import React from "react";
import {useLocation} from "react-router-dom";
import {IDetailedUser} from "services/userService.ts";
import OrdersTable from "pages/users/UserDetailsPage/OrdersTable.tsx";
import CartTable from "pages/users/UserDetailsPage/CartTable.tsx";
import WishlistTable from "pages/users/UserDetailsPage/WishlistTable.tsx";
import {useDisclosure} from "@mantine/hooks";
import DeleteModal from "pages/users/UserDetailsPage/DeleteModal.tsx";


const UserDetailsPage: React.FC = () => {
    const location = useLocation();
    const user = location.state.user as IDetailedUser;
    const [opened, {open, close}] = useDisclosure(false);

    return (
        <>
            <Container>
                <Group>
                    <Title order={3}>{user.first_name} {user.last_name} #{user.id}</Title>
                    <Button color="red" onClick={open}>Delete</Button>
                    <DeleteModal userId={user.id} first_name={user.first_name}
                                 last_name={user.last_name ? user.last_name : ''} opened={opened}
                                 onClose={close}></DeleteModal>
                </Group>
                <Space h="xl"></Space>
                <SimpleGrid cols={2}>
                    <Group>
                        <Group align="flex-end">
                            <Input.Wrapper label="Email">
                                <Input disabled value={user.email}/>
                            </Input.Wrapper>
                            {/*<Button color="green">Edit</Button>*/}
                        </Group>

                        <Group align="flex-end">
                            <Input.Wrapper label="Phone">
                                <Input disabled value={user.phone ? user.phone : '-'}/>
                            </Input.Wrapper>
                            {/*<Button color="green">Edit</Button>*/}
                        </Group>

                    </Group>
                </SimpleGrid>

                <Space h="xl"></Space>

                <Group align="flex-end">
                    <Title order={5}>Delivery address</Title>
                    {/*<Button size='xs' color="green">Edit</Button>*/}
                </Group>

                <Space h="md"></Space>

                <Group>
                    <Input.Wrapper label="Region">
                        <Input disabled value={user.shipping_address.region ? user.shipping_address.region : '-'}/>
                    </Input.Wrapper>
                    <Input.Wrapper label="City">
                        <Input disabled value={user.shipping_address.city ? user.shipping_address.city : '-'}/>
                    </Input.Wrapper>
                    <Input.Wrapper label="Post office">
                        <Input disabled
                               value={user.shipping_address.postOffice ? user.shipping_address.postOffice : '-'}/>
                    </Input.Wrapper>
                </Group>

                <Space h="xl"></Space>

                <Tabs defaultValue="orders">
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