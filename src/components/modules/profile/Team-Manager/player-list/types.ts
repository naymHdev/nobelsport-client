// types.ts
export type PlayerStatus = "Available" | "Unavailable";
export type AccountType = "Basic" | "Pro Account";

export interface PlayerCardData {
  id: string;
  name: string;
  avatarUrl?: string;
  initials: string;
  position: string;
  status: PlayerStatus;
  teamName?: string;
  accountType?: AccountType;
  badgeStatus?: "pending" | "sent-request" | "accepted" | "available" | null;
  actions: (
    | "add"
    | "accept"
    | "reject"
    | "cancel"
    | "message"
    | "sendRequest"
  )[];
}
