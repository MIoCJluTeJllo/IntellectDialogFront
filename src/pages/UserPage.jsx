import Table from '../components/Table/Table'
import { Button, styled } from '@mui/material'
import { CreateUserModal } from '../components/Users/Modals/CreateUserModal'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { EditUserModal } from '../components/Users/Modals/EditUserModal'
import { ConfirmModal } from '../components/Users/Modals/ConfirmModal'

export const UserPage = () => {
	const { user } = useSelector((state) => state)
	const [isOpen, setIsOpen] = useState(false)
	const [isEditModal, setIsEditModal] = useState(false)
	const [isConfirmModal, setIsConfirmModal] = useState(false)

	const [id, setId] = useState(null)

	const handleClickOpenModal = () => setIsOpen(true)

	const handleEditOpen = (id) => {
		setIsEditModal(true)
		setId(id)
	}

	const handleDeleteModalOpen = (id) => {
		setIsConfirmModal(true)
		setId(id)
	}

	return (
		<Container>
			<TopPart>
				<CreateUserModal open={isOpen} close={() => setIsOpen(false)} />
				<EditUserModal
					open={isEditModal}
					close={() => setIsEditModal(false)}
					editId={id}
				/>
				<ConfirmModal
					close={() => setIsConfirmModal(false)}
					open={isConfirmModal}
					deleteId={id}
				/>

				<PageHeaderContainer>
					<h3>User Page</h3>
					<Button
						variant='outlined'
						onClick={() => handleClickOpenModal()}
					>
						Create a company
					</Button>
				</PageHeaderContainer>
			</TopPart>
			<AppTableContainer>
				<Table
					data={user?.users}
					onGetId={handleEditOpen}
					onHandleDeleteId={handleDeleteModalOpen}
				/>
			</AppTableContainer>
		</Container>
	)
}

const Container = styled('div')({
	color: '#000',
	fontFamily: 'Inter',
	fontSize: '14px',
	fontStyle: 'normal',
	fontWeight: '500',
	lineHeight: 'normal',
	display: 'flex',
	flexDirection: 'column',
	padding: '28px 0px 0px 0px',
	width: '100%',
	height: '100vh',
	overflowX: 'auto',
	maxHeight: '100vh',
	flex: '1',
})

const AppTableContainer = styled('div')({
	flex: '2',
	overflow: 'scroll',
	padding: '0px 20px 0px 20px ',
})

const TopPart = styled('div')({
	padding: '0px 20px 0px 20px ',
})

const PageHeaderContainer = styled('div')({
	display: 'flex',
	justifyContent: 'space-between',
	marginBottom: '20px',
})
