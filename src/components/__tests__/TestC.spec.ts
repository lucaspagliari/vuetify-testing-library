import { describe, it, expect } from 'vitest'
import TestC from '../TestC.vue'
import { vuetify } from '@/vuetify'
import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'

const renderTestC = () => {
  return render(TestC, {
    global: {
      plugins: [vuetify],
    },
  })
}

describe('TestC', () => {
  it('render slots properly', async () => {
    renderTestC()

    const field = screen.getByTestId('field')
    const text = screen.getByTestId('text')

    await userEvent.type(field, 'test')

    expect(text.textContent).toContain('test')
  })
})
