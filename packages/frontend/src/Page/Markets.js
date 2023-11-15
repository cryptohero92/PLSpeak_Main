import { Box } from '@mui/system'
import { useTheme } from '@mui/material/styles';
import Header from '../Component/Header'
import { Market } from '../Component/Market'

const Markets = () => {
	const theme = useTheme();
	return (
		<Box sx={{ bgcolor: theme.palette.mode === 'dark' ? '#1c2033' : '#E5E5E5' }}>
			<Header />
			<Market />
		</Box>
	)
}

export default Markets;