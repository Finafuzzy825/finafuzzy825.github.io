export interface NavigationItem {
  href: string
  label: string
}

export type ApplicationKind = 'institution' | 'professional'

export interface ExternalApplicationTarget {
  href?: string
  internalHref: string
  label: string
  unavailableMessage: string
}

export interface ResolvedApplicationTarget extends ExternalApplicationTarget {
  isAvailable: boolean
}

export interface WorkingGroupSummary {
  description: string
  href: string
  id: string
  kind: 'working-group' | 'initiative'
  title: string
}

export interface MemberSummary {
  description?: string
  id: string
  logo?: string
  name: string
  type: 'founding' | 'institution' | 'research' | 'ecosystem'
}

export type NewsCategory = 'news' | 'event' | 'insight' | 'result'

export type ContentBlock =
  | { text: string; type: 'heading' }
  | { items: readonly string[]; type: 'list' }
  | { text: string; type: 'paragraph' }

export interface NewsEntry {
  body: readonly ContentBlock[]
  category: NewsCategory
  date: string
  description: string
  featured?: boolean
  published: boolean
  slug: string
  title: string
}

export interface ValueProposition {
  description: string
  id: string
  title: string
}

export interface ParticipationPath {
  description: string
  id: string
  title: string
}
