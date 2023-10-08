import { Box, Button, Heading, Input, Select, useDisclosure, useToast } from "@chakra-ui/react"
import { DashBoardTable } from "../component/DashBoardTable"
import EditModal from "../component/EditModal";
import { getEmployeeData } from "../utils/getEmployeeData";
import { useDispatch } from "react-redux";
import { allemployee } from "../redux/employeeReducer";
import { useState } from 'react'
import { URLSearchParamsInit, useNavigate, useSearchParams } from "react-router-dom";
import { GrSearch } from 'react-icons/gr'
import { setTotalPages } from "../redux/totalPagesReducer";
import { logoutUser } from "../utils/logoutUser";
import { Toast } from "../component/Toast";

export const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const [searchParam, setSearchParam] = useSearchParams()
  const navigator = useNavigate()
  let page = searchParam.get('page')
  let sort = searchParam.get('order')
  const [order, setOrder] = useState(searchParam.get('order') || '')
  let querysearch = searchParam.get('q');
  const [search, setSearch] = useState(searchParam.get('q') || "")
  const sortBy: any = searchParam.get('sortBy')
  const toast = useToast();

  let api = 'https://ems-api-5j0f.onrender.com/employee'


  const departmentOptions = [
    { label: 'HR', value: 'hr' },
    { label: 'Sales', value: 'sales' },
    { label: 'Marketing', value: 'marketing' },
    { label: 'Tech', value: 'tech' },
    { label: 'Operations', value: 'operation' }
  ];


  function handleAddEmployee() {
    onOpen()
  }


  async function handleSorting(e: React.ChangeEvent<HTMLSelectElement>) {
    let queryAPI = ""
    setOrder(e.target.value);
    let newQuery: URLSearchParamsInit | ((prev: URLSearchParams) => URLSearchParamsInit) | undefined = {}
    if (querysearch) {
      newQuery.page = `1`
      newQuery.order = e.target.value;
      newQuery.q = querysearch
      queryAPI = `${api}?order=${e.target.value}&page=${1}&limit=5&q=${querysearch}`
    } else {
      newQuery.page = `1`
      newQuery.order = e.target.value;
      queryAPI = `${api}?order=${e.target.value}&page=${1}&limit=5`
    }
    setSearchParam(newQuery)
    let response = await getEmployeeData(queryAPI);
    dispatch(allemployee(response?.employees))
  }

  async function handelSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  async function handelSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    let queryAPI = ``

    queryAPI = `${api}?q=${search}&page=1&limit=5`
    setSearchParam({ page: '1', q: search })


    if (sort !== null && querysearch !== null) {
      queryAPI = `${api}?q=${search}&q=${querysearch}&order=${sort}`
      setSearchParam({ page: `${page}`, order: sort, q: search })
    }

    let response = await getEmployeeData(queryAPI);
    dispatch(allemployee(response?.employees))
    dispatch(setTotalPages(response?.employeeCount))
  }

  async function handelLogout() {
    const token = localStorage.getItem('token') || ""
    let response = await logoutUser(token)
    if (response?.message == 'Logout Success') {
      navigator('/login')
      Toast({ toast, message: response?.message, color: 'green' })
      localStorage.setItem('token', "")

    } else {
      Toast({ toast, message: response?.message, color: 'red' })
    }


  }



  async function handleDepartmentFilter(e: React.ChangeEvent<HTMLSelectElement>) {
    // console.log(e.target.value);
    let queryAPI = ""
    let newQuery: URLSearchParamsInit | ((prev: URLSearchParams) => URLSearchParamsInit) | undefined = {}
    if (querysearch) {
      newQuery.page = `1`
      newQuery.q = querysearch
      newQuery.sortBy = e.target.value
      queryAPI = `${api}?sortBy=${e.target.value}&page=1&limit=5&q=${querysearch}`
    } else {
      newQuery.page = `1`
      newQuery.sortBy = e.target.value
      queryAPI = `${api}?sortBy=${e.target.value}&page=${1}&limit=5`
    }
    setSearchParam(newQuery)
    let response = await getEmployeeData(queryAPI);
    dispatch(allemployee(response?.employees))
  }


  return (
    <Box p='1rem'>
      <Box>
        <Heading>Employee Management Software</Heading>
      </Box>
      <Box mt='2.5rem' display={'flex'} justifyContent='space-between' flexDir={{ base: 'column',md:"row" }}>
        <Box display={{ base: 'flex', sm: "block" }} justifyContent='space-between'>
          <Button outline={'1px solid'} colorScheme="blue" onClick={handleAddEmployee}> Add Employee</Button>
          <Button outline={'1px solid'} ml='2rem' onClick={handelLogout}>Logout</Button>
        </Box>
        <Box mt='1rem'>
          <Select outline={'1px solid'} onChange={handleDepartmentFilter} value={sortBy}>
            <option value=''>Sort Employee By department</option>
            {departmentOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </Box>
        <Box mt={'1rem'}>
          <Select w='auto' outline={'1px solid'} onChange={handleSorting} value={order}>
            <option value=''>Sort Employee By Salary</option>
            <option value='desc'>High to Low</option>
            <option value='asc'>Low to High</option>
          </Select>
        </Box>
      </Box>
      <Box mt='2.5rem'>
        <form onSubmit={handelSearch} style={{ display: 'flex' }}>
          <Input outline={'1px solid'} placeholder="Enter the Employee Name you want to search" onChange={handelSearchInput} value={search} />
          <Button type="submit" colorScheme="blue" ml='1.5rem'><GrSearch /> </Button>
        </form>
      </Box>
      <Box mt='2rem' overflow='scroll'>
        <DashBoardTable />
      </Box>
      <EditModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} title={"Add"} />
    </Box>
  )
}
