import { Box, Button } from "@chakra-ui/react"
import { useParams, useSearchParams } from "react-router-dom"
import { useEffect, useState } from 'react'
type TotalPages = {
    totalPages: number
}

let api = 'http://localhost:8080/employee'

export const Pagination = ({ totalPages }: TotalPages) => {
    let buttons = new Array(totalPages || 1).fill(0)
    let [searchParams, setSearchParams] = useSearchParams();
    const [currentButton, setCurrentButton] = useState(searchParams.get('page') || 1)
    const querySearch = searchParams.get('q')
    let order = searchParams.get('order')
    let filter = searchParams.get("sortBy")

    async function handlePagination(pageNumber: number) {
        // console.log(querySearch,order,filter)
        let queryAPI = ""
        if (querySearch && order && filter) {
            queryAPI = `${api}?page=${pageNumber}&limit=5&q=${querySearch}&sortBy=${filter}&order=${order}`
            setSearchParams({ page: `${pageNumber}`, q: querySearch, sortBy: filter, order: order })
        } else if (querySearch && order) {
            queryAPI = `${api}?page=${pageNumber}&limit=5&q=${querySearch}&order=${order}`
            setSearchParams({ page: `${pageNumber}`, q: querySearch, order })
        } else if (filter) {
            queryAPI = `${api}?page=${pageNumber}&limit=5&sortBy=${filter}`
            setSearchParams({ page: `${pageNumber}`, sortBy: filter })
        }
        else if (querySearch) {
            queryAPI = `${api}?page=${pageNumber}&limit=5&q=${querySearch}`
            setSearchParams({ page: `${pageNumber}`, q: querySearch })
        } else if (order) {
            queryAPI = `${api}?page=${pageNumber}&limit=5&order=${order}`
            setSearchParams({ page: `${pageNumber}`, order })

        } else {
            queryAPI = `${api}?page=${pageNumber}&limit=5`
            setSearchParams({ page: `${pageNumber}` })
        }

        setCurrentButton(pageNumber)
    }

    useEffect(() => {
        handlePagination(+currentButton)
    }, [currentButton, totalPages])




    return (
        <Box >
            {buttons?.map((item, index) => {
                return <Button key={item + index} colorScheme={index + 1 == currentButton ? 'blue' : 'gray'} onClick={() => handlePagination(index + 1)} ml='1rem'>{index + 1}</Button>
            })}
        </Box>
    )
}




