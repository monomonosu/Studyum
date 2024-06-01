import type { Meta, StoryObj } from '@storybook/react'
import { SessionCard } from '@/components/Cards/SessionCard'

const meta = {
  title: 'Cards/SessionCard',
  component: SessionCard
} satisfies Meta<typeof SessionCard>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultSessionCard: Story = {
  args: {
    userName: 'ユーザー名',
    title: 'タイトル',
    created_at: '2021-01-01',
    color: 'primary'
  }
}

export const GreenSessionCard: Story = {
  args: {
    color: 'success'
  }
}

export const RedSessionCard: Story = {
  args: {
    userName: '田中　ほげ太郎',
    title: 'もくもく会参加メンバー募集',
    content: 'もくもく会参加メンバー募集します。一緒に勉強しましょう！',
    tags: ['勉強会', 'プログラミング', 'もくもく会'],
    color: 'error'
  }
}
