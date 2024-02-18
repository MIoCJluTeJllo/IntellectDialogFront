import { Modal } from '../../UI/Modal/Modal'
import { Button, styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../../../store/actions'

export const ConfirmModal = ({ open, close, deleteId }) => {
	const dispatch = useDispatch()

	const handleDeleteClick = () => {
		dispatch(deleteUser(deleteId))
		close(false)
	}

	return (
		<Modal open={open} onClose={close}>
			<Container>
				<h3>Вы точно хотите удалить?</h3>
				<ButtonContainer>
					<Button variant='contained' onClick={() => close(false)}>
						Отмена
					</Button>
					<Button variant='contained' onClick={handleDeleteClick}>
						Удалить
					</Button>
				</ButtonContainer>
			</Container>
		</Modal>
	)
}

const Container = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	gap: '10px',
	textAlign: 'center',
})

const ButtonContainer = styled('div')({
	display: 'flex',
	gap: '10px',
	justifyContent: 'center',
})
