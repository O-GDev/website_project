import React, { useEffect } from 'react'

function createNice(select){
  if (select.dataset.reactNice) return
  select.dataset.reactNice = '1'
  select.style.display = 'none'

  const wrapper = document.createElement('div')
  wrapper.className = 'nice-select react-nice-select'
  wrapper.style.display = 'inline-block'
  wrapper.style.position = 'relative'
  wrapper.tabIndex = 0

  const current = document.createElement('span')
  current.className = 'current'
  current.textContent = select.options[select.selectedIndex]?.text || ''

  const list = document.createElement('ul')
  list.className = 'list'
  list.style.position = 'absolute'
  list.style.left = '0'
  list.style.top = '100%'
  list.style.display = 'none'
  list.style.zIndex = '50'
  list.style.background = '#fff'
  list.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)'

  Array.from(select.options).forEach(opt => {
    const li = document.createElement('li')
    li.className = 'option'
    li.textContent = opt.text
    li.dataset.value = opt.value
    li.addEventListener('click', () => {
      select.value = opt.value
      current.textContent = opt.text
      list.style.display = 'none'
      select.dispatchEvent(new Event('change', { bubbles: true }))
    })
    list.appendChild(li)
  })

  wrapper.appendChild(current)
  wrapper.appendChild(list)

  current.addEventListener('click', (e) => {
    e.stopPropagation()
    list.style.display = (list.style.display === 'none' || !list.style.display) ? 'block' : 'none'
  })

  document.addEventListener('click', () => { list.style.display = 'none' })

  select.parentNode.insertBefore(wrapper, select.nextSibling)
}

export default function NiceSelectInit(){
  useEffect(() => {
    const selects = Array.from(document.querySelectorAll('select.wide, select.nice-select'))
    selects.forEach(createNice)
    return () => {
      // currently no teardown: wrappers remain but are harmless
    }
  }, [])

  return null
}
