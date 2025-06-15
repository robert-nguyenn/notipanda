interface DiscordMessagProps {
  avatarSrc: string
  avatarAlt: string
  username: string
  timestamp: string
  badgeText?: string
  badgeColor?: string
  title: string
  content: {
    [key: string]: string
  }
}

export const DiscordMessage = ({avatarAlt, avatarSrc, content, timestamp, title, username, badgeColor, badgeText}: DiscordMessageProps) => { 

}