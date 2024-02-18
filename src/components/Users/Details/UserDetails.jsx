import { styled } from '@mui/material/styles'
import { Controller, useFormContext } from 'react-hook-form'
import { AutoComplete } from '../../UI/AutoComplete/AutoComplete'
import { Input } from '../../UI/Input/Input'
import { DatePicker } from '../../UI/DatePicker/DatePicker'
import { Checkbox } from '@mui/material'
import { COMPANIES } from '../../../utils/constants/general'

export const UserDetails = () => {
	const { register, control } = useFormContext()

	return (
		<Wrapper>
			<ContainerDetails>
				<Title>{'USERS'}</Title>
				<Input {...register('name')} label='Name' />
				<Input {...register('lastName')} label='Last Name' />
				<Input {...register('phoneNumber')} label='Phone number' />
				<Input {...register('userName')} label='User name' />

				<Controller
					name='company'
					control={control}
					defaultValue={null}
					render={({ field }) => (
						<AutoComplete
							options={COMPANIES}
							label={'Company'}
							value={field.value}
							{...field}
						/>
					)}
				/>

				<Controller
					name='workSchedule'
					control={control}
					defaultValue={null}
					render={({ field }) => (
						<DatePicker
							value={field.value}
							onChange={field.onChange}
							{...field}
						/>
					)}
				/>

				<div>
					<Controller
						name='status'
						control={control}
						defaultValue={null}
						render={({ field }) => {
							return (
								<>
									<Checkbox
										value={field.value}
										onChange={field.onChange}
									/>{' '}
									ACTIVED
								</>
							)
						}}
					/>
				</div>
			</ContainerDetails>
		</Wrapper>
	)
}

const ContainerDetails = styled('div')({
	borderRadius: '8px',
	padding: '10px 24px',
	display: 'flex',
	flexDirection: 'column',
	gap: '40px',
	width: '100%',
	height: '100%',
})
const Title = styled('h1')({
	color: '#000',
	fontFamily: 'Inter',
	fontSize: '16px',
	fontStyle: 'normal',
	fontWeight: '500',
	lineHeight: 'normal',
})

const Wrapper = styled('form')({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	width: '100%',
	gap: '20px',
})
