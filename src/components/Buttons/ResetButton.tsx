import {Button} from "@mantine/core";


interface ResetButtonProps<T> {
    handleReset: () => void;
    state: T;

}

const ResetButton = <T extends {}>({state, handleReset}: ResetButtonProps<T>) => {

    return (
        <Button
            color="red"
            disabled={
                Object.entries(state)
                    .filter(([_key, value]) => value !== null)
                    .length === 0}
            onClick={handleReset}
        >Reset options
        </Button>
    )
}

export default ResetButton;