import { Box } from '@mui/system'
import { useTheme } from '@mui/material/styles';
import Header from '../Component/Header'

const Market = () => {
	const theme = useTheme();
	return (
		<Box sx={{ bgcolor: theme.palette.mode === 'dark' ? '#1c2033' : '#E5E5E5' }}>
			<Header />
			<div>Markets page</div>
		</Box>
	)
}

export default Market;