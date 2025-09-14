import React, { useState, useEffect } from 'react'
import './SimpleEditor.css'

const SimpleEditor = ({ 
  value = '', 
  onChange, 
  placeholder = '', 
  className = '',
  minHeight = '60px',
  ...props 
}) => {
  const [displayValue, setDisplayValue] = useState('')

  // Fonction pour créer le HTML avec les variables colorées
  const highlightVariables = (text) => {
    if (!text) return ''
    
    // Échapper le HTML et remplacer les variables
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n/g, '<br>')
      .replace(/&lt;&lt;([^&]+)&gt;&gt;/g, '<span class="variable-highlight">&lt;&lt;$1&gt;&gt;</span>')
  }

  // Mettre à jour l'affichage quand la valeur change
  useEffect(() => {
    setDisplayValue(highlightVariables(value))
  }, [value])

  // Gérer les changements de texte
  const handleChange = (e) => {
    const newValue = e.target.value
    if (onChange) {
      onChange({ target: { value: newValue } })
    }
  }

  return (
    <div className="simple-editor-container">
      {/* Textarea invisible pour l'édition */}
      <textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`simple-editor-textarea ${className}`}
        style={{ minHeight }}
        {...props}
      />
      
      {/* Div pour l'affichage avec coloration */}
      <div
        className="simple-editor-display"
        style={{ minHeight }}
        dangerouslySetInnerHTML={{ __html: displayValue || `<span class="placeholder">${placeholder}</span>` }}
      />
    </div>
  )
}

export default SimpleEditor
