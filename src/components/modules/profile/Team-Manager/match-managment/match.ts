export interface Team {
  id: string
  name: string
  logo: string
}

export interface Match {
  id: string
  homeTeam: Team
  awayTeam: Team
  date: string
  venue: string
  time: string
  status: MatchStatus
}

export type MatchStatus = "upcoming" | "unpublished" | "archived" | "completed"

export interface FilterOptions {
  search: string
  status: string
  date: string
  matchType: string
}

export interface PaginationInfo {
  currentPage: number
  totalPages: number
  totalItems: number
}

export interface Team {
  id: string
  name: string
  logo: string
  membersRemaining: number
}

export interface MatchDetails {
  id: string
  homeTeam: Team
  awayTeam: Team
  dateTime: Date
  venue: string
  status: "scheduled" | "live" | "completed" | "cancelled"
  matchType: string
}

export interface MatchDetailsProps {
  match: MatchDetails
  onBookVenue: () => void
  onViewLineup: () => void
  onBack: () => void
}

