import {Button, Card, Group, Image, Text} from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";


interface FeaturesCardProps {
    title : string;
    description : string;
    image : string;
    navigateTo : string;
}

const FeaturesCard: React.FC<FeaturesCardProps> = (props) => {
    const navigate = useNavigate();

    function onCLick(){
        navigate(props.navigateTo);
    }

    return(
        <>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Image
                        src={props.image}
                        height={160}
                    />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>{props.title}</Text>
                </Group>

                <Text size="sm" c="dimmed">
                    {props.description}
                </Text>

                <Button color="blue" fullWidth mt="md" radius="md" onClick={onCLick}>
                    Show me
                </Button>
            </Card>
        </>
    )
}

export default FeaturesCard;