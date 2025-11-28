import { Group } from '@mantine/core'
import { CardsGrid } from '@widgets/cards-grid'
import { FilterPannel } from '@widgets/filter-pannel'
import { useCardsStore } from '../model/store'

const CardsFilter = () => {
  const cards = useCardsStore(state => state.cards)

  return (
    <Group>
      <FilterPannel />
      <CardsGrid cards={cards} />
    </Group>
  )
}

export default CardsFilter
