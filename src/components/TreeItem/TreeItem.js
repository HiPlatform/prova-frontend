import React, { useState, useEffect } from 'react'
import { Checkbox } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import TreeList from '../TreeList/TreeList'

import './TreeItem.scss'

const TreeItem = ({ 
  item, 
  children,
  isChecked
}) => {
  const [collapsed, setCollapsed] = useState(false)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const collapsedIDs = JSON.parse(localStorage.getItem('expanded')) || []

    collapsedIDs.forEach(element => {
      if (element === item.id) {
        setCollapsed(true)
      }
    });

  }, [item])

  useEffect(() => {
    if (isChecked) {
      setChecked(isChecked)
    } else {
      const checkedIDs = JSON.parse(localStorage.getItem('check')) || []
      checkedIDs.forEach(element => {
        if (element === item.id) {
          setChecked(true)
        }
      });
    }

  }, [isChecked, item])

  useEffect(() => {
    let expandeds = JSON.parse(localStorage.getItem('expanded')) || []
    if (collapsed) {
      localStorage.setItem('expanded', JSON.stringify([...expandeds, item.id]))
    } else {
      const items = expandeds.filter(id => id !== item.id)
      localStorage.setItem('expanded', JSON.stringify(items))
    }
  }, [collapsed, item])

  useEffect(() => {
    let checks = JSON.parse(localStorage.getItem('check')) || []
    if (checked) {
      localStorage.setItem('check', JSON.stringify([...checks, item.id]))
    } else {
      const items = checks.filter(id => id !== item.id)
      localStorage.setItem('check', JSON.stringify(items))
    }
  }, [checked, item])

  const toggleCollapse = () => setCollapsed((val) => !val)
  const toggleChecked = () => setChecked((val) => !val)

  return (
    <div 
      className={`tree-item-container ${collapsed && 'teste'}`} 
    >
      <div className="item-header">
        <div onClick={toggleChecked}>
          <Checkbox checked={checked} />
          <span>{item.name}</span>
        </div>

        {children.length > 0 && (
          <FontAwesomeIcon 
            onClick={toggleCollapse} 
            className={`icon ${collapsed && 'collapsed'}`} icon={faChevronUp} 
          />
        )}
      </div>

      <div className={`item-body ${collapsed ? 'collapsed-item' : ''}`}>
        {collapsed && children?.length > 0 && (
          <TreeList data={children} checked={checked} />
        )}
      </div>
    </div>
  )
}

export default TreeItem