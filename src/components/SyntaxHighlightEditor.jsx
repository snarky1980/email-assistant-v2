import React, { useState, useRef, useEffect } from 'react'

const SyntaxHighlightEditor = ({ 
  value, 
  onChange, 
  placeholder = '', 
  className = '',
  style = {},
  rows = 3 
}) => {
  const textareaRef = useRef(null)
  const highlightRef = useRef(null)
  
  // Fonction pour créer le HTML avec syntax highlighting
  const createHighlightedHTML = (text) => {
    if (!text) return ''
    
    // Remplacer les variables <<variable>> par des spans colorés
    return text
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/&lt;&lt;([^&]+)&gt;&gt;/g, '<span class="variable-highlight">&lt;&lt;$1&gt;&gt;</span>')
      .replace(/\n/g, '<br>')
  }
  
  // Synchroniser le scroll entre textarea et highlight
  const handleScroll = () => {
    if (textareaRef.current && highlightRef.current) {
      highlightRef.current.scrollTop = textareaRef.current.scrollTop
      highlightRef.current.scrollLeft = textareaRef.current.scrollLeft
    }
  }
  
  // Gérer les changements de texte
  const handleChange = (e) => {
    onChange(e.target.value)
  }
  
  return (
    <div className="syntax-highlight-container" style={style}>
      {/* Couche de highlighting en arrière-plan */}
      <div 
        ref={highlightRef}
        className="syntax-highlight-backdrop"
        dangerouslySetInnerHTML={{ 
          __html: createHighlightedHTML(value) 
        }}
      />
      
      {/* Textarea transparente par-dessus */}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        onScroll={handleScroll}
        placeholder={placeholder}
        className={`syntax-highlight-textarea ${className}`}
        rows={rows}
        spellCheck={false}
      />
    </div>
  )
}

export default SyntaxHighlightEditor
