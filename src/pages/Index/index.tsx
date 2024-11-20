import { NetworkTypes } from '@/types'
import { Box } from '@mui/material'

interface Props {
  network: NetworkTypes
}

const Index:React.FC<Props> = () => {
  return (
    <>
      <Box
        sx={(theme) => ({
          paddingTop: theme.spacing(12),
          display: 'flex', // 启用弹性布局
          justifyContent: 'center', // 水平居中
          alignItems: 'center', // 垂直居中
        })}
      >222</Box>
    </>
  )
}

export default Index