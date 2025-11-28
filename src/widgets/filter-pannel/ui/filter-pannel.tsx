import { Group, MultiSelect } from '@mantine/core'

const FilterPannel = () => {
  return (
    <Group>
      <MultiSelect
        label="Процесс"
        placeholder="Выберите процесс"
        data={[
          'Контакт с настоящим',
          'Когнитивное разделение',
          'Принятие',
          'Наблюдающее Я',
          'Ценности',
          'Проактивность',
        ]}
      />
    </Group>
  )
}

export default FilterPannel
