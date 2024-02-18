import React, { forwardRef } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker'
import { styled } from '@mui/material/styles'
import dayjs from 'dayjs'

export const DatePicker = forwardRef(
	({ label, value, onChange, ...otherProps }, ref) => {
		const handleChange = (newValue) => {
			onChange(newValue)
		}

		return (
			<Container ref={ref}>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<Label>{label}</Label>
					<DatePickerStyled
						value={dayjs(value)}
						onChange={handleChange}
						{...otherProps}
					/>
				</LocalizationProvider>
			</Container>
		)
	},
)

const DatePickerStyled = styled(MuiDatePicker)(() => ({}))

const Label = styled('label')({
	color: '#7B7B7B',
	fontFamily: 'Inter',
	fontSize: '14px',
	fontStyle: 'normal',
	fontWeight: 400,
	lineHeight: 'normal',
})

const Container = styled('div')(() => ({
	display: 'flex',
	flexDirection: 'column',
	gap: '4px',
	width: '100%',
}))
