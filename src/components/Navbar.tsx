import { Box, Button } from '@mui/material'

import { palette } from '../themes/AtriumTheme'

const items = ['updates', 'overview', 'integrations', 'profiles', 'team']
export const Navbar = () => {
  return (
    <Box display={`flex`} gap={`12px`} p="4px">
      {items.map((item: string, key: number) => (
        <Box key={key}>
          <Button variant="primary">
            <a href={`#${item}-section`}>{item}</a>
          </Button>
        </Box>
      ))}
      <Box>
        <Button
          variant="primary"
          sx={{
            background: palette.warning.main,
            color: palette.text.secondary,
          }}
        >
          join discord
        </Button>
      </Box>
    </Box>
  )
}
