import React, { useState, useRef, useEffect } from 'react'

const HybridVariableEditor = ({ 
  value, 
  onChange, 
  placeholder = '', 
  className = '',
  style = {},
  rows = 3 
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const textareaRef = useRef(null)
  const displayRef = useRef(null)
  
  // Fonction pour créer le HTML avec variables colorées
  const createHighlightedHTML = (text) => {
    if (!text || text.trim() === '') {
      return placeholder ? `<span style="color: #9ca3af; font-style: italic;">${placeholder}</span>` : '&nbsp;'
    }
    
    // Remplacer les variables <<variable>> par des spans colorés
    return text
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/&lt;&lt;([^&]+)&gt;&gt;/g, '<span style="background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%); color: #1f2937; font-weight: bold; padding: 2px 6px; border-radius: 4px; border: 1px solid #f59e0b; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">&lt;&lt;$1&gt;&gt;</span>')
      .replace(/\n/g, '<br>')
  }
  
  // Gérer le focus (passer en mode édition)
  const handleFocus = () => {
    setIsEditing(true)
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus()
      }
    }, 0)
  }
  
  // Gérer la perte de focus (revenir en mode affichage)
  const handleBlur = () => {
    setIsEditing(false)
  }
  
  // Gérer les changements de texte
  const handleChange = (e) => {
    onChange(e.target.value)
  }
  
  const baseStyle = {
    minHeight: `${rows * 1.5}rem`,
    padding: '0.75rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.375rem',
    background: 'white',
    color: '#374151',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    outline: 'none',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    cursor: 'text',
    ...style
  }
  
  return (
    <div className={`hybrid-variable-editor ${className}`} style={{ position: 'relative' }}>
      {isEditing ? (
        // Mode édition : textarea normale
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          style={{
            ...baseStyle,
            resize: 'vertical',
            width: '100%',
            fontFamily: 'inherit'
          }}
          rows={rows}
        />
      ) : (
        // Mode affichage : HTML avec surlignement
        <div
          ref={displayRef}
          onClick={handleFocus}
          style={baseStyle}
          dangerouslySetInnerHTML={{ 
            __html: createHighlightedHTML(value) 
          }}
        />
      )}
    </div>
  )
}

export default HybridVariableEditor
