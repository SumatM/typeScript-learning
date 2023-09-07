import { Box, Button, Heading, Table, TableCaption, Tbody, Td,  Th, Thead, Tr, useDisclosure, useToast } from "@chakra-ui/react"
import { useEffect, useState } from 'react'
import { Employee, getEmployeeData } from "../utils/getEmployeeData"
import { getNormalData } from "../utils/getNormalData"
import EditModal from "./EditModal"
import { useDispatch, useSelector } from "react-redux"
import {  allemployee } from "../redux/employeeReducer"
import { Pagination } from "./Pagination"
import { RootState } from '../redux/store';
import { deleteEmployee } from "../utils/deleteEmployee"
import { Toast } from "./Toast"
import { URLSearchParamsInit, useSearchParams } from "react-router-dom"
import { setTotalPages } from "../redux/totalPagesReducer"

let api = 'https://ems-api-5j0f.onrender.com/employee'

export interface QueryObject {
    page?: string | number | null,
    order?: string,
    q?: string,
    sortBy?: string
}

export const DashBoardTable = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const empoloyeesData = useSelector((store: RootState) => store.employeeReducer)
    const totalPages = useSelector((store: RootState) => store.totalPagesReducer)
    const dispatch = useDispatch();
    const [id, setId] = useState("")
    const toast = useToast();
    let [searchParams, setSearchParams] = useSearchParams();
    const currentPage = searchParams.get('page' || 1)
    let sort = searchParams.get('order')



    async function fetchData() {

        let queryPage = Number(searchParams.get('page')) || 1;
        let pages = Math.ceil(+totalPages.value / 5)
        const querySearch = searchParams.get('q')
        let queryAPI = `${api}?page=${queryPage}&limit=5`
        let newQuery: URLSearchParamsInit | ((prev: URLSearchParams) => URLSearchParamsInit) | undefined = { page: `${queryPage}`}

        if (queryPage < 1 && empoloyeesData?.value?.length == 0) {
            newQuery['page'] = `${queryPage - 1}`
        }

        if (querySearch) {
            queryAPI = `${api}?page=${queryPage}&limit=5&q=${querySearch}`
            newQuery.page = `${queryPage}`
            newQuery.q = querySearch
        }
        if (sort) {
            queryAPI = `${api}?page=${queryPage}&limit=5&q=${querySearch || ''}&order=${sort}`
            newQuery.order = sort
        }
        // console.log(queryPage,pages)
        if (pages !== 0 && pages < queryPage) {
            queryAPI = `${api}?page=${pages}&limit=5&q=${querySearch}&order=${sort}`
            newQuery.page = `${pages}`;
        }

        let response = await getEmployeeData(`${queryAPI}`);
        // console.log(response)
        setSearchParams(newQuery)
        if (!response?.employeeCount) {
            return Toast({ toast, message: response?.response?.data?.message, color: 'red' })
        }
        dispatch(allemployee(response?.employees))
        dispatch(setTotalPages(response?.employeeCount))
    }

    useEffect(() => {
        fetchData();
    }, [currentPage, totalPages])


    function handleUpdateEmployee(id: string) {
        setId(id);
        onOpen()
    }


    async function handledeleteEmployee(id: string) {
        if (window.confirm('Are Your You Want to Delete Employee')) {

            let response = await deleteEmployee(id);

            if (response.message == "Employee Removed") {
                dispatch(setTotalPages(+totalPages - 1))
                Toast({ toast, message: response.message, color: 'green' })
            } else {
                Toast({ toast, message: response.message || "Something Went Wrong. Please Refresh", color: 'red' })
            }
        }

    }


    return (
        <Box>
            {empoloyeesData?.value?.length !== 0 ? <Table>
                <TableCaption>
                    <Pagination totalPages={Math.ceil(totalPages?.value / 5)} />
                </TableCaption>
                <Thead>
                    <Tr>
                        <Th>No.</Th>
                        <Th>First Name</Th>
                        <Th>Last Name</Th>
                        <Th>Email</Th>
                        <Th>Department</Th>
                        <Th>Salary</Th>
                        <Th>Date</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {empoloyeesData?.value?.map((item: Employee, ind: number) => {
                        return <Tr key={ind}>
                            <Td>{ind + 1}</Td>
                            <Td>{item.fname}</Td>
                            <Td>{item.lname}</Td>
                            <Td>{item.email}</Td>
                            <Td>{item.department}</Td>
                            <Td>${item.salary}</Td>
                            <Td>{getNormalData(item.createdAt)}</Td>
                            <Td>
                                <Button onClick={() => { handleUpdateEmployee(item._id) }} outline='1px solid'>Edit</Button>
                                <Button outline='1px solid' ml='1rem' onClick={() => handledeleteEmployee(item._id)}>Delete</Button>
                            </Td>

                        </Tr>
                    })}

                </Tbody>
            </Table> : <Box textAlign='center'  ><Heading size='md'>No Search Result Found</Heading></Box>}
            <EditModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} title={'Update'} id={id} />
        </Box>
    )
}
