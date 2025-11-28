import { create } from 'zustand'

const useCardsStore = create(set => ({
  cards: [],
}))

export { useCardsStore }
