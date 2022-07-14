import { validUsername, validURL, validLowerCase, validUpperCase, validAlphabets } from '@/utils/validate.js'
describe('Utils:validate', () => {
  it('validUsername', () => {
    expect(validUsername('admin')).toBe(true)
    expect(validUsername('editor')).toBe(true)
    expect(validUsername('yes')).toBe(true)
    expect(validUsername('no')).toBe(true)
    expect(validUsername('wang')).toBe(true)
    expect(validUsername('zang')).toBe(true)
    expect(validUsername('mo')).toBe(true)
    expect(validUsername('yi')).toBe(true)
    expect(validUsername('fanqie')).toBe(true)
    expect(validUsername('yumi')).toBe(true)
    expect(validUsername('shuidao')).toBe(true)
  })
  it('validURL', () => {
    expect(validURL('https://github.com/PanJiaChen/vue-element-admin')).toBe(true)
    expect(validURL('http://github.com/PanJiaChen/vue-element-admin')).toBe(true)
    expect(validURL('github.com/PanJiaChen/vue-element-admin')).toBe(false)
  })
  it('validLowerCase', () => {
    expect(validLowerCase('abc')).toBe(true)
    expect(validLowerCase('Abc')).toBe(false)
    expect(validLowerCase('123abc')).toBe(false)
  })
  it('validUpperCase', () => {
    expect(validUpperCase('ABC')).toBe(true)
    expect(validUpperCase('Abc')).toBe(false)
    expect(validUpperCase('123ABC')).toBe(false)
  })
  it('validAlphabets', () => {
    expect(validAlphabets('ABC')).toBe(true)
    expect(validAlphabets('Abc')).toBe(true)
    expect(validAlphabets('123aBC')).toBe(false)
  })
})
