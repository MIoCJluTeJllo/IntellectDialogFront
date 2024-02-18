import { Modal as MuiModal } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Modal = ({ open, onClose, leftText, children }) => {
	return (
		<MuiModal open={open} onClose={onClose}>
			<CenteredContainer>
				<TopPart>
					<Title>{leftText}</Title>
				</TopPart>
				{children}
			</CenteredContainer>
		</MuiModal>
	)
}

const CenteredContainer = styled('div')(() => ({
	position: 'absolute',
	left: '50%',
	top: '50%',
	transform: 'translate(-50%, -50%)',
	backgroundColor: 'white',
	outline: 'none',
	padding: '28px 24px',
	borderRadius: '12px',
	width: '30%',
}))

const TopPart = styled('div')({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
})

const Title = styled('span')({
	fontFamily: 'Inter',
	fontSize: '18px',
	fontWeight: '500',
	fontStyle: 'normal',
})
