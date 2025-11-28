import { MindCard } from '@entities/mind-card'
import { Grid } from '@mantine/core'

const CardsGrid = ({ cards }) => {
  return (
    <Grid>
      {cards.map(card => (
        <Grid.Col span={3} key={card.id}>
          <MindCard {...card} />
        </Grid.Col>
      ))}
    </Grid>
  )
}

export default CardsGrid
