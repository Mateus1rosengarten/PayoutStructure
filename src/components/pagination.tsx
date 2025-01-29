import { Pagination, Stack } from "@mui/material";



const BasicPagination:React.FC = () => {
    return (
    <Stack spacing={2} position={"absolute"} right={'5vw'} top={'30vh'}>
    <Pagination count={5} color="primary" />
    </Stack>

    );
};

export default BasicPagination;