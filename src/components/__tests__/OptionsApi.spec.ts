import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import OptionsApi from '../OptionsApi.vue'

describe('OptionsApi', () => {
  it('renders the initial count', () => {
    const wrapper = mount(OptionsApi)

    expect(wrapper.text()).toContain('Options API')
    expect(wrapper.text()).toContain('Count: 1')
  })
})
