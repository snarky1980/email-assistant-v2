import React, { useEffect } from 'react'
import './HighlightedEditor.css'

const HighlightedEditor = ({ 
  value = '', 
  onChange, 
  placeholder = '', 
  className = '',
  minHeight = '60px',
  ...props 
}) => {
  // Fonction pour détecter les variables
  const hasVariables = (text) => {
    return text && text.includes('<<') && text.includes('>>')
  }

  // Gérer les changements
  const handleChange = (e) => {
    if (onChange) {
      onChange(e)
    }
  }

  return (
    <div className="simple-highlighted-editor">
      <textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`modern-textarea ${hasVariables(value) ? 'has-variables' : ''} ${className}`}
        style={{ minHeight }}
        {...props}
      />
      {hasVariables(value) && (
        <div className="variable-indicator">
          <span className="variable-badge">Variables détectées</span>
        </div>
      )}
    </div>
  )
}

export default HighlightedEditor
