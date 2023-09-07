import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useToast } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { addEmployee } from "../utils/addEmployee"
import { updateEmployee } from "../utils/updateEmployee"
import { Toast } from "./Toast"
import { useDispatch, useSelector } from "react-redux"
import { addNewEmployee } from "../redux/employeeReducer"
import { setTotalPages } from "../redux/totalPagesReducer"
import { RootState } from "../redux/store"

interface Modal {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void,
    title: string,
    id?: string

}


const EditModal = ({ isOpen, onClose, title, id }: Modal) => {

    const [form, setForm] = useState({ fname: '', lname: '', email: '', salary: 0, department: '', _id: '' })

    const toast = useToast();

    const dispatch = useDispatch();
    const employeesData = useSelector((store: RootState) => store.employeeReducer) || []

    const departmentOptions = [
        { label: 'HR', value: 'hr' },
        { label: 'Sales', value: 'sales' },
        { label: 'Marketing', value: 'marketing' },
        { label: 'Tech', value: 'tech' },
        { label: 'Operations', value: 'operation' }
    ];

    function handleInput(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    async function handleButtonAction(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (title == 'Add') {
            let response = await addEmployee(form)

            if (response.message == "Employee Added") {
                Toast({ toast, message: response.message, color: 'green' })
                const newEmployee = response.employee;
                newEmployee["createdAt"] = new Date()
                dispatch(addNewEmployee(newEmployee))
                dispatch(setTotalPages(response?.employeeCount))
                onClose()
                setForm(
                    { fname: '', lname: '', email: '', salary: 0, department: '', _id: '' }
                )

            } else {
                Toast({ toast, message: response.message, color: 'red' })
                onClose()
            }

        } else if (title == 'Update') {
            let response = await updateEmployee(form, form._id)
            // console.log(response);

            if (response.message == 'Employee updated') {
                Toast({ toast, message: response?.message, color: 'green' })
                dispatch(addNewEmployee(response.employee))
                dispatch(setTotalPages(response?.employeeCount))
                onClose()
                setForm(
                    { fname: '', lname: '', email: '', salary: 0, department: '', _id: '' }
                )

            } else {
                Toast({ toast, message: response?.message, color: 'red' })
            }
        }
    }







    useEffect(() => {
        if (employeesData && id) {
            const filteredEmployee = employeesData?.value?.filter((item: any) => item._id === id);
            setForm(filteredEmployee[0] || { fname: '', lname: '', email: '', salary: 0, department: '', _id: '' })
        }
    }, [id, employeesData]);



    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <form onSubmit={handleButtonAction}>
                <ModalContent>
                    <ModalHeader>{title} Employee</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        <Box mt='1rem'>
                            <Input placeholder="First Name" name='fname' type="text" onChange={handleInput} value={form?.fname} required outline={'1px solid'} />
                        </Box>
                        <Box mt='1rem'>
                            <Input placeholder="Last Name" name='lname' type="text" onChange={handleInput} value={form?.lname} required outline={'1px solid'} />
                        </Box>
                        <Box mt='1rem'>
                            <Input placeholder="Email" name='email' type="email" required value={form?.email} onChange={handleInput} outline={'1px solid'} />
                        </Box>
                        <Box mt='1rem'>
                            <Input placeholder="Salary" name='salary' value={form?.salary} type="number" onChange={handleInput} required outline={'1px solid'} />
                        </Box>
                        <Box mt="1rem">
                            <Select placeholder="Select Department" name="department" value={form?.department} onChange={handleInput}
                                outline={'1px solid'}>
                                {departmentOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </Select>
                        </Box>


                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost' type="submit">{title} Employee</Button>
                    </ModalFooter>
                </ModalContent>
            </form>
        </Modal>
    )
}

export default EditModal