import { FILTERS_BUTTONS } from '../commons/consts'
import { type FilterValues } from '../types/types'

interface Props {
  filterSelected: FilterValues
  onFilterChange: (filter: FilterValues) => void
}

export const Filters: React.FunctionComponent<Props> = ({ filterSelected, onFilterChange }) => {
  return (
        <ul className="filters">
            {
                Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
                  const isSelected = key === filterSelected
                  const className = isSelected ? 'selected' : ''
                  return (
                        <li key={key}>
                            <a
                                className={className}
                                href={href}
                                onClick={(evt) => {
                                  evt.preventDefault()
                                  onFilterChange(key as FilterValues)
                                }}
                            >
                                {literal}
                            </a>
                        </li>
                  )
                })
            }
        </ul>
  )
}
