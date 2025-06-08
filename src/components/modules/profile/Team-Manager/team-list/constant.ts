
export interface Team {
  id: string;
  name: string;
  logo: string;
  createdAt: Date;
  isVisible: boolean;
}

export const mockTeams: Team[] = Array.from({ length: 20 }).map((_, i) => ({
  id: `team-${i + 1}`,
  name: "Victory FC",
  logo: "/placeholder.svg?height=40&width=40",
  createdAt: new Date(2025, 0, i + 1),
  isVisible: true,
}));
