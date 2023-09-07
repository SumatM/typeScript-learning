import { Box } from '@chakra-ui/react';


interface ToastProp {
    toast: any,
    message: string,
    color: string
}

export const Toast = ({ toast, message, color }: ToastProp) => {
    return (
        <Box>
            {toast({
                position: 'top',
                render: () => (
                    <Box
                        color='white'
                        p={3}
                        fontSize={'0.9rem'}
                        bg={color}
                        fontWeight='500'
                        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                        borderRadius={'10px'}
                    >
                        {message}
                    </Box>
                )
            })}
        </Box>
    );
};
