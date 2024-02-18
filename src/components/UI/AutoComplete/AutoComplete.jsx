import React, { forwardRef } from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

export const AutoComplete = forwardRef(
	(
		{ options = [], label, onChange, variant = 'standard', ...otherProps },
		ref,
	) => {
		return (
			<Autocomplete
				ref={ref}
				fullWidth
				options={options}
				renderInput={(params) => (
					<TextField {...params} label={label} variant={variant} />
				)}
				onChange={(_, newValue) => onChange(newValue)}
				{...otherProps}
			/>
		)
	},
)
