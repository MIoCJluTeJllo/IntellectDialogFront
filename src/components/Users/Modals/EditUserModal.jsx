import { FormProvider, useForm } from 'react-hook-form'
import { Modal } from '../../UI/Modal/Modal'
import { UserDetails } from '../Details/UserDetails'
import { Button, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { editUser } from '../../../store/actions'
import { getUserById } from '../../../utils/helpers/general'

export const EditUserModal = ({ open, close, editId }) => {
	const user = useSelector((state) => getUserById(state, editId))

	const dispatch = useDispatch()
	const methods = useForm({})

	const handleEditClick = (formData) => {
		dispatch(
			editUser(editId, {
				...formData,
				company: formData?.company?.label,
			}),
		)
		close(false)
	}

	useEffect(() => {
		for (const key in user) {
			methods.setValue(key, user[key])
		}
	}, [editId])

	return (
		<FormProvider {...methods}>
			<Modal open={open} onClose={close}>
				<StyledForm onSubmit={methods.handleSubmit(handleEditClick)}>
					<UserDetails user={user} />
					<Button type='submit'>Edit</Button>
				</StyledForm>
			</Modal>
		</FormProvider>
	)
}

const StyledForm = styled('form')({})
