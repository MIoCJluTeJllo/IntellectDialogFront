import { FormProvider, useForm } from 'react-hook-form'
import { Modal } from '../../UI/Modal/Modal'
import { UserDetails } from '../Details/UserDetails'
import { Button, styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addUser } from '../../../store/actions'

export const CreateUserModal = ({ open, close }) => {
	const dispatch = useDispatch()
	const methods = useForm()

	const onCreateUser = (formData) => {
		if (Object.values(formData).some((item) => !item)) return null
		dispatch(
			addUser({
				...formData,
				company: formData?.company?.label,
				id: Math.random(),
			}),
		)
		close(false)
	}

	return (
		<FormProvider {...methods}>
			<Modal open={open} onClose={close}>
				<StyledForm onSubmit={methods.handleSubmit(onCreateUser)}>
					<UserDetails />
					<Button type='submit' variant='outlined'>
						Create
					</Button>
				</StyledForm>
			</Modal>
		</FormProvider>
	)
}

const StyledForm = styled('form')({})
