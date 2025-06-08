"use client"

import { FilterOptions, Match, PaginationInfo } from "@/components/modules/profile/Team-Manager/match-managment/match"
import { useState, useMemo } from "react"

const ITEMS_PER_PAGE = 10

// Mock data
const mockMatches: Match[] = [
  {
    id: "1",
    homeTeam: { id: "1", name: "Victory FC", logo: "/placeholder.svg?height=40&width=40" },
    awayTeam: { id: "2", name: "Dragons FC", logo: "/placeholder.svg?height=40&width=40" },
    date: "20th Nov 2025",
    venue: "Victory Park Stadium",
    time: "3:00 PM",
    status: "upcoming",
  },
  {
    id: "2",
    homeTeam: { id: "1", name: "Victory FC", logo: "/placeholder.svg?height=40&width=40" },
    awayTeam: { id: "2", name: "Dragons FC", logo: "/placeholder.svg?height=40&width=40" },
    date: "20th Nov 2025",
    venue: "Victory Park Stadium",
    time: "3:00 PM",
    status: "unpublished",
  },
  {
    id: "3",
    homeTeam: { id: "1", name: "Victory FC", logo: "/placeholder.svg?height=40&width=40" },
    awayTeam: { id: "2", name: "Dragons FC", logo: "/placeholder.svg?height=40&width=40" },
    date: "20th Nov 2025",
    venue: "Victory Park Stadium",
    time: "3:00 PM",
    status: "archived",
  },
  {
    id: "4",
    homeTeam: { id: "1", name: "Victory FC", logo: "/placeholder.svg?height=40&width=40" },
    awayTeam: { id: "2", name: "Dragons FC", logo: "/placeholder.svg?height=40&width=40" },
    date: "20th Nov 2025",
    venue: "Victory Park Stadium",
    time: "3:00 PM",
    status: "completed",
  },
]

export function useMatches() {
  const [matches] = useState<Match[]>(mockMatches)
  const [filters, setFilters] = useState<FilterOptions>({
    search: "",
    status: "all",
    date: "",
    matchType: "single",
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [activeTab, setActiveTab] = useState<"my" | "all">("my")

  const filteredMatches = useMemo(() => {
    return matches.filter((match) => {
      const matchesSearch =
        !filters.search ||
        match.homeTeam.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        match.awayTeam.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        match.venue.toLowerCase().includes(filters.search.toLowerCase())

      const matchesStatus = filters.status === "all" || match.status === filters.status

      const matchesDate = !filters.date || match.date.includes(filters.date)

      return matchesSearch && matchesStatus && matchesDate
    })
  }, [matches, filters])

  const paginatedMatches = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredMatches.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [filteredMatches, currentPage])

  const pagination: PaginationInfo = {
    currentPage,
    totalPages: Math.ceil(filteredMatches.length / ITEMS_PER_PAGE),
    totalItems: filteredMatches.length,
  }

  const updateFilters = (newFilters: FilterOptions) => {
    setFilters(newFilters)
    setCurrentPage(1) // Reset to first page when filters change
  }

  const applyFilters = () => {
    // In a real app, this might trigger an API call
    console.log("Applying filters:", filters)
  }

  return {
    matches: paginatedMatches,
    filters,
    pagination,
    activeTab,
    setActiveTab,
    updateFilters,
    applyFilters,
    setCurrentPage,
  }
}
