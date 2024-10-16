import React from "react";
import {Center, Container, Title, Text, Space, SimpleGrid} from "@mantine/core";
import FeaturesCard from "pages/default/components/FeaturesCard.tsx";


const cardsData = [
    {
        title: "Statistics",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://images.stockcake.com/public/f/4/7/f47bfc3b-4496-4292-ac56-460ded51997a_large/colorful-bar-graph-stockcake.jpg",
        navigateTo: "/statistics"
    },
    {
        title: "Products",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://images.stockcake.com/public/5/5/3/553b1697-d312-4c90-9b4a-5ab5681816e2_large/shopping-icon-montage-stockcake.jpg",
        navigateTo: "/products"
    },
    {
        title: "Orders",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://images.stockcake.com/public/c/e/3/ce3eee03-62e8-4e7d-ab7a-8f22457636a1_large/piled-delivery-boxes-stockcake.jpg",
        navigateTo: "/orders"
    },
    {
        title: "Users",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://images.stockcake.com/public/3/b/d/3bdb01e0-e8c8-4e81-b382-309b80ce9766_large/online-shopping-hub-stockcake.jpg",
        navigateTo: "/users"
    }
]


const DefaultPage: React.FC = () => {
    return (
        <Container size="xl">
            <Center>
                <Title order={3} size="h1">
                    CMS for E-commerce application
                </Title>
            </Center>

            <Space h="xl"></Space>

            <Text>
                This CMS for E-commerce application offers a comprehensive solution to manage online shop. With
                features to efficiently handle products, orders, and users, it ensures smooth operations and
                improved customer experience. Additionally, it provides insightful statistics to help you make
                data-driven decisions and optimize your business performance.
            </Text>

            <Space h="xl"></Space>

            <SimpleGrid cols={{base: 1, lg: 2}}>
                {cardsData.map((element) => {
                    return (
                        <FeaturesCard
                            key={element.title}
                            title={element.title}
                            description={element.description}
                            image={element.image}
                            navigateTo={element.navigateTo}>

                        </FeaturesCard>)
                })}
            </SimpleGrid>

        </Container>
    )
}

export default DefaultPage;