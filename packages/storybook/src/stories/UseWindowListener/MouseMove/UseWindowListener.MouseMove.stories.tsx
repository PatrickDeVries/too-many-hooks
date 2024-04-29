import type { Meta, StoryObj } from '@storybook/react'
import MouseMove from './MouseMove'
import MOUSE_MOVE_CODE from './MouseMove.tsx?raw'

type MouseMoveMeta = Meta<typeof MouseMove>

const meta: MouseMoveMeta = {
  title: 'UseWindowListener',
  component: MouseMove,
}
export default meta

export const mouseMove: StoryObj<MouseMoveMeta> = {
  name: 'Mouse Move',
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: MOUSE_MOVE_CODE, language: 'tsx' },
    },
  },
  argTypes: {
    addMouseMoveAction: {
      action: (...data: unknown[]) => data,
    },
  },
  render: args => <MouseMove {...args} />,
}
