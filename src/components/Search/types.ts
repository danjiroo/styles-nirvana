/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SearchProps {
  searchText?: string
}

export interface ItemDefinition {
  id: string
  title?: string
}

export interface SearchResultsProps {
  results: ItemDefinition[]
  handleClick: (data: Record<string, any>) => void
}
