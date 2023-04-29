import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BaseCard from '../BaseCard.vue'
import { vuetify } from '@/vuetify'
import { faker } from '@faker-js/faker';


describe('BaseCard', () => {
  it('render slots properly', () => {
    const title = faker.name.jobTitle()
    const text = faker.name.jobDescriptor()
    const button = faker.name.jobArea()

    const wrapper = mount(BaseCard, {
      slots: { title, default:text, button },
      global: {
        plugins: [vuetify],
      },
    })
    expect(wrapper.text()).toContain(title)
    expect(wrapper.text()).toContain(text)
    expect(wrapper.text()).toContain(button)
  })
})
