import { forwardRef } from 'react'
import { TextField } from '@mui/material'

export const Input = forwardRef(
	({ label, variant = 'standard', ...otherProps }, ref) => {
		return (
			<TextField
				label={label}
				variant={variant}
				ref={ref}
				{...otherProps}
			/>
		)
	},
)
